package it.eng.spagobi.meta;

import java.io.Serializable;
import javax.persistence.*;

/**
 * This is the primary key class for the employee table.
 * 
 */
@Embeddable
public class EmployeeClosureEmployeePK implements Serializable {

	private static final long serialVersionUID = 1L;
		@Column(name="employee_id")
		private String employeeId;
		@Column(name="full_name")
		private String fullName;
		@Column(name="first_name")
		private String firstName;
		@Column(name="last_name")
		private String lastName;
		@Column(name="position_id")
		private String positionId;
		@Column(name="position_title")
		private String positionTitle;
		@Column(name="salary")
		private String salary;
		@Column(name="education_level")
		private String educationLevel;
		@Column(name="marital_status")
		private String maritalStatus;
		@Column(name="gender")
		private String gender;
		@Column(name="management_role")
		private String managementRole;

    public EmployeeClosureEmployeePK() {
    }

public String getEmployeeId () {
	return this.employeeId;
}
public void setEmployeeId (String employeeId) {
	this.employeeId = employeeId;
}


public String getFullName () {
	return this.fullName;
}
public void setFullName (String fullName) {
	this.fullName = fullName;
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


public String getPositionId () {
	return this.positionId;
}
public void setPositionId (String positionId) {
	this.positionId = positionId;
}


public String getPositionTitle () {
	return this.positionTitle;
}
public void setPositionTitle (String positionTitle) {
	this.positionTitle = positionTitle;
}


public String getSalary () {
	return this.salary;
}
public void setSalary (String salary) {
	this.salary = salary;
}


public String getEducationLevel () {
	return this.educationLevel;
}
public void setEducationLevel (String educationLevel) {
	this.educationLevel = educationLevel;
}


public String getMaritalStatus () {
	return this.maritalStatus;
}
public void setMaritalStatus (String maritalStatus) {
	this.maritalStatus = maritalStatus;
}


public String getGender () {
	return this.gender;
}
public void setGender (String gender) {
	this.gender = gender;
}


public String getManagementRole () {
	return this.managementRole;
}
public void setManagementRole (String managementRole) {
	this.managementRole = managementRole;
}


	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof EmployeeClosureEmployeePK)) {
			return false;
		}
		EmployeeClosureEmployeePK castOther = (EmployeeClosureEmployeePK)other;
		return 
			( this.employeeId.equals(castOther.employeeId) ) 
 && ( this.fullName.equals(castOther.fullName) ) 
 && ( this.firstName.equals(castOther.firstName) ) 
 && ( this.lastName.equals(castOther.lastName) ) 
 && ( this.positionId.equals(castOther.positionId) ) 
 && ( this.positionTitle.equals(castOther.positionTitle) ) 
 && ( this.salary.equals(castOther.salary) ) 
 && ( this.educationLevel.equals(castOther.educationLevel) ) 
 && ( this.maritalStatus.equals(castOther.maritalStatus) ) 
 && ( this.gender.equals(castOther.gender) ) 
 && ( this.managementRole.equals(castOther.managementRole) );

    }
    
	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		 hash = hash * prime + this.employeeId.hashCode() ;
 hash = hash * prime + this.fullName.hashCode() ;
 hash = hash * prime + this.firstName.hashCode() ;
 hash = hash * prime + this.lastName.hashCode() ;
 hash = hash * prime + this.positionId.hashCode() ;
 hash = hash * prime + this.positionTitle.hashCode() ;
 hash = hash * prime + this.salary.hashCode() ;
 hash = hash * prime + this.educationLevel.hashCode() ;
 hash = hash * prime + this.maritalStatus.hashCode() ;
 hash = hash * prime + this.gender.hashCode() ;
 hash = hash * prime + this.managementRole.hashCode() ;

		return hash;
    }
}