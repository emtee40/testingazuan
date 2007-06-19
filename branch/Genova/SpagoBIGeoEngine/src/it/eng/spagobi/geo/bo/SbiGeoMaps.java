package it.eng.spagobi.geo.bo;


// Generated 31-mag-2007 14.53.27 by Hibernate Tools 3.2.0.beta8

import java.util.HashSet;
import java.util.Set;

/**
 * SbiGeoMaps generated by hbm2java
 */
public class SbiGeoMaps implements java.io.Serializable {

	// Fields    

	private int mapId;

	private String name;

	private String descr;

	private String url;

	private Set sbiGeoMapFeatureses = new HashSet(0);

	// Constructors

	/** default constructor */
	public SbiGeoMaps() {
	}

	/** minimal constructor */
	public SbiGeoMaps(int mapId) {
		this.mapId = mapId;
	}

	/** full constructor */
	public SbiGeoMaps(int mapId, String name, String descr, String url,
			Set sbiGeoMapFeatureses) {
		this.mapId = mapId;
		this.name = name;
		this.descr = descr;
		this.url = url;
		this.sbiGeoMapFeatureses = sbiGeoMapFeatureses;
	}

	// Property accessors
	public int getMapId() {
		return this.mapId;
	}

	public void setMapId(int mapId) {
		this.mapId = mapId;
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

	public String getUrl() {
		return this.url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Set getSbiGeoMapFeatureses() {
		return this.sbiGeoMapFeatureses;
	}

	public void setSbiGeoMapFeatureses(Set sbiGeoMapFeatureses) {
		this.sbiGeoMapFeatureses = sbiGeoMapFeatureses;
	}

}
