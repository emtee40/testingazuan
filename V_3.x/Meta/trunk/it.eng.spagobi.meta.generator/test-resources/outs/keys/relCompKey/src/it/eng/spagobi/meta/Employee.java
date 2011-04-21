package it.eng.spagobi.meta;

import java.io.Serializable;
import javax.persistence.*;


/**
 * This class refers to the employee table.
 * 
 */
@Entity
@Table(name="employee")
public class Employee implements Serializable {

private static final long serialVersionUID = 1L;

public Employee() {
}
	
@EmbeddedId
private EmployeePK compId=null;
	@Column(name="first_name")
private String firstName=null;
	@Column(name="last_name")
private String lastName=null;
	@Column(name="gender")
private String gender=null;

public EmployeePK getCompId () {
	return this.compId;
}

public void setCompId (EmployeePK compId) {
	this.compId = compId;
}

public String getFirstName () {
	return this.firstName;
}
public void setFirstName (String firstName) {
	this.firstName = firstName;
}
public String getLastName () {
	return this.lastName;
}
public void setLastName (String lastName) {
	this.lastName = lastName;
}
public String getGender () {
	return this.gender;
}
public void setGender (String gender) {
	this.gender = gender;
}

	@ManyToOne(cascade={CascadeType.ALL}, fetch=FetchType.LAZY)
@JoinColumn( name="position_id", insertable = false, updatable = false)
	private Position positionId;


public Position getPositionId () {
	return this.positionId;
}

public void setPositionId (Position positionId) {
	this.positionId = positionId;
} 
}