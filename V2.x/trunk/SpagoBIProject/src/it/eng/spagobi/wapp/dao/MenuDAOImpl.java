/**

SpagoBI - The Business Intelligence Free Platform

Copyright (C) 2005-2008 Engineering Ingegneria Informatica S.p.A.

This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 2.1 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

 **/
package it.eng.spagobi.wapp.dao;

import it.eng.spago.error.EMFErrorSeverity;
import it.eng.spago.error.EMFUserError;
import it.eng.spagobi.analiticalmodel.document.metadata.SbiObjects;
import it.eng.spagobi.analiticalmodel.functionalitytree.bo.LowFunctionality;
import it.eng.spagobi.analiticalmodel.functionalitytree.metadata.SbiFuncRole;
import it.eng.spagobi.analiticalmodel.functionalitytree.metadata.SbiFuncRoleId;
import it.eng.spagobi.analiticalmodel.functionalitytree.metadata.SbiFunctions;
import it.eng.spagobi.commons.bo.Role;
import it.eng.spagobi.commons.dao.AbstractHibernateDAO;
import it.eng.spagobi.commons.dao.DAOFactory;
import it.eng.spagobi.commons.dao.RoleDAOHibImpl;
import it.eng.spagobi.commons.metadata.SbiBinContents;
import it.eng.spagobi.commons.metadata.SbiDomains;
import it.eng.spagobi.commons.metadata.SbiExtRoles;
import it.eng.spagobi.wapp.bo.Menu;
import it.eng.spagobi.wapp.metadata.SbiMenu;
import it.eng.spagobi.wapp.metadata.SbiMenuRole;
import it.eng.spagobi.wapp.metadata.SbiMenuRoleId;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Expression;

/**
 * @author Antonella Giachino (antonella.giachino@eng.it)
 *
 */
public class MenuDAOImpl extends AbstractHibernateDAO implements IMenuDAO{

