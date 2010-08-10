package it.eng.spagobi.chiron.serializer;

import it.eng.spagobi.kpi.config.bo.Kpi;
import it.eng.spagobi.kpi.model.bo.Resource;

import java.util.Locale;

import org.json.JSONObject;

public class KpiJSONSerializer implements Serializer {

	public static final String KPI_ID = "id";
	private static final String KPI_NAME = "name";
	private static final String KPI_CODE = "code";
	private static final String KPI_DESCRIPTION = "description";
	private static final String KPI_WEIGHT = "weight";
	private static final String KPI_DATASET = "dataset";
	private static final String KPI_THR = "threshold";
	private static final String KPI_DOCS = "documents";
	private static final String KPI_INTERPRETATION = "interpretation";
	private static final String KPI_ALGDESC = "algdesc";
	private static final String KPI_INPUT_ATTR = "inputAttr";
	private static final String KPI_MODEL_REFERENCE = "modelReference";
	private static final String KPI_TARGET_AUDIENCE = "targetAudience";
	
	private static final String KPI_TYPE_ID = "kpiTypeId";
	private static final String KPI_TYPE_CD = "kpiTypeCd";
	private static final String METRIC_SCALE_TYPE_ID = "metricScaleId";
	private static final String METRIC_SCALE_TYPE_CD = "metricScaleCd";
	private static final String MEASURE_TYPE_ID = "measureTypeId";
	private static final String MEASURE_TYPE_CD = "measureTypeCd";
	
	public Object serialize(Object o, Locale locale) throws SerializationException {
		JSONObject  result = null;
		
		if( !(o instanceof Kpi) ) {
			throw new SerializationException("KpiJSONSerializer is unable to serialize object of type: " + o.getClass().getName());
		}
		
		try {
			Kpi kpi = (Kpi)o;
			result = new JSONObject();
			
			result.put(KPI_ID, kpi.getKpiId() );
			result.put(KPI_NAME, kpi.getKpiName());
			result.put(KPI_DESCRIPTION, kpi.getDescription() );
			result.put(KPI_CODE, kpi.getCode() );
			result.put(KPI_WEIGHT, kpi.getStandardWeight() );
			result.put(KPI_DATASET, kpi.getKpiDsId() );
			result.put(KPI_THR, kpi.getThreshold().getCode() );
			result.put(KPI_DOCS, kpi.getDocumentLabel() );
			result.put(KPI_INTERPRETATION, kpi.getInterpretation() );
			result.put(KPI_ALGDESC, kpi.getMetric() );
			result.put(KPI_INPUT_ATTR, kpi.getInputAttribute() );
			result.put(KPI_MODEL_REFERENCE, kpi.getModelReference() );
			result.put(KPI_TARGET_AUDIENCE, kpi.getTargetAudience() );
			
			result.put(KPI_TYPE_ID, kpi.getKpiTypeId() );
			result.put(KPI_TYPE_CD, kpi.getKpiTypeCd());		
			result.put(METRIC_SCALE_TYPE_ID, kpi.getMetricScaleId() );
			result.put(METRIC_SCALE_TYPE_CD, kpi.getMetricScaleCd());	
			result.put(MEASURE_TYPE_ID, kpi.getMeasureTypeId() );
			result.put(MEASURE_TYPE_CD, kpi.getMeasureTypeCd());	
			
		} catch (Throwable t) {
			throw new SerializationException("An error occurred while serializing object: " + o, t);
		} finally {
			
		}
		return result;
	}
}
