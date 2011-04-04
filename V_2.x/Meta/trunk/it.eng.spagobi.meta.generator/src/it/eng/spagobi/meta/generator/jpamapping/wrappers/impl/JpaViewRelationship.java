package it.eng.spagobi.meta.generator.jpamapping.wrappers.impl;

import it.eng.spagobi.meta.generator.utils.StringUtils;
import it.eng.spagobi.meta.model.business.BusinessView;
import it.eng.spagobi.meta.model.business.BusinessViewInnerJoinRelationship;
import it.eng.spagobi.meta.model.physical.PhysicalColumn;
import it.eng.spagobi.meta.model.physical.PhysicalTable;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 
 * @deprecated until futher testing
 * 
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class JpaViewRelationship extends AbstractJpaRelationship {

	BusinessViewInnerJoinRelationship businessInnerRelationship;
	
	private static Logger logger = LoggerFactory.getLogger(JpaViewRelationship.class);
	
	public JpaViewRelationship(JpaViewInnerTable jpaInnerTable, BusinessViewInnerJoinRelationship businessInnerRelationship) {
		this.jpaTable = jpaInnerTable;
		this.businessInnerRelationship = businessInnerRelationship;
		
		if ( isSourceRole() ){
			this.cardinality = JpaRelationship.MANY_TO_ONE;
		} else if ( isDestinationRole() ){
			this.cardinality = JpaRelationship.ONE_TO_MANY;				
		}
		
		this.bidirectional = true;
	}
	
	private boolean isSourceRole() {
		return businessInnerRelationship.getSourceTable().equals( jpaTable.getPhysicalTable() );
	}
	
	private boolean isDestinationRole() {
		return businessInnerRelationship.getDestinationTable().equals( jpaTable.getPhysicalTable() );
	}

	/**
	 * return true if the BC is included into the Physical column list
	 * @param phy
	 * @param column
	 * @return
	 */
	protected PhysicalColumn findPhysicalColumn (List<PhysicalColumn> fColumn,PhysicalColumn bColumn){
		for (PhysicalColumn fc : fColumn){
			if (bColumn.getName().equals(fc.getName())){
				logger.info("FOUND the "+fc.getName()+" Physical Column");
				return fc;
			}
		}	
		logger.info("No Physical Column FOUND");
		return null;
	}
	
	public BusinessViewInnerJoinRelationship getBusinessInnerRelationship() {
		return businessInnerRelationship;
	}
	public void setBusinessInnerRelationship(
			BusinessViewInnerJoinRelationship businessInnerRelationship) {
		this.businessInnerRelationship = businessInnerRelationship;
	}
	/**
	 * return the destination Physical table of the relationship
	 * @param bv the destination BV of the relationship
	 * @param columns ...
	 * @return
	 */
	private PhysicalTable findPhysicalTable(BusinessView bv,List<PhysicalColumn> columns){
		// the destination physical tables
		List<PhysicalTable> physicaltables=bv.getPhysicalTables();
		PhysicalTable result=null;
		for (PhysicalTable phyt : physicaltables){
			boolean found=false;
			for (PhysicalColumn bc : columns){
				PhysicalColumn fc=findPhysicalColumn(phyt.getColumns(),bc);
				if (fc != null){
					logger.info("Physical Column FOUND "+bc.getName());
					found=true;
				}
					
			}
			if (found) result=phyt;
		}
		return result;
	}
	
	/**
	 * The inner relationship can have join reference between PhisicalTable only
	 */
	public AbstractJpaTable getReferencedTable(){
		logger.debug("IN");
		
		BusinessView businessView = ((JpaViewInnerTable)jpaTable).getBusinessView();
		
		if ( isSourceRole() ) {			
			if (businessInnerRelationship.getDestinationTable() instanceof PhysicalTable){
				return new JpaViewInnerTable(businessView,(PhysicalTable)businessInnerRelationship.getDestinationTable()); 
			}else {
				logger.error("businessInnerRelationship.getDestinationTable() IS not a PhysicalTable......");
			}
		} else {
			if (businessInnerRelationship.getSourceTable() instanceof PhysicalTable){
				return new JpaViewInnerTable(businessView,(PhysicalTable)businessInnerRelationship.getSourceTable()); 
			}else {
				logger.error("businessInnerRelationship.getSourceTable() IS not a PhysicalTable......");
			}
		}
		logger.error("getReferencedTable() return null......");
		return null;
	
	}
	
	@Override
	public String getSimpleSourceColumnName(){
		return StringUtils.doubleQuote(businessInnerRelationship.getSourceColumns().get(0).getName());
	}
	@Override
	public String getPropertyName(){
		if (businessInnerRelationship.getSourceColumns()!=null){
			return StringUtils.columnNameToVarName( businessInnerRelationship.getSourceColumns().get(0).getName());
		}
		else return "";
	}
	@Override
	protected String getOppositeRoleName(){
		return StringUtils.columnNameToVarName( businessInnerRelationship.getSourceColumns().get(0).getName());	
	}
	@Override
	public String getBidirectionalPropertyName(){
		if (businessInnerRelationship.getName() != null) 
			return StringUtils.pluralise(StringUtils.columnNameToVarName( businessInnerRelationship.getName()));
		else 
			return StringUtils.pluralise(StringUtils.columnNameToVarName("innerJoin"));
	}	
}
