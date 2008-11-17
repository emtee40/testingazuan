/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2008 Engineering Ingegneria Informatica S.p.A.

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

**/
package it.eng.spagobi.commons.utilities;

import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.bo.BIObjectParameter;
import it.eng.spagobi.behaviouralmodel.analyticaldriver.bo.Parameter;
import it.eng.spagobi.behaviouralmodel.lov.bo.ModalitiesValue;
import it.eng.spagobi.commons.constants.SpagoBIConstants;
import it.eng.spagobi.commons.dao.DAOFactory;

import java.util.List;

import org.apache.log4j.Logger;

/**
 * @author Gioia
 * 
 */
public class ParameterValuesEncoder {

    static private Logger logger = Logger.getLogger(ParameterValuesEncoder.class);
    private String separator;
    private String openBlockMarker;
    private String closeBlockMarker;

    public static final String DEFAULT_SEPARATOR = ";";
    public static final String DEFAULT_OPEN_BLOCK_MARKER = "{";
    public static final String DEFAULT_CLOSE_BLOCK_MARKER = "}";
    
    // ///////////////////////////////////////////////////////////
    // CONSTRUCTORS
    // ///////////////////////////////////////////////////////////

    /**
     * Instantiates a new parameter values encoder.
     */
    public ParameterValuesEncoder() {
	this(DEFAULT_SEPARATOR, DEFAULT_OPEN_BLOCK_MARKER, DEFAULT_CLOSE_BLOCK_MARKER);
    }

    /**
     * Instantiates a new parameter values encoder.
     * 
     * @param separator the separator
     * @param openBlockMarker the open block marker
     * @param closeBlockMarker the close block marker
     */
    public ParameterValuesEncoder(String separator, String openBlockMarker, String closeBlockMarker) {
	this.separator = separator;
	this.openBlockMarker = openBlockMarker;
	this.closeBlockMarker = closeBlockMarker;
    }

    // ///////////////////////////////////////////////////////////
    // ACCESS METHODS
    // ///////////////////////////////////////////////////////////

    /**
     * Gets the close block marker.
     * 
     * @return the close block marker
     */
    public String getCloseBlockMarker() {
	return closeBlockMarker;
    }

    /**
     * Sets the close block marker.
     * 
     * @param closeBlockMarker the new close block marker
     */
    public void setCloseBlockMarker(String closeBlockMarker) {
	this.closeBlockMarker = closeBlockMarker;
    }

    /**
     * Gets the open block marker.
     * 
     * @return the open block marker
     */
    public String getOpenBlockMarker() {
	return openBlockMarker;
    }

    /**
     * Sets the open block marker.
     * 
     * @param openBlockMarker the new open block marker
     */
    public void setOpenBlockMarker(String openBlockMarker) {
	this.openBlockMarker = openBlockMarker;
    }

    /**
     * Gets the separator.
     * 
     * @return the separator
     */
    public String getSeparator() {
	return separator;
    }

    /**
     * Sets the separator.
     * 
     * @param separator the new separator
     */
    public void setSeparator(String separator) {
	this.separator = separator;
    }

    // ///////////////////////////////////////////////////////////
    // PUBLIC METHODS
    // ///////////////////////////////////////////////////////////

    /**
     * Encode.
     * 
     * @param biobjPar the biobj par
     * 
     * @return the string
     */
    public String encode(BIObjectParameter biobjPar) {
	logger.debug("IN");
	if (biobjPar.getParameterValues() == null) {
	    logger.error("biobjPar.getParameterValues() == null");
	    return null;
	}

	Parameter parameter = biobjPar.getParameter();
	if (parameter != null) {
	    String type = parameter.getType();
	    ModalitiesValue modValue = parameter.getModalityValue();
	    if (modValue != null) {
		boolean mult = biobjPar.getParameter().getModalityValue().isMultivalue();

		String typeCode = biobjPar.getParameter().getModalityValue().getITypeCd();
		logger.debug("typeCode="+typeCode);
		if (typeCode.equalsIgnoreCase(SpagoBIConstants.INPUT_TYPE_MAN_IN_CODE)) {
		    mult = false;
		}

		if (!mult) {
		    return (String) biobjPar.getParameterValues().get(0);
		} else {
		    return encodeMultivaluesParam(biobjPar.getParameterValues(), type);
		}
	    } else {
		List values = biobjPar.getParameterValues();
		if (values != null && values.size() > 0) {
		    if (values.size() == 1)
			return (String) biobjPar.getParameterValues().get(0);
		    else
			return encodeMultivaluesParam(biobjPar.getParameterValues(), type);
		} else
		    return "";
	    }
	} else {
	    Integer parId = biobjPar.getParID();
	    String type = null;
	    if (parId == null) {
		logger.warn("Parameter object nor parameter id are set into BiObjectPrameter with label = "
			+ biobjPar.getLabel() + " of document with id = " + biobjPar.getBiObjectID());
	    } else {
		try {
		    Parameter aParameter = DAOFactory.getParameterDAO().loadForDetailByParameterID(parId);
		    type = aParameter.getType();
		} catch (EMFUserError e) {
		    logger.warn("Error loading parameter with id = " + biobjPar.getParID());
		}
	    }
	    List values = biobjPar.getParameterValues();
	    if (values != null && values.size() > 0) {
		if (values.size() == 1)
		    return (String) biobjPar.getParameterValues().get(0);
		else
		    return encodeMultivaluesParam(biobjPar.getParameterValues(), type);
	    } else
		return "";
	}

    }

    // ///////////////////////////////////////////////////////////
    // UTILITY METHODS
    // ///////////////////////////////////////////////////////////

    /**
     * Multi values parameters are encoded in the following way:
     * openBlockMarker + separator + openBlockMarker + [values separated by the separator] + closeBlockMarker + parameterType + closeBlockMarker
     * Examples:
     * {,{string1,string2,string3}STRING}
     * {,{number1,number1,number1}NUM}
     * 
     * parameterType: the type of the parameter (NUM/STRING/DATE)
     */
    private String encodeMultivaluesParam(List values, String parameterType) {
	logger.debug("IN");
	String value = "";

	if (values == null || values.size() == 0)
	    return value;

	value += openBlockMarker;
	value += separator;
	value += openBlockMarker;
	for (int i = 0; i < values.size(); i++) {
	    String valueToBeAppended = (values.get(i) == null) ? "" : (String) values.get(i);
	    value += (i > 0) ? separator : "";
	    value += valueToBeAppended;
	}
	value += closeBlockMarker;
	value += parameterType;
	value += closeBlockMarker;
	logger.debug("IN.value=" + value);
	return value;
    }
}