	/**
	 * Load menu by id.
	 * 
	 * @param menuID the menu id
	 * 
	 * @return the menu
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.wapp.dao.IMenuDAO#loadMenuByID(integer)
	 */
	public Menu loadMenuByID(Integer menuID) throws EMFUserError {
		Menu toReturn = null;
		Session tmpSession = null;
		Transaction tx = null;

		try {
			tmpSession = getSession();
			tx = tmpSession.beginTransaction();	

			Criterion domainCdCriterrion = Expression.eq("menuId", menuID);
			Criteria criteria = tmpSession.createCriteria(SbiMenu.class);
			criteria.add(domainCdCriterrion);
			SbiMenu hibMenu = (SbiMenu) criteria.uniqueResult();
			if (hibMenu == null) 
				return null;

			//SbiMenu hibMenu = (SbiMenu)tmpSession.load(SbiMenu.class,  menuID);
			toReturn = toMenu(hibMenu);

		} catch (HibernateException he) {
			logException(he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {			
			if (tmpSession!=null){
				if (tmpSession.isOpen()) tmpSession.close();

			}
		}		
		return toReturn;
	}	


	/**
	 * Load menu by name.
	 * 
	 * @param name the name
	 * 
	 * @return the menu
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.wapp.dao.IMenuDAO#loadMenuByName(string)
	 */	
	public Menu loadMenuByName(String name) throws EMFUserError {
		Menu biMenu = null;
		Session tmpSession = null;
		Transaction tx = null;
		try {
			tmpSession = getSession();
			tx = tmpSession.beginTransaction();
			Criterion labelCriterrion = Expression.eq("name",
					name);
			Criteria criteria = tmpSession.createCriteria(SbiMenu.class);
			criteria.add(labelCriterrion);	
			SbiMenu hibMenu = (SbiMenu) criteria.uniqueResult();
			if (hibMenu == null) return null;
			biMenu = toMenu(hibMenu);				

			//tx.commit();
		} catch (HibernateException he) {
			logException(he);
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		} finally {
			if (tmpSession!=null){
				if (tmpSession.isOpen()) tmpSession.close();
			}
		}
		return biMenu;		
	}

	/**
	 * Modify menu.
	 * 
	 * @param aMenu the a menu
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.wapp.dao.IMenuDAO#modifyMenu(it.eng.spagobi.wapp.bo.Menu)
	 */
	public void modifyMenu(Menu aMenu) throws EMFUserError {

		Session tmpSession = null;
		Transaction tx = null;
		try {
			tmpSession = getSession();
			tx = tmpSession.beginTransaction();

			SbiMenu hibMenu = (SbiMenu) tmpSession.load(SbiMenu.class, aMenu.getMenuId());
			hibMenu.setName(aMenu.getName());
			hibMenu.setDescr(aMenu.getDescr());
			hibMenu.setParentId(aMenu.getParentId());	

			SbiObjects objId = null;
			if(aMenu.getObjId()!=null){
				objId=(SbiObjects)tmpSession.load(SbiObjects.class,  aMenu.getObjId());
				hibMenu.setSbiObjects(objId);
			}
			else{
				hibMenu.setSbiObjects(null);
			}

			//Modify Roles Associated
			// delete all roles functionality
			Set oldRoles = hibMenu.getSbiMenuRoles();
			Iterator iterOldRoles = oldRoles.iterator();
			while (iterOldRoles.hasNext()) {
				SbiMenuRole role = (SbiMenuRole) iterOldRoles.next();
				tmpSession.delete(role);
			}
			// save roles functionality
			Set menuRoleToSave = new HashSet();
			menuRoleToSave.addAll(saveRolesMenu(tmpSession, hibMenu,
					aMenu));
			// set new roles into sbiFunctions
			hibMenu.setSbiMenuRoles(menuRoleToSave);	

			hibMenu.setHomepage(new Boolean(aMenu.isHomepage()));
			hibMenu.setViewIcons(new Boolean(aMenu.isViewIcons()));
			hibMenu.setHideExecBar(new Boolean(aMenu.isHideExecBar()));

			hibMenu.setStaticPage(aMenu.getStaticPage());
			tx.commit();

		} catch (HibernateException he) {
			logException(he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {			
			if (tmpSession!=null){
				if (tmpSession.isOpen()) tmpSession.close();
			}			
		}

	}

	/**
	 * Insert menu.
	 * 
	 * @param aMenu the a menu
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.wapp.dao.IMenuDAO#insertMenu(it.eng.spagobi.wapp.bo.Menu)
	 */
	public void insertMenu(Menu aMenu) throws EMFUserError{		
		Session tmpSession = null;
		Transaction tx = null;
		try {
			tmpSession = getSession();
			tx = tmpSession.beginTransaction();
			SbiMenu hibMenu = new SbiMenu();
			hibMenu.setName(aMenu.getName());
			hibMenu.setDescr(aMenu.getDescr());
			hibMenu.setParentId(aMenu.getParentId());
			if(aMenu.getObjId()!=null){
				SbiObjects objId = (SbiObjects)tmpSession.load(SbiObjects.class,  aMenu.getObjId());
				hibMenu.setSbiObjects(objId);}
			else{
				hibMenu.setSbiObjects(null);
			}
			tmpSession.save(hibMenu);


			Set menuRoleToSave = new HashSet();
			Set temp=saveRolesMenu(tmpSession, hibMenu,
					aMenu);
			menuRoleToSave.addAll(temp);
			// set new roles into sbiFunctions
			hibMenu.setSbiMenuRoles(menuRoleToSave);


			// if is set as homepage delete previous homepage

			hibMenu.setHomepage(new Boolean(aMenu.isHomepage()));
			hibMenu.setViewIcons(new Boolean(aMenu.isViewIcons()));
			hibMenu.setHideExecBar(new Boolean(aMenu.isHideExecBar()));
			hibMenu.setStaticPage(aMenu.getStaticPage());

			tx.commit();
		} catch (HibernateException he) {
			logException(he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {

			if (tmpSession!=null){
				if (tmpSession.isOpen()) tmpSession.close();
			}

		}
	}

	/**
	 * Erase menu.
	 * 
	 * @param aMenu the a menu
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.wapp.dao.IMenuDAO#eraseMenu(it.eng.spagobi.wapp.bo.Menu)
	 */
	public void eraseMenu(Menu aMenu) throws EMFUserError {

		Session tmpSession = null;
		Transaction tx = null;
		try {
			tmpSession = getSession();
			tx = tmpSession.beginTransaction();

			SbiMenu hibMenu = (SbiMenu) tmpSession.load(SbiMenu.class, aMenu.getMenuId());

			Set oldRoles = hibMenu.getSbiMenuRoles();
			Iterator iterOldRoles = oldRoles.iterator();
			while (iterOldRoles.hasNext()) {
				SbiMenuRole role = (SbiMenuRole) iterOldRoles.next();
				tmpSession.delete(role);
			}


			tmpSession.delete(hibMenu);
			tx.commit();
		} catch (HibernateException he) {
			logException(he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {

			if (tmpSession!=null){
				if (tmpSession.isOpen()) tmpSession.close();
			}

		}
	}

	/**
	 * Load all menues.
	 * 
	 * @return the list
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.wapp.dao.IMenuDAO#loadAllMenues()
	 */
	public List loadAllMenues() throws EMFUserError {
		Session tmpSession = null;
		Transaction tx = null;
		List realResult = new ArrayList();
		try {
			tmpSession = getSession();
			tx = tmpSession.beginTransaction();

			Query hibQuery = tmpSession.createQuery(" from SbiMenu");

			List hibList = hibQuery.list();
			Iterator it = hibList.iterator();			
			while (it.hasNext()) {			
				SbiMenu hibMenu = (SbiMenu) it.next();	
				if (hibMenu != null) {
					Menu biMenu = toMenu(hibMenu);	
					realResult.add(biMenu);
				}
			}
			//tx.commit();
		} catch (HibernateException he) {
			logException(he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {

			if (tmpSession!=null){
				if (tmpSession.isOpen()) tmpSession.close();
			}

		}
		return realResult;
	}

	/**
	 * Checks for roles associated.
	 * 
	 * @param menuId the menu id
	 * 
	 * @return true, if checks for roles associated
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.wapp.dao.IMenuDAO#hasRolesAssociated(java.lang.Integer)
	 */
	public boolean hasRolesAssociated (Integer menuId) throws EMFUserError{
		boolean bool = false; 


		Session tmpSession = null;
		Transaction tx = null;
		try {
			tmpSession = getSession();
			tx = tmpSession.beginTransaction();

			String hql = " from SbiMenuRole s where s.id.menuId = "+ menuId;
			Query aQuery = tmpSession.createQuery(hql);

			List biFeaturesAssocitedWithMap = aQuery.list();
			if (biFeaturesAssocitedWithMap.size() > 0)
				bool = true;
			else
				bool = false;
			//tx.commit();
		} catch (HibernateException he) {
			logException(he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (tmpSession!=null){
				if (tmpSession.isOpen()) tmpSession.close();
			}
		}
		return bool;

	}

	/**
	 * Gets the children menu.
	 * 
	 * @param menuId the menu id
	 * 
	 * @return the children menu
	 * 
	 * @throws EMFUserError the EMF user error
	 * 
	 * @see it.eng.spagobi.wapp.dao.IMenuDAO#getChildrenMenu(java.lang.Integer)
	 */
	public List getChildrenMenu (Integer menuId) throws EMFUserError{
		List lstChildren = new ArrayList();
		Session tmpSession = null;
		Transaction tx = null;
		try {
			tmpSession = getSession();
			tx = tmpSession.beginTransaction();

			String hql = " from SbiMenu s where s.id.parentId = "+ menuId;
			Query aQuery = tmpSession.createQuery(hql);

			List hibList = aQuery.list();
			Iterator it = hibList.iterator();			
			while (it.hasNext()) {			
				SbiMenu hibMenu = (SbiMenu) it.next();	
				if (hibMenu != null) {
					Menu biMenu = toMenu(hibMenu);	
					lstChildren.add(biMenu);
				}
			}

		} catch (HibernateException he) {
			logException(he);

			if (tx != null)
				tx.rollback();

			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (tmpSession!=null){
				if (tmpSession.isOpen()) tmpSession.close();
			}
		}
		return lstChildren;
	}

	/**
	 * From the Hibernate Menu object at input, gives the corrispondent 
	 * <code>Menu</code> object.
	 * 
	 * @param hibMenu	The Hibernate Menu object
	 * @return the corrispondent output <code>Menu</code>
	 */
	private Menu toMenu(SbiMenu hibMenu) throws EMFUserError{

		Menu menu = new Menu();
		menu.setMenuId(hibMenu.getMenuId());
		menu.setName(hibMenu.getName());
		menu.setDescr(hibMenu.getDescr());
		menu.setParentId(hibMenu.getParentId());
		if (hibMenu.getSbiObjects() != null)
			menu.setObjId(hibMenu.getSbiObjects().getBiobjId());
		menu.setLevel(getLevel(menu.getParentId(), menu.getObjId()));
		if(hibMenu.getHomepage()!=null){
			menu.setHomepage(hibMenu.getHomepage().booleanValue());
		}
		else menu.setHomepage(false);

		if(hibMenu.getViewIcons()!=null){
			menu.setViewIcons(hibMenu.getViewIcons().booleanValue());
		}
		else menu.setViewIcons(false);

		if(hibMenu.getHideExecBar()!=null){
			menu.setHideExecBar(hibMenu.getHideExecBar().booleanValue());
		}
		else menu.setHideExecBar(false);

		menu.setStaticPage(hibMenu.getStaticPage());
		
		
		//set the dephts
		/*if(menu.getParentId()!=null){
			Menu parent=loadMenuByID(menu.getParentId());
			if(parent!=null){
				Integer depth=parent.getDepth();
				menu.setDepth(new Integer(depth.intValue()+1));
			}
		}
		else{
			menu.setDepth(new Integer(0));
		}*/


		List rolesList = new ArrayList();
		Set roles = hibMenu.getSbiMenuRoles();   // roles of menu in database
		Iterator iterRoles = roles.iterator();
		while(iterRoles.hasNext()) {			// for each role retrieved in database
			SbiMenuRole hibMenuRole = (SbiMenuRole)iterRoles.next();

			SbiExtRoles hibRole =hibMenuRole.getSbiExtRoles();

			RoleDAOHibImpl roleDAO =  new RoleDAOHibImpl();
			Role role = roleDAO.toRole(hibRole);

			rolesList.add(role);
		}

		Role[] rolesD = new Role[rolesList.size()];

		for (int i = 0; i < rolesList.size(); i++)
			rolesD[i] = (Role) rolesList.get(i);

		menu.setRoles(rolesD);

		//set children
		try{
			List tmpLstChildren = (DAOFactory.getMenuDAO().getChildrenMenu(menu.getMenuId()));
			boolean hasCHildren = (tmpLstChildren.size()==0)?false:true;
			menu.setLstChildren(tmpLstChildren);
			menu.setHasChildren(hasCHildren);
		}catch (Exception ex){
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);
		}

		return menu;
	}

	/**
	 * Return the level of menu element: 1 - first, 2 - second|third, 4 - last, 0 other
	 */
	private Integer getLevel(Integer parentId, Integer objId){
		if (parentId == null && objId != null)
			return new Integer("1");
		else if (parentId != null && objId == null)
			return new Integer("2");
		else if(parentId != null && objId != null)
			return new Integer("4");
		else
			return new Integer("1");
	}


	/**
	 * Saves all roles for a menu, using session and state information.

	 * 
	 * @param aSession The current session object
	 * @param hibFunct The functionality hibernate object
	 * @param aLowFunctionality The Low Functionality object
		@return A collection object containing all roles 
	 * @throws EMFUserError 
	 * 
	 */
	private Set saveRolesMenu(Session aSession, SbiMenu hibMenu, Menu aMenu) throws EMFUserError {
		Set menuRoleToSave = new HashSet();

		Criterion domainCdCriterrion = null;
		Criteria criteria = null;	
		criteria = aSession.createCriteria(SbiMenuRole.class);
		//domainCdCriterrion = Expression.eq("valueCd", state);
		//criteria.add(domainCdCriterrion);
		//SbiDomains devStateDomain = (SbiDomains)criteria.uniqueResult();
		//if (devStateDomain == null){
		//	throw new EMFUserError(EMFErrorSeverity.ERROR, 1039);
		//}
		Role[] roles = null;
		roles = aMenu.getRoles();

		for(int i=0; i<roles.length; i++) {
			Role role = roles[i];
			domainCdCriterrion = Expression.eq("extRoleId", role.getId());
			criteria = aSession.createCriteria(SbiExtRoles.class);
			criteria.add(domainCdCriterrion);
			SbiExtRoles hibRole = (SbiExtRoles)criteria.uniqueResult();

			SbiMenuRoleId sbiMenuRoleId = new SbiMenuRoleId();
			sbiMenuRoleId.setMenuId(hibMenu.getMenuId());
			sbiMenuRoleId.setExtRoleId(role.getId());

			SbiMenuRole sbiMenuRole= new SbiMenuRole();
			sbiMenuRole.setId(sbiMenuRoleId);
			sbiMenuRole.setSbiMenu(hibMenu);
			sbiMenuRole.setSbiExtRoles(hibRole);

			aSession.save(sbiMenuRole);
			menuRoleToSave.add(sbiMenuRole);
		}
		return menuRoleToSave;
	}


	/**
	 * Substitution between the current node and his father
	 * @param menuID
	 * @throws EMFUserError
	 */

	public void moveUpMenu(Integer menuID) throws EMFUserError {
		Session tmpSession = null;
		Transaction tx = null;
		try {
			tmpSession = getSession();
			tx = tmpSession.beginTransaction();

			SbiMenu sbiMenu=(SbiMenu)tmpSession.load(SbiMenu.class, menuID);

			Integer fatherId=sbiMenu.getParentId();

			SbiMenu sbiFatherMenu=(SbiMenu)tmpSession.load(SbiMenu.class, fatherId);

			Integer grandFatherId=sbiFatherMenu.getParentId();

			//Change children: 

			// get the children of old father, they will point to new father
			Criterion parentCriterrion = Expression.eq("parentId",
					fatherId);
			Criteria criteria = tmpSession.createCriteria(SbiMenu.class);
			criteria.add(parentCriterrion);

			// Get the list of children from the old father
			List oldFatherChildren=criteria.list();

			//I can retrieve all the children now and save all them
			for (Iterator iterator = oldFatherChildren.iterator(); iterator.hasNext();) {
				SbiMenu sbiMenuO = (SbiMenu) iterator.next();
				sbiMenuO.setParentId(menuID);
			}




			Criterion childCriterrion = Expression.eq("parentId",
					menuID);
			Criteria childCriteria = tmpSession.createCriteria(SbiMenu.class);
			childCriteria.add(childCriterrion);

			// Get the list of children from the new father
			List newFatherChildren=childCriteria.list();

			for (Iterator iterator = newFatherChildren.iterator(); iterator.hasNext();) {
				SbiMenu sbiMenuO = (SbiMenu) iterator.next();
				if(!(oldFatherChildren.contains(sbiMenuO))) sbiMenuO.setParentId(fatherId);
			}


			sbiMenu.setParentId(grandFatherId);
			sbiFatherMenu.setParentId(menuID);


			tx.commit();
		} catch (HibernateException he) {
			if (tx != null)
				tx.rollback();
			throw new EMFUserError(EMFErrorSeverity.ERROR, 100);

		} finally {
			if (tmpSession!=null){
				if (tmpSession.isOpen()) tmpSession.close();
			}
		}
	}



}