/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2009 Engineering Ingegneria Informatica S.p.A.

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
package it.eng.spagobi.chiron.serializer;

import it.eng.spagobi.commons.metadata.SbiDomains;
import it.eng.spagobi.kpi.alarm.metadata.SbiAlarm;

import java.util.Locale;

import org.json.JSONObject;

public class AlarmJSONSerializer implements Serializer{
	
	public static final String ID = "id";
	public static final String NAME = "name";
	public static final String DESCRIPTION = "description";
	public static final String LABEL = "label";
	public static final String MODALITY = "modality";
	public static final String SINGLE_EVENT = "singleEvent";
	public static final String AUTO_DISABLED = "autoDisabled";
	
	public Object serialize(Object o, Locale locale)
			throws SerializationException {
		JSONObject  result = null;
		
		if( !(o instanceof SbiAlarm) ) {
			throw new SerializationException("AlarmJSONSerializer is unable to serialize object of type: " + o.getClass().getName());
		}
		
		try {
			SbiAlarm sbiAlarm = (SbiAlarm)o;
			result = new JSONObject();
			result.put(ID, sbiAlarm.getId());
			result.put(NAME, sbiAlarm.getName());
			result.put(LABEL, sbiAlarm.getLabel());			
			result.put(SINGLE_EVENT, sbiAlarm.getSingleEvent());
			result.put(AUTO_DISABLED, sbiAlarm.getAutoDisabled());
			result.put(DESCRIPTION, sbiAlarm.getDescr());	
			SbiDomains modalityDomain = sbiAlarm.getModality();
			if(modalityDomain != null)
				result.put(MODALITY, modalityDomain.getValueCd());
			else
				result.put(MODALITY, "");
		} catch (Throwable t) {
			throw new SerializationException("An error occurred while serializing object: " + o, t);
		} finally {
			
		}
		
		return result;
	}

}
