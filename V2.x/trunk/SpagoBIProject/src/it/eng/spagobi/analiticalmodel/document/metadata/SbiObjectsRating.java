package it.eng.spagobi.analiticalmodel.document.metadata;
// Generated 23-apr-2008 15.08.55 by Hibernate Tools 3.1.0 beta3



/**
 * SbiObjectsRating generated by hbm2java
 */

public class SbiObjectsRating  implements java.io.Serializable {


    // Fields    

     private SbiObjectsRatingId id;
     private SbiObjects sbiObjects;
     private Integer rating;


    // Constructors

    /** default constructor */
    public SbiObjectsRating() {
    }

    
    /** full constructor */
    public SbiObjectsRating(SbiObjectsRatingId id, SbiObjects sbiObjects, Integer rating) {
        this.id = id;
        this.sbiObjects = sbiObjects;
        this.rating = rating;
    }
    

   
    // Property accessors

    public SbiObjectsRatingId getId() {
        return this.id;
    }
    
    public void setId(SbiObjectsRatingId id) {
        this.id = id;
    }

    public SbiObjects getSbiObjects() {
        return this.sbiObjects;
    }
    
    public void setSbiObjects(SbiObjects sbiObjects) {
        this.sbiObjects = sbiObjects;
    }

    public Integer getRating() {
        return this.rating;
    }
    
    public void setRating(Integer rating) {
        this.rating = rating;
    }
   








}
