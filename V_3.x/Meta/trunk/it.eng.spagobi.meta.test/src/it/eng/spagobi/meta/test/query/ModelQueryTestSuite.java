/**
 SpagoBI, the Open Source Business Intelligence suite

 Copyright (C) 2012 Engineering Ingegneria Informatica S.p.A. - SpagoBI Competency Center
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this file,
 You can obtain one at http://mozilla.org/MPL/2.0/.
 
**/
package it.eng.spagobi.meta.test.query;

import it.eng.spagobi.meta.test.TestCostants;
import it.eng.spagobi.meta.test.query.mysql.MySqlModelQueryTest;
import it.eng.spagobi.meta.test.query.postgres.PostgresModelQueryTest;
import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * @author Andrea Gioia (andrea.gioia@eng.it)
 *
 */
public class ModelQueryTestSuite extends TestCase {
	static public Test suite() {
		TestSuite suite = new TestSuite("Query tests");
		if(TestCostants.enableTestsOnMySql) suite.addTestSuite(MySqlModelQueryTest.class);
		if(TestCostants.enableTestsOnPostgres) suite.addTestSuite(PostgresModelQueryTest.class);
		// add here test suites of other databases ...
		return suite;
	}
}