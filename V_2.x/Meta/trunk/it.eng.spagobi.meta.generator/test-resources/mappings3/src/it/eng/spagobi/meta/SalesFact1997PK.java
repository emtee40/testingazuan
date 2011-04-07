package it.eng.spagobi.meta;

import java.io.Serializable;
import javax.persistence.*;

/**
 * This is the primary key class for the sales_fact_1997 table.
 * 
 */
@Embeddable
public class SalesFact1997PK implements Serializable {

	private static final long serialVersionUID = 1L;
		@Column(name="product_id")
		private java.lang.String productId;
		@Column(name="time_id")
		private java.lang.String timeId;
		@Column(name="customer_id")
		private java.lang.String customerId;
		@Column(name="promotion_id")
		private java.lang.String promotionId;
		@Column(name="store_id")
		private java.lang.String storeId;
		@Column(name="store_sales")
		private java.lang.String storeSales;
		@Column(name="store_cost")
		private java.lang.String storeCost;
		@Column(name="unit_sales")
		private java.lang.String unitSales;

    public SalesFact1997PK() {
    }

public String getProductId () {
	return this.productId;
}
public void setProductId (String productId) {
	this.productId = productId;
}


public String getTimeId () {
	return this.timeId;
}
public void setTimeId (String timeId) {
	this.timeId = timeId;
}


public String getCustomerId () {
	return this.customerId;
}
public void setCustomerId (String customerId) {
	this.customerId = customerId;
}


public String getPromotionId () {
	return this.promotionId;
}
public void setPromotionId (String promotionId) {
	this.promotionId = promotionId;
}


public String getStoreId () {
	return this.storeId;
}
public void setStoreId (String storeId) {
	this.storeId = storeId;
}


public String getStoreSales () {
	return this.storeSales;
}
public void setStoreSales (String storeSales) {
	this.storeSales = storeSales;
}


public String getStoreCost () {
	return this.storeCost;
}
public void setStoreCost (String storeCost) {
	this.storeCost = storeCost;
}


public String getUnitSales () {
	return this.unitSales;
}
public void setUnitSales (String unitSales) {
	this.unitSales = unitSales;
}


	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof SalesFact1997PK)) {
			return false;
		}
		SalesFact1997PK castOther = (SalesFact1997PK)other;
		return 
			( this.productId.equals(castOther.productId) ) 
 && ( this.timeId.equals(castOther.timeId) ) 
 && ( this.customerId.equals(castOther.customerId) ) 
 && ( this.promotionId.equals(castOther.promotionId) ) 
 && ( this.storeId.equals(castOther.storeId) ) 
 && ( this.storeSales.equals(castOther.storeSales) ) 
 && ( this.storeCost.equals(castOther.storeCost) ) 
 && ( this.unitSales.equals(castOther.unitSales) );

    }
    
	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		 hash = hash * prime + this.productId.hashCode() ;
 hash = hash * prime + this.timeId.hashCode() ;
 hash = hash * prime + this.customerId.hashCode() ;
 hash = hash * prime + this.promotionId.hashCode() ;
 hash = hash * prime + this.storeId.hashCode() ;
 hash = hash * prime + this.storeSales.hashCode() ;
 hash = hash * prime + this.storeCost.hashCode() ;
 hash = hash * prime + this.unitSales.hashCode() ;

		return hash;
    }
}