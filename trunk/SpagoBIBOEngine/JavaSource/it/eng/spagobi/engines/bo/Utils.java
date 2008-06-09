/**
Copyright (c) 2005, Engineering Ingegneria Informatica s.p.a.
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright notice, this list of 
      conditions and the following disclaimer.
      
    * Redistributions in binary form must reproduce the above copyright notice, this list of 
      conditions and the following disclaimer in the documentation and/or other materials 
      provided with the distribution.
      
    * Neither the name of the Engineering Ingegneria Informatica s.p.a. nor the names of its contributors may
      be used to endorse or promote products derived from this software without specific
      prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND 
CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, 
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF 
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) 
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, 
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE
*/
package it.eng.spagobi.engines.bo;

import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

import com.bo.rebean.wi.DocumentInstance;
import com.bo.rebean.wi.DrillBar;
import com.bo.rebean.wi.DrillBarObject;
import com.bo.rebean.wi.DrillDimension;
import com.bo.rebean.wi.DrillDimensions;
import com.bo.rebean.wi.DrillHierarchies;
import com.bo.rebean.wi.DrillHierarchy;
import com.bo.rebean.wi.DrillInfo;
import com.bo.rebean.wi.HTMLView;
import com.bo.rebean.wi.OutputFormatType;
import com.bo.rebean.wi.Prompt;
import com.bo.rebean.wi.Prompts;
import com.bo.rebean.wi.Report;
import com.bo.rebean.wi.ReportEngine;
import com.bo.wibean.WIDocument;
import com.bo.wibean.WIOutput;
import com.bo.wibean.WIPrompt;
import com.bo.wibean.WIPrompts;
import com.bo.wibean.WISession;

public class Utils {

	private static Logger logger = Logger.getLogger(Utils.class);
	
	public static boolean controlRepository(String repName) {
		repName = repName.trim();
		if(!repName.equalsIgnoreCase("corporate") &&
		   !repName.equalsIgnoreCase("inbox") && 
		   !repName.equalsIgnoreCase("personal")) {
			return false;
		} else return true;
	}
	
	public static int getRepCodeFromName(String repName) {
		int code = 0;
		if(repName.equalsIgnoreCase("corporate"))
			code = 0;
		if(repName.equalsIgnoreCase("ibox"))
			code = 1;
		if(repName.equalsIgnoreCase("personal"))
			code = 2;
	    return code; 
	}
	
	public static ReportEngine createReportEngine(WISession wiSession) {
		ReportEngine cdzReportEngine = new ReportEngine();
		cdzReportEngine.init(wiSession.getSessionID(), wiSession.getLocale());
		return  cdzReportEngine;
	}
	
	
	public static void fillPrompts(DocumentInstance repInstance, HttpServletRequest request) {
			Prompts prompts = repInstance.getPrompts();
			int numPrompts = prompts.getCount();
			for(int i=0; i<numPrompts; i++) {
				 Prompt prompt = prompts.getItem(i);
				 String namePrompt = prompt.getName();
				 String valuePrompt = request.getParameter(namePrompt);
				 logger.info("Engines"+ Utils.class.getName()+ 
		         			 "fillPrompts() output type not supported");
				 if (valuePrompt != null) {
				 	String[] valsPrompt = valuePrompt.split(",");
				 	prompt.enterValues(valsPrompt);
				 }
			}
			repInstance.setPrompts();
	    }
	
