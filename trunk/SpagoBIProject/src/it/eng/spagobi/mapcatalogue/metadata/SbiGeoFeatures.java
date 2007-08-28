package it.eng.spagobi.mapcatalogue.metadata;


// Generated 31-mag-2007 14.53.27 by Hibernate Tools 3.2.0.beta8

import java.util.HashSet;
import java.util.Set;

/**
 * SbiGeoFeatures generated by hbm2java
 */
public class SbiGeoFeatures implements java.io.Serializable {

	// Fields    

	private int featureId;

	private String name;

	private String descr;

	private String type;

	//private Set sbiGeoMapFeatureses = new HashSet(0);

	// Constructors

	/** default constructor */
	public SbiGeoFeatures() {
	}

	/** minimal constructor */
	public SbiGeoFeatures(int featureId) {
		this.featureId = featureId;
	}

	/** full constructor */
	public SbiGeoFeatures(int featureId, String name, String descr,
			String type, Set sbiGeoMapFeatureses) {
		this.featureId = featureId;
		this.name = name;
		this.descr = descr;
		this.type = type;
	//	this.sbiGeoMapFeatureses = sbiGeoMapFeatureses;
	}

	// Property accessors
	public int getFeatureId() {
		return this.featureId;
	}

	public void setFeatureId(int featureId) {
		this.featureId = featureId;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescr() {
		return this.descr;
	}

	public void setDescr(String descr) {
		this.descr = descr;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}
/*
	public Set getSbiGeoMapFeatureses() {
		return this.sbiGeoMapFeatureses;
	}

	public void setSbiGeoMapFeatureses(Set sbiGeoMapFeatureses) {
		this.sbiGeoMapFeatureses = sbiGeoMapFeatureses;
	}
*/
}
