{type:"class",attributes:{"name":"Transition","hasWarning":"true","packageName":"qx.util.fsm","superClass":"qx.core.Object","fullName":"qx.util.fsm.Transition","type":"class"},children:[
  {type:"desc",attributes:{"text":"<p>Create a new possible transition from one state to another.</p>"}},
  {type:"constructor",children:[
    {type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"transitionName"},children:[
          {type:"desc",attributes:{"text":"<p>The name of this transition, used in debug messages.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"String"}}
            ]}
          ]},
        {type:"param",attributes:{"name":"transitionInfo"},children:[
          {type:"desc",attributes:{"text":"<pre>\n  An object optionally containing any of the following properties:\n\n    predicate -\n      A function which is called to determine whether this transition is\n      acceptable.  An acceptable transition will cause the transition's\n      \"ontransition\" function to be run, the current state's \"onexit\"\n      function to be run, and the new state's \"onentry\" function to be\n      run.\n\n      The predicate function's signature is function(fsm, event) and it\n      is saved in the predicate property of the transition object.  In\n      the predicate function:\n\n        fsm -\n          The finite state machine object to which this state is\n          attached.\n\n        event -\n          The event that caused a run of the finite state machine\n\n      The predicate function should return one of the following three\n      values:\n\n        - true means the transition is acceptable\n\n        - false means the transition is not acceptable, and the next\n          transition (if one exists) should be tried to determine if it\n          is acceptable\n\n        - null means that the transition determined that no further\n          transitions should be tried.  This might be used when the\n          transition ascertained that the event is for a target that is\n          not available in the current state, and the event has called\n          fsm.queueEvent() to have the event delivered upon state\n          transition.\n\n      It is possible to create a default predicate -- one that will cause\n      a transition to be acceptable always -- by either not providing a\n      predicate property, or by explicitely either setting the predicate\n      property to 'true' or setting it to a function that unconditionally\n      returns 'true'.  This default transition should, of course, always\n      be the last transition added to a state, since no transition added\n      after it will ever be tried.\n\n    nextState -\n      The state to which we transition, if the predicate returns true\n      (meaning the transition is acceptable).  The value of nextState may\n      be:\n\n        - a string, the state name of the state to transition to\n\n        - One of the constants:\n          - qx.util.fsm.FiniteStateMachine.StateChange.CURRENT_STATE:\n              Remain in whatever is the current state\n          - qx.util.fsm.FiniteStateMachine.StateChange.POP_STATE_STACK:\n              Transition to the state at the top of the saved-state\n              stack, and remove the top element from the saved-state\n              stack.  Elements are added to the saved-state stack using\n              fsm.pushState().  It is an error if no state exists on the\n              saved-state stack.\n          - qx.util.fsm.FiniteStateMachine.StateChange.TERMINATE:\n              TBD\n\n    autoActionsBeforeOntransition -\n    autoActionsAfterOntransition -\n      Automatic actions which take place at the time specified by the\n      property name.  In all cases, the action takes place immediately\n      before or after the specified function.\n\n      The property value for each of these properties is an object which\n      describes some number of functions to invoke on a set of specified\n      objects (typically widgets).\n\n      See {@link qx.util.fsm.State} for an example of autoActions.\n\n    ontransition -\n      A function which is called if the predicate function for this\n      transition returns true.  Its signature is function(fsm, event) and\n      it is saved in the ontransition property of the transition object.\n      In the ontransition function:\n\n        fsm -\n          The finite state machine object to which this state is\n          attached.\n\n        event -\n          The event that caused a run of the finite state machine\n\n    Additional properties may be provided in transInfo.  They will not be\n    used by the finite state machine, but will be available via\n    this.getUserData(\"\") during the transition's predicate\n    and ontransition functions.\n  </pre>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"Object"}}
            ]}
          ]}
        ]}
      ]}
    ]},
  {type:"methods",children:[
    {type:"method",attributes:{"access":"private","hasError":"true","name":"__transformNextState"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"28","line":"314"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","hasError":"true","name":"__transformOntransition"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"31","line":"347"}}
        ]}
      ]},
    {type:"method",attributes:{"access":"private","hasError":"true","name":"__transformPredicate"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"}}
        ]},
      {type:"errors",children:[
        {type:"error",attributes:{"msg":"Documentation is missing.","column":"28","line":"284"}}
        ]}
      ]},
    {type:"method",attributes:{"name":"getAutoActionsAfterOntransition","fromProperty":"autoActionsAfterOntransition"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>autoActionsAfterOntransition</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #autoActionsAfterOntransition}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>autoActionsAfterOntransition</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getAutoActionsBeforeOntransition","fromProperty":"autoActionsBeforeOntransition"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>autoActionsBeforeOntransition</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #autoActionsBeforeOntransition}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>autoActionsBeforeOntransition</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getName","fromProperty":"name"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>name</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getNextState","fromProperty":"nextState"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>nextState</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #nextState}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>nextState</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getOntransition","fromProperty":"ontransition"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>ontransition</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #ontransition}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>ontransition</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"getPredicate","fromProperty":"predicate"},children:[
      {type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>predicate</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #predicate}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>(Computed) value of <code>predicate</code>.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAutoActionsAfterOntransition","fromProperty":"autoActionsAfterOntransition"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>autoActionsAfterOntransition</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>autoActionsAfterOntransition</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #autoActionsAfterOntransition}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initAutoActionsBeforeOntransition","fromProperty":"autoActionsBeforeOntransition"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>autoActionsBeforeOntransition</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>autoActionsBeforeOntransition</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #autoActionsBeforeOntransition}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initName","fromProperty":"name"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>name</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>name</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initNextState","fromProperty":"nextState"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>nextState</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>nextState</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #nextState}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initOntransition","fromProperty":"ontransition"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>ontransition</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>ontransition</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #ontransition}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"access":"protected","name":"initPredicate","fromProperty":"predicate"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>Initial value for property <code>predicate</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>predicate</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #predicate}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>the default value</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAutoActionsAfterOntransition","fromProperty":"autoActionsAfterOntransition"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>autoActionsAfterOntransition</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #autoActionsAfterOntransition}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetAutoActionsBeforeOntransition","fromProperty":"autoActionsBeforeOntransition"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>autoActionsBeforeOntransition</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #autoActionsBeforeOntransition}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetName","fromProperty":"name"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>name</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetNextState","fromProperty":"nextState"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>nextState</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #nextState}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetOntransition","fromProperty":"ontransition"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>ontransition</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #ontransition}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"resetPredicate","fromProperty":"predicate"},children:[
      {type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>predicate</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #predicate}.</p>"}},
      {type:"return",children:[
        {type:"types",children:[
          {type:"entry",attributes:{"type":"void"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAutoActionsAfterOntransition","fromProperty":"autoActionsAfterOntransition"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>autoActionsAfterOntransition</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>autoActionsAfterOntransition</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #autoActionsAfterOntransition}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setAutoActionsBeforeOntransition","fromProperty":"autoActionsBeforeOntransition"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>autoActionsBeforeOntransition</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>autoActionsBeforeOntransition</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #autoActionsBeforeOntransition}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setName","fromProperty":"name"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>name</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setNextState","fromProperty":"nextState"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>nextState</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>nextState</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #nextState}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setOntransition","fromProperty":"ontransition"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>ontransition</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>ontransition</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #ontransition}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]},
    {type:"method",attributes:{"name":"setPredicate","fromProperty":"predicate"},children:[
      {type:"params",children:[
        {type:"param",attributes:{"name":"value"},children:[
          {type:"desc",attributes:{"text":"<p>New value for property <code>predicate</code>.</p>"}},
          {type:"types",children:[
            {type:"entry",attributes:{"type":"var"}}
            ]}
          ]}
        ]},
      {type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>predicate</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #predicate}.</p>"}},
      {type:"return",children:[
        {type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},
        {type:"types",children:[
          {type:"entry",attributes:{"type":"var"}}
          ]}
        ]}
      ]}
    ]},
  {type:"properties",children:[
    {type:"property",attributes:{"defaultValue":"[Unsupported item type: function]","name":"autoActionsAfterOntransition","propertyType":"new"},children:[
      {type:"desc",attributes:{"text":"<p>Automatic actions to take immediately after calling the transition&#8217;s\nontransition function.  This is documented in the constructor, and is\ntypically provided through the constructor&#8217;s transitionInfo object, but\nit is also possible (but highly <span class=\"caps\">NOT</span> recommended) to change this\ndynamically.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"[Unsupported item type: function]","name":"autoActionsBeforeOntransition","propertyType":"new"},children:[
      {type:"desc",attributes:{"text":"<p>Automatic actions to take prior to calling the transition&#8217;s\nontransition function.  This is documented in the constructor, and is\ntypically provided through the constructor&#8217;s transitionInfo object, but\nit is also possible (but highly <span class=\"caps\">NOT</span> recommended) to change this\ndynamically.</p>"}}
      ]},
    {type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"name","check":"NonEmptyString"},children:[
      {type:"desc",attributes:{"text":"<p>The name of this transition</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"qx.util.fsm.FiniteStateMachine.StateChange.CURRENT_STATE","name":"nextState","propertyType":"new"},children:[
      {type:"desc",attributes:{"text":"<p>The state to transition to, if the predicate determines that this\ntransition is acceptable.  This is documented in the constructor, and\nis typically provided through the constructor&#8217;s transitionInfo object,\nbut it is also possible (but highly <span class=\"caps\">NOT</span> recommended) to change this\ndynamically.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"[Unsupported item type: function]","name":"ontransition","propertyType":"new"},children:[
      {type:"desc",attributes:{"text":"<p>The function run when the transition is accepted.  This is documented\nin the constructor, and is typically provided through the constructor&#8217;s\ntransitionInfo object, but it is also possible (but highly <span class=\"caps\">NOT</span>\nrecommended) to change this dynamically.</p>"}}
      ]},
    {type:"property",attributes:{"defaultValue":"[Unsupported item type: function]","name":"predicate","propertyType":"new"},children:[
      {type:"desc",attributes:{"text":"<p>The predicate function for this transition.  This is documented in the\nconstructor, and is typically provided through the constructor&#8217;s\ntransitionInfo object, but it is also possible (but highly <span class=\"caps\">NOT</span>\nrecommended) to change this dynamically.</p>"}}
      ]}
    ]}
  ]}