	/**
	 * Fills the report prompts.
	 * @param repDocument The WIDocument object for a .rep type document; getHTMLView(true) must be invoked on this object before calling this method).
	 * @param request The HttpServletRequest request
	 */
	public static void fillPrompts(WIDocument repDocument, HttpServletRequest request) {
		logger.debug("IN");
		try {
			WIPrompts prompts = repDocument.getPrompts();
			logger.debug("Report prompts retrieved.");
			int numPrompts = prompts.getCount();
			for (int i = 0; i < numPrompts; i++) {
				 WIPrompt prompt = prompts.getItem(i + 1);
				 String namePrompt = prompt.getName();
				 String valuePrompt = request.getParameter(namePrompt);
				 logger.debug("Find report prompt with name = [" + namePrompt + "]; relevant httpRequest parameter value is [" + valuePrompt + "].");
				 if (valuePrompt != null) {
				 	String[] valsPrompt = valuePrompt.split(",");
					String strValueList = "";
					if (valsPrompt.length > 1) {
						for (int j = 0; j < valsPrompt.length; j++) {
							strValueList += valsPrompt[j];
							if (j < valsPrompt.length - 1) strValueList += ";";
						}
					} else
						strValueList = valsPrompt[0];
					logger.debug("Entering new value = [" + strValueList + "] into prompt with name = [" + namePrompt + "].");
					prompt.enterValue(strValueList);
				 } else {
					 String previous = prompt.getPreviousValue();
					 logger.debug("Entering previous value = [" + previous + "] into prompt with name = [" + namePrompt + "].");
					 prompt.enterValue(previous);
				 }
			}
		} catch (Exception e) {
			logger.error("Error while filling report prompts", e);
		} finally {
			logger.debug("OUT");
		}
    }
	
	public static void addHtmlInSession(Report report, HttpSession session) {
		HTMLView reportHtmlView = (HTMLView) report.getView(OutputFormatType.HTML);
		String headPart = reportHtmlView.getStringPart("head", false);
		String bodyPart = reportHtmlView.getStringPart("body", false);
		session.setAttribute(BOConstants.REPORTHEADPART, headPart);
		session.setAttribute(BOConstants.REPORTBODYPART, bodyPart);
	}
	

	public static void addHtmlInSession(WIOutput wiOutput,
			HttpSession session) {
		String headPart = wiOutput.getStringPart("head", false);
		String bodyPart = wiOutput.getStringPart("body", false);
		session.setAttribute(BOConstants.REPORTHEADPART, headPart);
		session.setAttribute(BOConstants.REPORTBODYPART, bodyPart);
	}
	
	public static HashMap getDrillDimensions(DrillInfo drillInfo) throws Exception {
		HashMap hash = null;
		for (int count = 0; true; count++) {
			try {
				hash = getDrillDimensionsPrivate(drillInfo);
			} catch (Exception e) {
				logger.error(Utils.class + ":getDrillDimensions: caught excetpion " + e);
				if (count < 10) continue;
				else throw e;
			}
			if (hash != null) break;
		}
		return hash;
	}
	
	private static HashMap getDrillDimensionsPrivate(DrillInfo drillInfo) throws Exception {
		HashMap hash = new HashMap();
		DrillHierarchies drillHierarchies = drillInfo.getDrillHierarchies();
		DrillBar drillBar = drillInfo.getDrillBar();
		//insert each hierarchy into the hash Map 
		//if a hierarchy dimension is in the drillbar, it is not loaded into the list
		for (int i=0; i<drillHierarchies.getCount(); i++){
			DrillHierarchy drillHierarchy = drillHierarchies.getItem(i);
			ArrayList hierDimList = new ArrayList();
			DrillDimensions hierDrillDim = drillHierarchy.getDrillDimensions();
			String hierName = drillHierarchy.getName();
			for (int j=0; j<hierDrillDim.getCount();j++){
				if(!isInDrillBar(hierDrillDim.getItem(j), drillBar)){
					hierDimList.add(hierDrillDim.getItem(j));
					}
			}
			hash.put(hierName,hierDimList);
			}
		//then insert all free dimensions inside the HashMap, in the same way
	    DrillDimensions freeDrillDim = drillInfo.getFreeDrillDimensions();
	    ArrayList freeDimList = new ArrayList();
	    for(int k=0; k<freeDrillDim.getCount();k++){
	    	if(!isInDrillBar(freeDrillDim.getItem(k), drillBar)){
	    		freeDimList.add(freeDrillDim.getItem(k));
	    		}
	    }
	    hash.put("Other",freeDimList);
		return hash;
	}
     private static boolean isInDrillBar (DrillDimension dimension, DrillBar drillBar) {
    	 boolean isInDrillBar = false;
    	 for (int i=0; i<drillBar.getCount(); i++){
    		 DrillBarObject object = drillBar.getItem(i);
    		 if(object.getID().equalsIgnoreCase(dimension.getID())){
    			 isInDrillBar = true;
    		 }
    	 }
     return isInDrillBar;
     }

}
