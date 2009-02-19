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
package it.eng.spagobi.kpi.config.service;

import it.eng.spago.base.SourceBean;
import it.eng.spago.base.SourceBeanException;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.kpi.config.bo.Kpi;
import it.eng.spagobi.kpi.utils.AbstractConfigurableListModule;

import java.util.List;

import org.apache.log4j.Logger;

/**
 * Loads the engines list
 * 
 * @author sulis
 */

public class ListKpiModule extends AbstractConfigurableListModule {

	private static transient Logger logger = Logger
			.getLogger(ListKpiModule.class);

	@Override
	protected List getObjectList(SourceBean request) {
		String fieldOrder = (String) request.getAttribute("FIELD_ORDER");
		String typeOrder = (String) request.getAttribute("TYPE_ORDER");
		List result = null;
		try {
			// result = DAOFactory.getKpiDAO().loadKpiList();
			result = DAOFactory.getKpiDAO().loadKpiList(fieldOrder, typeOrder);
		} catch (EMFUserError e) {
			logger.error(e);
		}
		return result;
	}

	@Override
	protected void setRowAttribute(SourceBean rowSB, Object obj)
			throws SourceBeanException {
		Kpi aKpi = (Kpi) obj;
		String code = "";
		String name = "";
		String threshold = "";

		if (aKpi.getCode() != null)
			code = aKpi.getCode();
		if (aKpi.getKpiName() != null)
			name = aKpi.getKpiName();
		rowSB.setAttribute("CODE", code);
		rowSB.setAttribute("NAME", name);
		if (aKpi.getThreshold() != null && aKpi.getThreshold().getId() != null) {

			try {
				if(DAOFactory.getThresholdDAO().loadThresholdById(
						aKpi.getThreshold().getId()).getThresholdName() != null){
				threshold = DAOFactory.getThresholdDAO().loadThresholdById(
						aKpi.getThreshold().getId()).getThresholdName();
				}
			} catch (EMFUserError e) {
		
			}
		}
		rowSB.setAttribute("THRESHOLD", threshold);
		rowSB.setAttribute("ID", aKpi.getKpiId());
	}

	@Override
	public boolean delete(SourceBean request, SourceBean response) {
		boolean toReturn = false;
		// String kpiId = (String) request.getAttribute("ID");
		// try {
		// toReturn = DAOFactory.getKpiDAO().deleteKpi(Integer.parseInt(kpiId));
		// toReturn = true;
		// } catch (NumberFormatException e) {
		// EMFErrorHandler engErrorHandler = getErrorHandler();
		// engErrorHandler.addError(new EMFUserError(EMFErrorSeverity.WARNING,
		// "10012", "component_kpi_messages"));
		// } catch (EMFUserError e) {
		// EMFErrorHandler engErrorHandler = getErrorHandler();
		// engErrorHandler.addError(e);
		// }

		return toReturn;
	}

}
