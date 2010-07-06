/* =============================================================================
* Override:  [OPEN-1034] findField() access for RadioGroup and CheckboxGroup
* This overrides plus invoking Ext.form.BasicForm.reset just before Ext.form.BasicForm.setValues, 
* fix the Ext.form.BasicForm.setValues method for check boxes and radio button.
* See:
* - http://www.sencha.com/forum/showthread.php?101373-OPEN-1034-findField%28%29-access-for-RadioGroup-and-CheckboxGroup&highlight=basicform+checkbox
============================================================================= */
Ext.override(Ext.form.RadioGroup, {
    //private
    isRadioGroup: true
});

// add type flag to CheckboxGroup
Ext.override(Ext.form.CheckboxGroup, {
    //private
    isCheckboxGroup: true
});

//Override for finding fields in checkboxgroups or radiogroups
Ext.override(Ext.BasicForm, {
  findField: function(id) {
        var field = this.items.get(id);

        if (!Ext.isObject(field)) {
            //searches for the field corresponding to the given id. Used recursively for composite fields
            var findMatchingField = function(f) {
                if (f.isFormField) {
                    if (f.dataIndex == id || f.id == id || f.getName() == id) {
                        field = f;
                        return false;
                    } else if (f.isComposite && f.rendered) {
                        return f.items.each(findMatchingField);
                    } else if (f.isRadioGroup && f.rendered) {
                        // for a radio group we assume
                        // only want to find the 'checked' radio
                        return f.items.each(function(sf){
                            if ((sf.dataIndex == id || sf.id == id || sf.getName() == id) && sf.getValue()) {
                                field = sf;
                                return false;
                            }
                        },this);
                    } else if (f.isCheckboxGroup && f.rendered) {
                        // for checkbox group we want 1st match
                        return f.items.each(findMatchingField);
                    }
                }
            };

            this.items.each(findMatchingField);
        }
        return field || null;
    }
});

/* =============================================================================
* Added by Davide Zerbetto (July 2010)
* This is actually a work-around: there is a problem with the lookup trigger on filters definition on sub-queries.
* In order to reproduce the problem you should comment the following override, then define a filter on a sub-query: 
* use the lookup trigger in the right operand description, then try to open it again: the right operand cell is not editable anymore.
* May be it is trying to delete the previous editor but something fails....
* The error is: 
* [Errore: this.doc is undefined
* Source file: ........../SpagoBIQbeEngine/js/lib/ext-3.2.1/ext-all-debug-w-comments.js
* Row: 59174] 
* Therefore I put an additional "if (this.doc)" condition before "this.doc.un('mousedown', this.mimicBlur, this);".
============================================================================= */
Ext.override(Ext.form.TriggerField, {
    onDestroy : function() {
	    Ext.destroy(this.trigger, this.wrap);
	    if (this.doc) { // added by Davide Zerbetto (July 2010)
		    if (this.mimicing){
		        this.doc.un('mousedown', this.mimicBlur, this);
		    }
		    delete this.doc;
	    } // added by Davide Zerbetto (July 2010)
	    Ext.form.TriggerField.superclass.onDestroy.call(this);
	}
});