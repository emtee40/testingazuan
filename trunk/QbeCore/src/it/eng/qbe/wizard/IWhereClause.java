/*
 * Created on 4-feb-2005
 *
 * TODO To change the template for this generated file go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
package it.eng.qbe.wizard;

import java.io.Serializable;
import java.util.List;

/**
 * @author Zoppello
 *
 * TODO To change the template for this generated type comment go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
public interface IWhereClause extends  Serializable {

	public List getWhereFields();
	
	public void setWhereFields(List aList);
	
	public void addWhereField(IWhereField whereField);
	
	public void delWhereField(IWhereField whereField);
	
public void moveUp(IWhereField whereField);
	
	public void moveDown(IWhereField whereField);
}
