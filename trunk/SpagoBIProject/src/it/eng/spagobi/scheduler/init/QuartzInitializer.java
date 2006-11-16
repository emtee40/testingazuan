package it.eng.spagobi.scheduler.init;

import it.eng.spago.base.SourceBean;
import it.eng.spago.init.InitializerIFace;
import it.eng.spagobi.constants.SpagoBIConstants;
import it.eng.spagobi.utilities.SpagoBITracer;

import java.io.InputStream;
import java.util.Properties;

import org.quartz.Scheduler;
import org.quartz.impl.StdSchedulerFactory;


public class QuartzInitializer implements InitializerIFace {
	
	private SourceBean _config = null;

	
	public void init(SourceBean config) {
		StdSchedulerFactory stdSchedFact = new StdSchedulerFactory();
	    Properties properties = new Properties();
	    try{
	    	Thread currThread = Thread.currentThread();
	    	ClassLoader classLoader = currThread.getContextClassLoader();
	    	InputStream propIs = classLoader.getResourceAsStream("quartz.properties");
	        properties.load(propIs);
	        stdSchedFact.initialize(properties);
	        Scheduler sched = stdSchedFact.getScheduler();
	    } catch (Exception e) {
	    	SpagoBITracer.major(SpagoBIConstants.NAME_MODULE, this.getClass().getName(), 
	    			            "init", "Error while initializing scheduler " + e);
	    }
	}
	
	public SourceBean getConfig() {
		return _config;
	}

	
}
