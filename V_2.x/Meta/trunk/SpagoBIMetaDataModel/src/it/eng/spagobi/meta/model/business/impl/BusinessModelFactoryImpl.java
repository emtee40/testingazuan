/**
 * <copyright>
 * </copyright>
 *
 * $Id$
 */
package it.eng.spagobi.meta.model.business.impl;

import it.eng.spagobi.meta.model.business.*;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.EPackage;

import org.eclipse.emf.ecore.impl.EFactoryImpl;

import org.eclipse.emf.ecore.plugin.EcorePlugin;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model <b>Factory</b>.
 * <!-- end-user-doc -->
 * @generated
 */
public class BusinessModelFactoryImpl extends EFactoryImpl implements BusinessModelFactory {
	/**
	 * Creates the default factory implementation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static BusinessModelFactory init() {
		try {
			BusinessModelFactory theBusinessModelFactory = (BusinessModelFactory)EPackage.Registry.INSTANCE.getEFactory("http:///it/eng/spagobi/meta/model/businessl.ecore"); 
			if (theBusinessModelFactory != null) {
				return theBusinessModelFactory;
			}
		}
		catch (Exception exception) {
			EcorePlugin.INSTANCE.log(exception);
		}
		return new BusinessModelFactoryImpl();
	}

	/**
	 * Creates an instance of the factory.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public BusinessModelFactoryImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EObject create(EClass eClass) {
		switch (eClass.getClassifierID()) {
			case BusinessModelPackage.BUSINESS_MODEL: return createBusinessModel();
			case BusinessModelPackage.BUSINESS_TABLE: return createBusinessTable();
			case BusinessModelPackage.BUSINESS_COLUMN: return createBusinessColumn();
			case BusinessModelPackage.BUSINESS_RELATIONSHIP: return createBusinessRelationship();
			case BusinessModelPackage.BUSINESS_VIEW: return createBusinessView();
			case BusinessModelPackage.BUSINESS_DOMAIN: return createBusinessDomain();
			default:
				throw new IllegalArgumentException("The class '" + eClass.getName() + "' is not a valid classifier");
		}
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public BusinessModel createBusinessModel() {
		BusinessModelImpl businessModel = new BusinessModelImpl();
		return businessModel;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public BusinessTable createBusinessTable() {
		BusinessTableImpl businessTable = new BusinessTableImpl();
		return businessTable;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public BusinessColumn createBusinessColumn() {
		BusinessColumnImpl businessColumn = new BusinessColumnImpl();
		return businessColumn;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public BusinessRelationship createBusinessRelationship() {
		BusinessRelationshipImpl businessRelationship = new BusinessRelationshipImpl();
		return businessRelationship;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public BusinessView createBusinessView() {
		BusinessViewImpl businessView = new BusinessViewImpl();
		return businessView;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public BusinessDomain createBusinessDomain() {
		BusinessDomainImpl businessDomain = new BusinessDomainImpl();
		return businessDomain;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public BusinessModelPackage getBusinessModelPackage() {
		return (BusinessModelPackage)getEPackage();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @deprecated
	 * @generated
	 */
	@Deprecated
	public static BusinessModelPackage getPackage() {
		return BusinessModelPackage.eINSTANCE;
	}

} //BusinessModelFactoryImpl
