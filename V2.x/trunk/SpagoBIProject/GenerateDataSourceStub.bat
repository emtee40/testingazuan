java -cp ./WebContent/WEB-INF/classes/;./WebContent/WEB-INF/lib/axis.jar;./WebContent/WEB-INF/lib/axis-ant.jar;./WebContent/WEB-INF/lib/commons-discovery-0.2.jar;./WebContent/WEB-INF/lib/commons-logging-1.0.4.jar;./WebContent/WEB-INF/lib/jaxrpc.jar;./WebContent/WEB-INF/lib/log4j-1.2.8.jar;./WebContent/WEB-INF/lib/saaj.jar;./WebContent/WEB-INF/lib/wsdl4j-1.5.1.jar;./WebContent/WEB-INF/lib/xercesImpl-2.6.2.jar;./WebContent/WEB-INF/lib/xml-apis-2.0.2.jar;./WebContent/WEB-INF/lib/activation.jar;./WebContent/WEB-INF/lib/mail-1.4.jar org.apache.axis.wsdl.WSDL2Java -o . -d Session -s -S true  -Nurn:spagobidatasource it.eng.spagobi.services.datasource.stub datasource.wsdl
