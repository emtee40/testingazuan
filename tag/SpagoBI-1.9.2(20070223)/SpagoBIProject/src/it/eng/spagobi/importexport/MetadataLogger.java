package it.eng.spagobi.importexport;

import java.util.Calendar;
import java.util.GregorianCalendar;

/**
 * Buffer for the import log messages
 */
public class MetadataLogger {

	private StringBuffer logBuf =  null;
	
	/**
	 * Constructor, initialize the buffer with date and time
	 */
	public MetadataLogger() {
		logBuf = new StringBuffer();
		Calendar today = new GregorianCalendar();
		int day = today.get(Calendar.DAY_OF_MONTH);
		int month = today.get(Calendar.MONTH);
		int year = today.get(Calendar.YEAR);
		int hour = today.get(Calendar.HOUR_OF_DAY);
		int sec = today.get(Calendar.SECOND);
		logBuf.append("Import of the day "+day+"/"+month+"/"+year+" started at "+hour+":"+sec+" \n\n");
	}
	
	/**
	 * Logs a message into the buffer
	 * @param msg The message to log
	 */
	public void log(String msg) {
		logBuf.append(msg + "\n");
	}
	
	
	/**
	 * Gets the array of bytes of all the logs
	 * @return The logs bytes
	 */
	public byte[] getLogBytes(){
		String bufStr = logBuf.toString();
		return bufStr.getBytes();
	}
	
}
