CREATE SEQUENCE SBI_CHECKS_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_DOMAINS_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_ENGINES_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_EXT_ROLES_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_FUNCTIONS_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_LOV_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_OBJECTS_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_PARAMETERS_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_PARUSE_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_OBJ_PAR_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_EVENTS_LOG_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_AUDIT_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_USER_FUNC_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_REMEMBER_ME_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_MENU_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_BINARY_CONTENTS_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_DATA_SET_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_DATA_SOURCE_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_DIST_LIST_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_DIST_LIST_USER_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_DIST_LIST_OBJECTS_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_DOSSIER_BIN_TEMP_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_DOSSIER_TEMP_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_DOSSIER_PRES_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_GEO_FEATURES_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_GEO_MAPS_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_OBJECT_NOTES_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_OBJECT_TEMPLATES_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_SNAPSHOTS_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_SUBOBJECTS_SEQ INCREMENT 1 START 1 ;
CREATE SEQUENCE SBI_VIEWPOINTS_SEQ INCREMENT 1 START 1 ;


CREATE TABLE SBI_AUDIT
(
	ID INTEGER DEFAULT nextval('SBI_AUDIT_SEQ') NOT NULL,
	USERNAME VARCHAR(40) NOT NULL,
	USERGROUP VARCHAR(100),
	DOC_REF INTEGER,
	DOC_ID INTEGER,
	DOC_LABEL VARCHAR(20) NOT NULL,
	DOC_NAME VARCHAR(40) NOT NULL,
	DOC_TYPE VARCHAR(20) NOT NULL,
	DOC_STATE VARCHAR(20) NOT NULL,
	DOC_PARAMETERS VARCHAR(400),
	SUBOBJ_REF INTEGER,
	SUBOBJ_ID INTEGER,
	SUBOBJ_NAME VARCHAR(50),
	SUBOBJ_OWNER VARCHAR(50),
	SUBOBJ_ISPUBLIC SMALLINT,
	ENGINE_REF INTEGER,
	ENGINE_ID INTEGER,
	ENGINE_LABEL VARCHAR(40) NOT NULL,
	ENGINE_NAME VARCHAR(40) NOT NULL,
	ENGINE_TYPE VARCHAR(20) NOT NULL,
	ENGINE_URL VARCHAR(400),
	ENGINE_DRIVER VARCHAR(400),
	ENGINE_CLASS VARCHAR(400),
	REQUEST_TIME DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	EXECUTION_START DATE,
	EXECUTION_END DATE,
	EXECUTION_TIME INTEGER,
	EXECUTION_STATE VARCHAR(20),
	ERROR SMALLINT,
	ERROR_MESSAGE VARCHAR(400),
	ERROR_CODE VARCHAR(20),
	EXECUTION_MODALITY VARCHAR(40),
			CONSTRAINT XPKSBI_AUDIT 
              PRIMARY KEY (ID)
) WITHOUT OIDS;


CREATE TABLE SBI_BINARY_CONTENTS
(
	BIN_ID INTEGER DEFAULT nextval('SBI_BINARY_CONTENTS_SEQ') NOT NULL,
	BIN_CONTENT BYTEA NOT NULL,
				CONSTRAINT XPKSBI_BINARY_CONTENTS 
              PRIMARY KEY (BIN_ID)
) WITHOUT OIDS;

CREATE UNIQUE INDEX XAK1SBI_BINARY_CONTENTS ON SBI_BINARY_CONTENTS
(
       BIN_ID
);

CREATE TABLE SBI_CHECKS
(
	CHECK_ID INTEGER DEFAULT nextval('SBI_CHECKS_SEQ') NOT NULL,
	DESCR VARCHAR(160),
	LABEL VARCHAR(20) NOT NULL,
	VALUE_TYPE_CD VARCHAR(20) NOT NULL,
	VALUE_TYPE_ID INTEGER NOT NULL,
	VALUE_1 VARCHAR(400),
	VALUE_2 VARCHAR(400),
	NAME VARCHAR(40) NOT NULL,
	       CONSTRAINT XPKSBI_CHECKS 
              PRIMARY KEY (CHECK_ID)
) WITHOUT OIDS;

CREATE UNIQUE INDEX XAK1SBI_CHECKS ON SBI_CHECKS
(
       LABEL                      
);

CREATE TABLE SBI_DATA_SET
(
	DS_ID INTEGER DEFAULT nextval('SBI_DATA_SET_SEQ') NOT NULL,
	DESCR VARCHAR(160),
	LABEL VARCHAR(50) NOT NULL,
	NAME VARCHAR(50) NOT NULL,
	FILE_NAME VARCHAR(50),
	QUERY TEXT,
	ADRESS VARCHAR(250),
	EXECUTOR_CLASS VARCHAR(250),
	PARAMS VARCHAR(1000),
	DATA_SOURCE_ID INTEGER,
	OBJECT_TYPE VARCHAR(50),
	OPERATION VARCHAR(250),
      CONSTRAINT XPKSBI_DATA_SET 
          PRIMARY KEY (DS_ID)
) WITHOUT OIDS;

CREATE UNIQUE INDEX XAK1SBI_DATA_SET ON SBI_DATA_SET
(
       LABEL
);

CREATE TABLE SBI_DATA_SOURCE
(
	DS_ID INTEGER DEFAULT nextval('SBI_DATA_SOURCE_SEQ') NOT NULL,
	DESCR VARCHAR(160),
	LABEL VARCHAR(50) NOT NULL,
	JNDI VARCHAR(50),
	URL_CONNECTION VARCHAR(50),
	USERNAME VARCHAR(50),
	PWD VARCHAR(50),
	DRIVER VARCHAR(160),
	DIALECT_ID INTEGER NOT NULL,
	    CONSTRAINT XPKSBI_DATA_SOURCE 
          PRIMARY KEY (DS_ID)
) WITHOUT OIDS;

CREATE UNIQUE INDEX XAK1SBI_DATA_SOURCE ON SBI_DATA_SOURCE
(
       LABEL
);

CREATE TABLE SBI_DIST_LIST
(
	DL_ID INTEGER DEFAULT nextval('SBI_DIST_LIST_SEQ') NOT NULL,
	NAME VARCHAR(40) NOT NULL,
	DESCR VARCHAR(160),
	    CONSTRAINT XPKSBI_DIST_LIST 
          PRIMARY KEY (DL_ID)
) WITHOUT OIDS;


CREATE TABLE SBI_DIST_LIST_USER
(
	DLU_ID INTEGER DEFAULT nextval('SBI_DIST_LIST_USER_SEQ') NOT NULL,
	LIST_ID INTEGER NOT NULL,
	USER_ID VARCHAR(40) NOT NULL,
	E_MAIL VARCHAR(70) NOT NULL,
	    CONSTRAINT XPKSBI_DIST_LIST_USER 
          PRIMARY KEY (DLU_ID)
) WITHOUT OIDS;

CREATE UNIQUE INDEX XAK1SBI_DIST_LIST_USER ON SBI_DIST_LIST_USER
(
       LIST_ID,
       USER_ID           
);

CREATE TABLE SBI_DIST_LIST_OBJECTS
(
	REL_ID INTEGER DEFAULT nextval('SBI_DIST_LIST_OBJECTS_SEQ') NOT NULL,
	DOC_ID INTEGER NOT NULL,
	DL_ID INTEGER NOT NULL,
	XML VARCHAR(5000) NOT NULL,
	    CONSTRAINT XPKSBI_DIST_LIST_OBJECTS 
          PRIMARY KEY (REL_ID)
) WITHOUT OIDS;

CREATE UNIQUE INDEX XAK1SBI_DIST_LIST_OBJECTS ON SBI_DIST_LIST_OBJECTS
(
       DOC_ID,
       DL_ID           
);

CREATE TABLE SBI_DOMAINS
(
	VALUE_ID INTEGER DEFAULT nextval('SBI_DOMAINS_SEQ') NOT NULL,
	VALUE_CD VARCHAR(20),
	VALUE_NM VARCHAR(40),
	DOMAIN_CD VARCHAR(20),
	DOMAIN_NM VARCHAR(40),
	VALUE_DS VARCHAR(160),
       CONSTRAINT XPKSBI_DOMAINS 
              PRIMARY KEY (VALUE_ID)
) WITHOUT OIDS;

CREATE UNIQUE INDEX XAK1SBI_DOMAINS ON SBI_DOMAINS
(
       VALUE_CD,
       DOMAIN_CD                  
);

CREATE TABLE SBI_DOSSIER_BIN_TEMP
(
	BIN_ID INTEGER DEFAULT nextval('SBI_DOSSIER_BIN_TEMP_SEQ') NOT NULL,
	PART_ID INTEGER NOT NULL,
	NAME VARCHAR(20),
	BIN_CONTENT BYTEA NOT NULL,
	TYPE VARCHAR(20) NOT NULL,
	CREATION_DATE DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
       CONSTRAINT XPKSBI_DOSSIER_BIN_TEMP 
              PRIMARY KEY (BIN_ID)
) WITHOUT OIDS;

CREATE UNIQUE INDEX XAK1SBI_DOSSIER_BIN_TEMP ON SBI_DOSSIER_BIN_TEMP
(
       BIN_ID
);

CREATE TABLE SBI_DOSSIER_TEMP
(
	PART_ID INTEGER DEFAULT nextval('SBI_DOSSIER_TEMP_SEQ') NOT NULL,
	WORKFLOW_PROCESS_ID BIGINT NOT NULL,
	BIOBJ_ID INTEGER NOT NULL,
	PAGE_ID INTEGER NOT NULL,
       CONSTRAINT XPKSBI_DOSSIER_TEMP 
              PRIMARY KEY (PART_ID)
) WITHOUT OIDS;

CREATE UNIQUE INDEX XAK1SBI_DOSSIER_TEMP ON SBI_DOSSIER_TEMP
(
       PART_ID
);

CREATE TABLE SBI_DOSSIER_PRES
(
	PRESENTATION_ID INTEGER DEFAULT nextval('SBI_DOSSIER_PRES_SEQ') NOT NULL,
	WORKFLOW_PROCESS_ID BIGINT NOT NULL,
	BIOBJ_ID INTEGER NOT NULL,
	BIN_ID INTEGER NOT NULL,
	NAME VARCHAR(40) NOT NULL,
	PROG INTEGER,
	CREATION_DATE DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	APPROVED SMALLINT,
       CONSTRAINT XPKSBI_DOSSIER_PRES 
              PRIMARY KEY (PRESENTATION_ID)
) WITHOUT OIDS;

CREATE UNIQUE INDEX XAK1SBI_DOSSIER_PRES ON SBI_DOSSIER_PRES
(
       PRESENTATION_ID
);

CREATE TABLE SBI_ENGINES
(
	ENGINE_ID INTEGER DEFAULT nextval('SBI_ENGINES_SEQ') NOT NULL,
	ENCRYPT SMALLINT,
	NAME VARCHAR(40) NOT NULL,
	DESCR VARCHAR(160),
	MAIN_URL VARCHAR(400),
	SECN_URL VARCHAR(400),
	OBJ_UPL_DIR VARCHAR(400),
	OBJ_USE_DIR VARCHAR(400),
	DRIVER_NM VARCHAR(400),
	LABEL VARCHAR(40) NOT NULL,
	ENGINE_TYPE INTEGER NOT NULL,
	CLASS_NM VARCHAR(400),
	BIOBJ_TYPE INTEGER NOT NULL,
	DEFAULT_DS_ID INTEGER,
	USE_DATASOURCE BOOLEAN DEFAULT FALSE,
	USE_DATASET BOOLEAN DEFAULT FALSE,
      CONSTRAINT XPKSBI_ENGINES 
              PRIMARY KEY (ENGINE_ID)
) WITHOUT OIDS;


CREATE TABLE SBI_EVENTS
(
	ID INTEGER NOT NULL,
	USER_EVENT VARCHAR(40) NOT NULL,
       CONSTRAINT XPKSBI_EVENTS 
              PRIMARY KEY (ID)
) WITHOUT OIDS;


CREATE TABLE SBI_EVENTS_LOG
(
	ID INTEGER DEFAULT nextval('SBI_EVENTS_LOG_SEQ') NOT NULL,
	USER_EVENT VARCHAR(40) NOT NULL,
	EVENT_DATE DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	DESCR VARCHAR(1000) NOT NULL,
	PARAMS VARCHAR(1000),
	HANDLER VARCHAR(400) NOT NULL DEFAULT 'it.eng.spagobi.events.handlers.DefaultEventPresentationHandler',
       CONSTRAINT XPKSBI_EVENTS_LOG 
              PRIMARY KEY (ID)
) WITHOUT OIDS;


CREATE TABLE SBI_EVENTS_ROLES
(
	EVENT_ID INTEGER NOT NULL,
	ROLE_ID INTEGER NOT NULL,
       CONSTRAINT XPKSBI_EVENTS_ROLES 
              PRIMARY KEY (EVENT_ID,ROLE_ID)
) WITHOUT OIDS;


CREATE TABLE SBI_EXT_ROLES
(
	EXT_ROLE_ID INTEGER DEFAULT nextval('SBI_EXT_ROLES_SEQ') NOT NULL,
	NAME VARCHAR(100),
	DESCR VARCHAR(160),
	CODE VARCHAR(20),
	ROLE_TYPE_CD VARCHAR(20) NOT NULL,
	ROLE_TYPE_ID INTEGER NOT NULL,
  SEE_SUBOBJECTS BOOLEAN DEFAULT TRUE,
  SEE_VIEWPOINTS BOOLEAN DEFAULT TRUE,
  SEE_SNAPSHOTS BOOLEAN DEFAULT TRUE,
  SEE_NOTES BOOLEAN DEFAULT TRUE,
  SEND_MAIL BOOLEAN DEFAULT TRUE,
  SAVE_INTO_FOLDER BOOLEAN DEFAULT TRUE,
  SAVE_REMEMBER_ME BOOLEAN DEFAULT TRUE,
  SEE_METADATA BOOLEAN DEFAULT TRUE,
       CONSTRAINT XPKSBI_EXT_ROLES 
              PRIMARY KEY (EXT_ROLE_ID)
) WITHOUT OIDS;


CREATE TABLE SBI_FUNC_ROLE
(
	ROLE_ID INTEGER NOT NULL,
	FUNCT_ID INTEGER NOT NULL,
	STATE_CD VARCHAR(20),
	STATE_ID INTEGER NOT NULL,
       CONSTRAINT XPKSBI_FUNC_ROLE 
              PRIMARY KEY (FUNCT_ID, STATE_ID, ROLE_ID)
) WITHOUT OIDS;


CREATE TABLE SBI_FUNCTIONS
(
	FUNCT_ID INTEGER DEFAULT nextval('SBI_FUNCTIONS_SEQ') NOT NULL,
	FUNCT_TYPE_CD VARCHAR(20) NOT NULL,
	PARENT_FUNCT_ID INTEGER,
	NAME VARCHAR(40),
	DESCR VARCHAR(160),
	PATH VARCHAR(400),
	CODE VARCHAR(20) NOT NULL,
	PROG INTEGER NOT NULL,
	FUNCT_TYPE_ID INTEGER NOT NULL,
       CONSTRAINT XPKSBI_FUNCTIONS 
              PRIMARY KEY (FUNCT_ID)
) WITHOUT OIDS;


CREATE TABLE SBI_GEO_FEATURES
(
	FEATURE_ID INTEGER DEFAULT nextval('SBI_GEO_FEATURES_SEQ') NOT NULL,
	NAME VARCHAR(40) NOT NULL,
	DESCR VARCHAR(160),
	TYPE VARCHAR(40),
       CONSTRAINT XPKSBI_GEO_FEATURES 
              PRIMARY KEY (FEATURE_ID)
) WITHOUT OIDS;


CREATE TABLE SBI_GEO_MAP_FEATURES
(
	MAP_ID INTEGER NOT NULL,
	FEATURE_ID INTEGER NOT NULL,
	SVG_GROUP VARCHAR(40),
	VISIBLE_FLAG VARCHAR(1),
       CONSTRAINT XPKSBI_GEO_MAP_FEATURES 
              PRIMARY KEY (MAP_ID, FEATURE_ID)
) WITHOUT OIDS;


CREATE TABLE SBI_GEO_MAPS
(
	MAP_ID INTEGER DEFAULT nextval('SBI_GEO_MAPS_SEQ') NOT NULL,
	NAME VARCHAR(40) NOT NULL,
	DESCR VARCHAR(160),
	URL VARCHAR(400) NOT NULL,
	FORMAT VARCHAR(40),
       CONSTRAINT XPKSBI_GEO_MAPS 
              PRIMARY KEY (MAP_ID)
) WITHOUT OIDS;


CREATE TABLE SBI_LOV
(
	LOV_ID INTEGER DEFAULT nextval('SBI_LOV_SEQ') NOT NULL,
	DESCR VARCHAR(160),
	LABEL VARCHAR(20) NOT NULL,
	INPUT_TYPE_CD VARCHAR(20) NOT NULL,
	DEFAULT_VAL VARCHAR(40),
	LOV_PROVIDER VARCHAR(4000),
	INPUT_TYPE_ID INTEGER NOT NULL,
	PROFILE_ATTR VARCHAR(20),
	NAME VARCHAR(40) NOT NULL,
       CONSTRAINT XPKSBI_LOV 
              PRIMARY KEY (LOV_ID)
) WITHOUT OIDS;

CREATE UNIQUE INDEX XAK1SBI_LOV ON SBI_LOV
(
       LABEL                      
);

CREATE TABLE SBI_MENU (
		MENU_ID 			INTEGER DEFAULT nextval('SBI_MENU_SEQ') NOT NULL,
		NAME 				VARCHAR(50), 
		DESCR 				TEXT,
		PARENT_ID 			INTEGER, 
		BIOBJ_ID 			INTEGER,
		HOMEPAGE 			BOOLEAN,
		VIEW_ICONS 			BOOLEAN,
		HIDE_TOOLBAR 		BOOLEAN, 
		HIDE_SLIDERS 		BOOLEAN,
		STATIC_PAGE 		VARCHAR(45),
		BIOBJ_PARAMETERS 	VARCHAR(400) NULL,
		SUBOBJ_NAME 		VARCHAR(50) NULL,
		SNAPSHOT_NAME 		VARCHAR(50) NULL,
		SNAPSHOT_HISTORY 	INTEGER NULL,
		CONSTRAINT XPKSBI_MENU
        	PRIMARY KEY (MENU_ID)
);

CREATE TABLE SBI_MENU_ROLE (
       MENU_ID INTEGER NOT NULL, 
       EXT_ROLE_ID INTEGER NOT NULL,
       CONSTRAINT XPKSBI_MENU_ROLE
        	PRIMARY KEY (MENU_ID,EXT_ROLE_ID)
);

CREATE TABLE SBI_OBJ_FUNC
(
	BIOBJ_ID INTEGER NOT NULL,
	FUNCT_ID INTEGER NOT NULL,
	PROG INTEGER,
       CONSTRAINT XPKSBI_OBJ_FUNC 
              PRIMARY KEY (BIOBJ_ID, FUNCT_ID)
) WITHOUT OIDS;


CREATE TABLE SBI_OBJ_PAR
(
	OBJ_PAR_ID INTEGER DEFAULT nextval('SBI_OBJ_PAR_SEQ') NOT NULL,
	PAR_ID INTEGER NOT NULL,
	BIOBJ_ID INTEGER NOT NULL,
	LABEL VARCHAR(40) NOT NULL,
	REQ_FL SMALLINT,
	MOD_FL SMALLINT,
	VIEW_FL SMALLINT,
	MULT_FL SMALLINT,
	PROG INTEGER NOT NULL,
	PARURL_NM VARCHAR(20),
	PRIORITY INTEGER,
       CONSTRAINT XPKSBI_OBJ_PAR 
              PRIMARY KEY (OBJ_PAR_ID)
) WITHOUT OIDS;


CREATE TABLE SBI_OBJ_PARUSE
(
	OBJ_PAR_ID INTEGER NOT NULL,
	USE_ID INTEGER NOT NULL,
	OBJ_PAR_FATHER_ID INTEGER NOT NULL,
	FILTER_OPERATION VARCHAR(20) NOT NULL,
	PROG INTEGER NOT NULL,
	FILTER_COLUMN VARCHAR(30) NOT NULL,
	PRE_CONDITION VARCHAR(10),
	POST_CONDITION VARCHAR(10),
	LOGIC_OPERATOR VARCHAR(10),
       CONSTRAINT XPKSBI_OBJ_PARUSE 
              PRIMARY KEY (OBJ_PAR_ID,USE_ID,OBJ_PAR_FATHER_ID,FILTER_OPERATION)
) WITHOUT OIDS;


CREATE TABLE SBI_OBJ_STATE
(
	BIOBJ_ID INTEGER NOT NULL,
	STATE_ID INTEGER NOT NULL,
	END_DT DATE,
	START_DT DATE NOT NULL,
	NOTE VARCHAR(300),
       CONSTRAINT XPKSBI_OBJ_STATE 
              PRIMARY KEY (BIOBJ_ID, STATE_ID, START_DT)
) WITHOUT OIDS;


CREATE TABLE SBI_OBJECT_NOTES
(
	OBJ_NOTE_ID INTEGER DEFAULT nextval('SBI_OBJECT_NOTES_SEQ') NOT NULL,
	BIOBJ_ID INTEGER,
	BIN_ID INTEGER,
	EXEC_REQ VARCHAR(500),
       CONSTRAINT XPKSBI_OBJECT_NOTES 
              PRIMARY KEY (OBJ_NOTE_ID)
) WITHOUT OIDS;

CREATE UNIQUE INDEX XAK1SBI_OBJECT_NOTES ON SBI_OBJECT_NOTES
(
       OBJ_NOTE_ID
);

CREATE TABLE SBI_OBJECT_TEMPLATES
(
	OBJ_TEMP_ID INTEGER DEFAULT nextval('SBI_OBJECT_TEMPLATES_SEQ') NOT NULL,
	BIOBJ_ID INTEGER,
	BIN_ID INTEGER,
	NAME VARCHAR(50),
	PROG INTEGER,
	DIMENSION VARCHAR(20),
	CREATION_DATE DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CREATION_USER VARCHAR(45) NOT NULL,
	ACTIVE BOOLEAN,
       CONSTRAINT XPKSBI_OBJECT_TEMPLATES 
              PRIMARY KEY (OBJ_TEMP_ID)
) WITHOUT OIDS;


CREATE TABLE SBI_OBJECTS
(
	BIOBJ_ID INTEGER DEFAULT nextval('SBI_OBJECTS_SEQ') NOT NULL,
	ENGINE_ID INTEGER NOT NULL,
	DESCR VARCHAR(160),
	LABEL VARCHAR(20) NOT NULL,
	ENCRYPT SMALLINT,
	PATH VARCHAR(400),
	REL_NAME VARCHAR(400),
	STATE_ID INTEGER NOT NULL,
	STATE_CD VARCHAR(20) NOT NULL,
	BIOBJ_TYPE_CD VARCHAR(20) NOT NULL,
	BIOBJ_TYPE_ID INTEGER NOT NULL,
	SCHED_FL SMALLINT,
	EXEC_MODE_ID INTEGER,
	STATE_CONS_ID INTEGER,
	EXEC_MODE_CD VARCHAR(20),
	STATE_CONS_CD VARCHAR(20),
	NAME VARCHAR(40) NOT NULL,
	VISIBLE SMALLINT NOT NULL,
	UUID VARCHAR(40) NOT NULL,
	DATA_SOURCE_ID INTEGER,
	DATA_SET_ID INTEGER,
	DESCR_EXT TEXT,
	OBJECTIVE TEXT,
	LANGUAGE VARCHAR(45),
	CREATION_DATE DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CREATION_USER VARCHAR(45) NOT NULL,
	KEYWORDS TEXT,
	REFRESH_SECONDS INTEGER DEFAULT 0,
       CONSTRAINT XPKSBI_OBJECTS 
              PRIMARY KEY (BIOBJ_ID)
) WITHOUT OIDS;

CREATE UNIQUE INDEX XAK1SBI_OBJECTS ON SBI_OBJECTS
(
       LABEL                      
);

CREATE TABLE SBI_OBJECTS_RATING
(
	USER_ID VARCHAR(127) NOT NULL,
	OBJ_ID INTEGER NOT NULL,
	RATING INTEGER NOT NULL,
       CONSTRAINT XPKSBI_OBJECTS_RATING 
              PRIMARY KEY (USER_ID, OBJ_ID)
) WITHOUT OIDS;


CREATE TABLE SBI_PARAMETERS
(
	PAR_ID INTEGER DEFAULT nextval('SBI_PARAMETERS_SEQ') NOT NULL,
	DESCR VARCHAR(160),
	LENGTH SMALLINT NOT NULL,
	LABEL VARCHAR(20) NOT NULL,
	PAR_TYPE_CD VARCHAR(20) NOT NULL,
	MASK VARCHAR(20),
	PAR_TYPE_ID INTEGER NOT NULL,
	NAME VARCHAR(40) NOT NULL,
	FUNCTIONAL_FLAG SMALLINT NOT NULL DEFAULT 1,
       CONSTRAINT XPKSBI_PARAMETERS 
              PRIMARY KEY (PAR_ID)
) WITHOUT OIDS;

CREATE UNIQUE INDEX XAK1SBI_PARAMETERS ON SBI_PARAMETERS
(
       LABEL                      
);

CREATE TABLE SBI_PARUSE
(
	USE_ID INTEGER DEFAULT nextval('SBI_PARUSE_SEQ') NOT NULL,
	LOV_ID INTEGER,
	LABEL VARCHAR(20) NOT NULL,
	DESCR VARCHAR(160),
	PAR_ID INTEGER NOT NULL,
	NAME VARCHAR(40) NOT NULL,
	MAN_IN INTEGER NOT NULL,
	SELECTION_TYPE VARCHAR(20) DEFAULT 'LIST',
	MULTIVALUE_FLAG INTEGER DEFAULT 0,
       CONSTRAINT XPKSBI_PARUSE 
              PRIMARY KEY (USE_ID)
) WITHOUT OIDS;

CREATE UNIQUE INDEX XAK1SBI_PARUSE ON SBI_PARUSE
(
       PAR_ID,
       LABEL                      
);

CREATE TABLE SBI_PARUSE_CK
(
	CHECK_ID INTEGER NOT NULL,
	USE_ID INTEGER NOT NULL,
	PROG INTEGER,
       CONSTRAINT XPKSBI_PARUSE_CK 
              PRIMARY KEY (USE_ID, CHECK_ID)
) WITHOUT OIDS;


CREATE TABLE SBI_PARUSE_DET
(
	EXT_ROLE_ID INTEGER NOT NULL,
	PROG INTEGER,
	USE_ID INTEGER NOT NULL,
	HIDDEN_FL SMALLINT,
	DEFAULT_VAL VARCHAR(40),
       CONSTRAINT XPKSBI_PARUSE_DET 
              PRIMARY KEY (USE_ID, EXT_ROLE_ID)
) WITHOUT OIDS;


CREATE TABLE SBI_REMEMBER_ME
(
	ID INTEGER DEFAULT nextval('SBI_REMEMBER_ME_SEQ') NOT NULL,
	USERNAME VARCHAR(40) NOT NULL,
	BIOBJ_ID INTEGER NOT NULL,
	SUBOBJ_ID INTEGER,
	PARAMETERS VARCHAR(400),
	NAME VARCHAR(50) NOT NULL,
	DESCRIPTION TEXT,
       CONSTRAINT XPKSBI_REMEMBER_ME
              PRIMARY KEY (ID)
) WITHOUT OIDS;

CREATE UNIQUE INDEX XAK1SBI_REMEMBER_ME ON SBI_REMEMBER_ME
(
       ID
);


CREATE TABLE SBI_ROLE_TYPE_USER_FUNC
(
	ROLE_TYPE_ID INTEGER NOT NULL,
	USER_FUNCT_ID INTEGER NOT NULL,
       CONSTRAINT XPKSBI_ROLE_TYPE_USER_FUNC 
              PRIMARY KEY (ROLE_TYPE_ID, USER_FUNCT_ID)
) WITHOUT OIDS;

CREATE UNIQUE INDEX XAK1SBI_ROLE_TYPE_USER_FUNC ON SBI_ROLE_TYPE_USER_FUNC
(
       ROLE_TYPE_ID,
       USER_FUNCT_ID       
);

CREATE TABLE SBI_SNAPSHOTS
(
	SNAP_ID INTEGER DEFAULT nextval('SBI_SNAPSHOTS_SEQ') NOT NULL,
	BIOBJ_ID INTEGER,
	BIN_ID INTEGER,
	NAME VARCHAR(50),
	DESCRIPTION VARCHAR(100),
	CREATION_DATE DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
       CONSTRAINT XPKSBI_SNAPSHOTS
              PRIMARY KEY (SNAP_ID)
) WITHOUT OIDS;


CREATE TABLE SBI_SUBOBJECTS
(
	SUBOBJ_ID INTEGER DEFAULT nextval('SBI_SUBOBJECTS_SEQ') NOT NULL,
	BIOBJ_ID INTEGER,
	BIN_ID INTEGER,
	NAME VARCHAR(50),
	DESCRIPTION VARCHAR(100),
	OWNER VARCHAR(50),
	ISPUBLIC BOOLEAN,
	CREATION_DATE DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	LAST_CHANGE_DATE DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
       CONSTRAINT XPKSBI_SUBOBJECTS
              PRIMARY KEY (SUBOBJ_ID)
) WITHOUT OIDS;


CREATE TABLE SBI_SUBREPORTS
(
	MASTER_RPT_ID INTEGER NOT NULL,
	SUB_RPT_ID INTEGER NOT NULL,
       CONSTRAINT XPKSBI_SUBREPORTS 
              PRIMARY KEY (MASTER_RPT_ID, SUB_RPT_ID)
) WITHOUT OIDS;


CREATE TABLE SBI_USER_FUNC
(
	USER_FUNCT_ID INTEGER DEFAULT nextval('SBI_USER_FUNC_SEQ') NOT NULL,
	NAME VARCHAR(50),
	DESCRIPTION VARCHAR(100),
       CONSTRAINT XPKSBI_USER_FUNC 
              PRIMARY KEY (USER_FUNCT_ID)
) WITHOUT OIDS;

CREATE UNIQUE INDEX XAK1SBI_USER_FUNC ON SBI_USER_FUNC
(
       USER_FUNCT_ID       
);

CREATE TABLE SBI_VIEWPOINTS
(
	VP_ID INTEGER DEFAULT nextval('SBI_SUBOBJECTS_SEQ') NOT NULL,
	BIOBJ_ID INTEGER NOT NULL,
	VP_NAME VARCHAR(40) NOT NULL,
	VP_OWNER VARCHAR(40),
	VP_DESC VARCHAR(160),
	VP_SCOPE VARCHAR(20) NOT NULL,
	VP_VALUE_PARAMS VARCHAR(400),
	VP_CREATION_DATE DATE NOT NULL,
       CONSTRAINT XPKSBI_VIEWPOINTS
              PRIMARY KEY (VP_ID)
) WITHOUT OIDS;

/* CREATE ALTERNATE KEYS */
ALTER TABLE SBI_BINARY_CONTENTS ADD CONSTRAINT AK_FK_SBI_DOSSIER_PRES_1 UNIQUE (BIN_ID);
ALTER TABLE SBI_BINARY_CONTENTS ADD CONSTRAINT AK_FK_SBI_OBJECT_NOTES_1 UNIQUE (BIN_ID);
ALTER TABLE SBI_BINARY_CONTENTS ADD CONSTRAINT AK_FK_SBI_OBJECT_TEMPLATES_1 UNIQUE (BIN_ID);
ALTER TABLE SBI_BINARY_CONTENTS ADD CONSTRAINT AK_FK_SBI_SNAPSHOTS_1 UNIQUE (BIN_ID);
ALTER TABLE SBI_BINARY_CONTENTS ADD CONSTRAINT AK_FK_SBI_SUBOBJECTS_1 UNIQUE (BIN_ID);
ALTER TABLE SBI_CHECKS ADD CONSTRAINT AK_FK_SBI_PARUSE_CK_2 UNIQUE (CHECK_ID);
ALTER TABLE SBI_DATA_SOURCE ADD CONSTRAINT AK_FK_SBI_ENGINE_3 UNIQUE (DS_ID);
ALTER TABLE SBI_DATA_SOURCE ADD CONSTRAINT AK_FK_SBI_OBJECTS_6 UNIQUE (DS_ID);
ALTER TABLE SBI_DIST_LIST ADD CONSTRAINT AK_FK_SBI_DIST_LIST_USER_1 UNIQUE (DL_ID);
ALTER TABLE SBI_DIST_LIST ADD CONSTRAINT AK_FK_SBI_DIST_LIST_OBJECTS_2 UNIQUE (DL_ID);
ALTER TABLE SBI_DOMAINS ADD CONSTRAINT AK_FK_SBI_CHECKS_1 UNIQUE (VALUE_ID);
ALTER TABLE SBI_DOMAINS ADD CONSTRAINT AK_FK_SBI_DATA_SOURCE_1 UNIQUE (VALUE_ID);
ALTER TABLE SBI_DOMAINS ADD CONSTRAINT AK_FK_SBI_ENGINES_1 UNIQUE (VALUE_ID);
ALTER TABLE SBI_DOMAINS ADD CONSTRAINT AK_FK_SBI_ENGINES_2 UNIQUE (VALUE_ID);
ALTER TABLE SBI_DOMAINS ADD CONSTRAINT AK_FK_SBI_EXT_ROLES_1 UNIQUE (VALUE_ID);
ALTER TABLE SBI_DOMAINS ADD CONSTRAINT AK_FK_SBI_FUNC_ROLE_2 UNIQUE (VALUE_ID);
ALTER TABLE SBI_DOMAINS ADD CONSTRAINT AK_FK_SBI_FUNCTIONS_1 UNIQUE (VALUE_ID);
ALTER TABLE SBI_DOMAINS ADD CONSTRAINT AK_FK_SBI_LOV_1 UNIQUE (VALUE_ID);
ALTER TABLE SBI_DOMAINS ADD CONSTRAINT AK_FK_SBI_OBJ_STATE_2 UNIQUE (VALUE_ID);
ALTER TABLE SBI_DOMAINS ADD CONSTRAINT AK_FK_SBI_OBJECTS_1 UNIQUE (VALUE_ID);
ALTER TABLE SBI_DOMAINS ADD CONSTRAINT AK_FK_SBI_OBJECTS_2 UNIQUE (VALUE_ID);
ALTER TABLE SBI_DOMAINS ADD CONSTRAINT AK_FK_SBI_OBJECTS_3 UNIQUE (VALUE_ID);
ALTER TABLE SBI_DOMAINS ADD CONSTRAINT AK_FK_SBI_OBJECTS_4 UNIQUE (VALUE_ID);
ALTER TABLE SBI_DOMAINS ADD CONSTRAINT AK_FK_SBI_PARAMETERS_1 UNIQUE (VALUE_ID);
ALTER TABLE SBI_DOMAINS ADD CONSTRAINT AK_FK_SBI_ROLE_TYPE_USER_FUNC_1 UNIQUE (VALUE_ID);
ALTER TABLE SBI_DOSSIER_TEMP ADD CONSTRAINT AK_FK_SBI_DOSSIER_BIN_TEMP_1 UNIQUE (PART_ID);
ALTER TABLE SBI_ENGINES ADD CONSTRAINT AK_FK_SBI_AUDIT_2 UNIQUE (ENGINE_ID);
ALTER TABLE SBI_ENGINES ADD CONSTRAINT AK_FK_SBI_OBJECTS_5 UNIQUE (ENGINE_ID);
ALTER TABLE SBI_EVENTS_LOG ADD CONSTRAINT AK_FK_SBI_EVENTS_ROLES_2 UNIQUE (ID);
ALTER TABLE SBI_EXT_ROLES ADD CONSTRAINT AK_FK_SBI_EVENTS_ROLES_1 UNIQUE (EXT_ROLE_ID);
ALTER TABLE SBI_EXT_ROLES ADD CONSTRAINT AK_FK_SBI_FUNC_ROLE_1 UNIQUE (EXT_ROLE_ID);
ALTER TABLE SBI_EXT_ROLES ADD CONSTRAINT AK_FK_SBI_PARUSE_DET_2 UNIQUE (EXT_ROLE_ID);
ALTER TABLE SBI_FUNCTIONS ADD CONSTRAINT AK_FK_SBI_FUNC_ROLE_3 UNIQUE (FUNCT_ID);
ALTER TABLE SBI_FUNCTIONS ADD CONSTRAINT AK_FK_SBI_FUNCTIONS_2 UNIQUE (FUNCT_ID);
ALTER TABLE SBI_FUNCTIONS ADD CONSTRAINT AK_FK_SBI_OBJ_FUNC_1 UNIQUE (FUNCT_ID);
ALTER TABLE SBI_GEO_FEATURES ADD CONSTRAINT AK_FK_GEO_MAP_FEATURES2 UNIQUE (FEATURE_ID);
ALTER TABLE SBI_GEO_MAPS ADD CONSTRAINT AK_FK_GEO_MAP_FEATURES1 UNIQUE (MAP_ID);
ALTER TABLE SBI_LOV ADD CONSTRAINT AK_FK_SBI_PARUSE_2 UNIQUE (LOV_ID);
ALTER TABLE SBI_OBJ_PAR ADD CONSTRAINT AK_FK_SBI_OBJ_PARUSE_1 UNIQUE (OBJ_PAR_ID);
ALTER TABLE SBI_OBJ_PAR ADD CONSTRAINT AK_FK_SBI_OBJ_PARUSE_3 UNIQUE (OBJ_PAR_ID);
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT AK_FK_SBI_AUDIT_1 UNIQUE (BIOBJ_ID);
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT AK_FK_SBI_DIST_LIST_OBJECTS_1 UNIQUE (BIOBJ_ID);
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT AK_FK_SBI_DOSSIER_TEMP_1 UNIQUE (BIOBJ_ID);
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT AK_FK_SBI_DOSSIER_PRES_2 UNIQUE (BIOBJ_ID);
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT AK_FK_SBI_OBJ_FUNC_2 UNIQUE (BIOBJ_ID);
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT AK_FK_SBI_OBJ_PAR_1 UNIQUE (BIOBJ_ID);
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT AK_FK_SBI_OBJ_STATE_1 UNIQUE (BIOBJ_ID);
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT AK_FK_SBI_OBJECT_NOTES_2 UNIQUE (BIOBJ_ID);
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT AK_FK_SBI_OBJECT_TEMPLATES_2 UNIQUE (BIOBJ_ID);
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT AK_FK_SBI_OBJECTS_RATING_1 UNIQUE (BIOBJ_ID);
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT AK_FK_SBI_REMEMBER_ME_1 UNIQUE (BIOBJ_ID);
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT AK_FK_SBI_SNAPSHOTS_2 UNIQUE (BIOBJ_ID);
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT AK_FK_SBI_SUBOBJECTS_2 UNIQUE (BIOBJ_ID);
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT AK_FK_SBI_SUBREPORTS_1 UNIQUE (BIOBJ_ID);
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT AK_FK_SBI_SUBREPORTS_2 UNIQUE (BIOBJ_ID);
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT AK_FK_SBI_VIEWPOINTS_1 UNIQUE (BIOBJ_ID);
ALTER TABLE SBI_PARAMETERS ADD CONSTRAINT AK_FK_SBI_OBJ_PAR_2 UNIQUE (PAR_ID);
ALTER TABLE SBI_PARAMETERS ADD CONSTRAINT AK_FK_SBI_PARUSE_1 UNIQUE (PAR_ID);
ALTER TABLE SBI_PARUSE ADD CONSTRAINT AK_FK_SBI_OBJ_PARUSE_2 UNIQUE (USE_ID);
ALTER TABLE SBI_PARUSE ADD CONSTRAINT AK_FK_SBI_PARUSE_CK_1 UNIQUE (USE_ID);
ALTER TABLE SBI_PARUSE ADD CONSTRAINT AK_FK_SBI_PARUSE_DET_1 UNIQUE (USE_ID);
ALTER TABLE SBI_SUBOBJECTS ADD CONSTRAINT AK_FK_SBI_AUDIT_3 UNIQUE (SUBOBJ_ID);
ALTER TABLE SBI_SUBOBJECTS ADD CONSTRAINT AK_FK_SBI_REMEMBER_ME_2 UNIQUE (SUBOBJ_ID);
ALTER TABLE SBI_USER_FUNC ADD CONSTRAINT AK_FK_SBI_ROLE_TYPE_USER_FUNC_2 UNIQUE (USER_FUNCT_ID);

/* CREATE FOREIGN KEYS */

ALTER TABLE SBI_DOSSIER_PRES ADD  FOREIGN KEY (BIN_ID) REFERENCES SBI_BINARY_CONTENTS (BIN_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJECT_NOTES ADD  FOREIGN KEY (BIN_ID) REFERENCES SBI_BINARY_CONTENTS (BIN_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJECT_TEMPLATES ADD  FOREIGN KEY (BIN_ID) REFERENCES SBI_BINARY_CONTENTS (BIN_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_SNAPSHOTS ADD  FOREIGN KEY (BIN_ID) REFERENCES SBI_BINARY_CONTENTS (BIN_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_SUBOBJECTS ADD  FOREIGN KEY (BIN_ID) REFERENCES SBI_BINARY_CONTENTS (BIN_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_PARUSE_CK ADD  FOREIGN KEY (CHECK_ID) REFERENCES SBI_CHECKS (CHECK_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_ENGINES ADD  FOREIGN KEY (DEFAULT_DS_ID) REFERENCES SBI_DATA_SOURCE (DS_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJECTS ADD  FOREIGN KEY (DATA_SOURCE_ID) REFERENCES SBI_DATA_SOURCE (DS_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_DIST_LIST_USER ADD  FOREIGN KEY (LIST_ID) REFERENCES SBI_DIST_LIST (DL_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_DIST_LIST_OBJECTS ADD  FOREIGN KEY (DL_ID) REFERENCES SBI_DIST_LIST (DL_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_CHECKS ADD  FOREIGN KEY (VALUE_TYPE_ID) REFERENCES SBI_DOMAINS (VALUE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_DATA_SOURCE ADD  FOREIGN KEY (DIALECT_ID) REFERENCES SBI_DOMAINS (VALUE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_ENGINES ADD  FOREIGN KEY (BIOBJ_TYPE) REFERENCES SBI_DOMAINS (VALUE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_ENGINES ADD  FOREIGN KEY (ENGINE_TYPE) REFERENCES SBI_DOMAINS (VALUE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_EXT_ROLES ADD  FOREIGN KEY (ROLE_TYPE_ID) REFERENCES SBI_DOMAINS (VALUE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_FUNC_ROLE ADD  FOREIGN KEY (STATE_ID) REFERENCES SBI_DOMAINS (VALUE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_FUNCTIONS ADD  FOREIGN KEY (FUNCT_TYPE_ID) REFERENCES SBI_DOMAINS (VALUE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_LOV ADD  FOREIGN KEY (INPUT_TYPE_ID) REFERENCES SBI_DOMAINS (VALUE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJ_STATE ADD  FOREIGN KEY (STATE_ID) REFERENCES SBI_DOMAINS (VALUE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJECTS ADD  FOREIGN KEY (STATE_CONS_ID) REFERENCES SBI_DOMAINS (VALUE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJECTS ADD  FOREIGN KEY (STATE_ID) REFERENCES SBI_DOMAINS (VALUE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJECTS ADD  FOREIGN KEY (BIOBJ_TYPE_ID) REFERENCES SBI_DOMAINS (VALUE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJECTS ADD  FOREIGN KEY (EXEC_MODE_ID) REFERENCES SBI_DOMAINS (VALUE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_PARAMETERS ADD  FOREIGN KEY (PAR_TYPE_ID) REFERENCES SBI_DOMAINS (VALUE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_ROLE_TYPE_USER_FUNC ADD  FOREIGN KEY (ROLE_TYPE_ID) REFERENCES SBI_DOMAINS (VALUE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_DOSSIER_BIN_TEMP ADD  FOREIGN KEY (PART_ID) REFERENCES SBI_DOSSIER_TEMP (PART_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_AUDIT ADD  FOREIGN KEY (ENGINE_REF) REFERENCES SBI_ENGINES (ENGINE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJECTS ADD  FOREIGN KEY (ENGINE_ID) REFERENCES SBI_ENGINES (ENGINE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_EVENTS_ROLES ADD  FOREIGN KEY (EVENT_ID) REFERENCES SBI_EVENTS_LOG (ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_EVENTS_ROLES ADD  FOREIGN KEY (ROLE_ID) REFERENCES SBI_EXT_ROLES (EXT_ROLE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_FUNC_ROLE ADD  FOREIGN KEY (ROLE_ID) REFERENCES SBI_EXT_ROLES (EXT_ROLE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_PARUSE_DET ADD  FOREIGN KEY (EXT_ROLE_ID) REFERENCES SBI_EXT_ROLES (EXT_ROLE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_FUNC_ROLE ADD  FOREIGN KEY (FUNCT_ID) REFERENCES SBI_FUNCTIONS (FUNCT_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_FUNCTIONS ADD  FOREIGN KEY (PARENT_FUNCT_ID) REFERENCES SBI_FUNCTIONS (FUNCT_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJ_FUNC ADD  FOREIGN KEY (FUNCT_ID) REFERENCES SBI_FUNCTIONS (FUNCT_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_GEO_MAP_FEATURES ADD  FOREIGN KEY (FEATURE_ID) REFERENCES SBI_GEO_FEATURES (FEATURE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_GEO_MAP_FEATURES ADD  FOREIGN KEY (MAP_ID) REFERENCES SBI_GEO_MAPS (MAP_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_PARUSE ADD  FOREIGN KEY (LOV_ID) REFERENCES SBI_LOV (LOV_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJ_PARUSE ADD  FOREIGN KEY (OBJ_PAR_ID) REFERENCES SBI_OBJ_PAR (OBJ_PAR_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJ_PARUSE ADD  FOREIGN KEY (OBJ_PAR_FATHER_ID) REFERENCES SBI_OBJ_PAR (OBJ_PAR_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_AUDIT ADD  FOREIGN KEY (DOC_REF) REFERENCES SBI_OBJECTS (BIOBJ_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_DIST_LIST_OBJECTS ADD  FOREIGN KEY (DOC_ID) REFERENCES SBI_OBJECTS (BIOBJ_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_DOSSIER_TEMP ADD  FOREIGN KEY (BIOBJ_ID) REFERENCES SBI_OBJECTS (BIOBJ_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_DOSSIER_PRES ADD  FOREIGN KEY (BIOBJ_ID) REFERENCES SBI_OBJECTS (BIOBJ_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJ_FUNC ADD  FOREIGN KEY (BIOBJ_ID) REFERENCES SBI_OBJECTS (BIOBJ_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJ_PAR ADD  FOREIGN KEY (BIOBJ_ID) REFERENCES SBI_OBJECTS (BIOBJ_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJ_STATE ADD  FOREIGN KEY (BIOBJ_ID) REFERENCES SBI_OBJECTS (BIOBJ_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJECT_NOTES ADD  FOREIGN KEY (BIOBJ_ID) REFERENCES SBI_OBJECTS (BIOBJ_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJECT_TEMPLATES ADD  FOREIGN KEY (BIOBJ_ID) REFERENCES SBI_OBJECTS (BIOBJ_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJECTS_RATING ADD  FOREIGN KEY (OBJ_ID) REFERENCES SBI_OBJECTS (BIOBJ_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_REMEMBER_ME ADD  FOREIGN KEY (BIOBJ_ID) REFERENCES SBI_OBJECTS (BIOBJ_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_SNAPSHOTS ADD  FOREIGN KEY (BIOBJ_ID) REFERENCES SBI_OBJECTS (BIOBJ_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_SUBOBJECTS ADD  FOREIGN KEY (BIOBJ_ID) REFERENCES SBI_OBJECTS (BIOBJ_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_SUBREPORTS ADD  FOREIGN KEY (MASTER_RPT_ID) REFERENCES SBI_OBJECTS (BIOBJ_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_SUBREPORTS ADD  FOREIGN KEY (SUB_RPT_ID) REFERENCES SBI_OBJECTS (BIOBJ_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_VIEWPOINTS ADD  FOREIGN KEY (BIOBJ_ID) REFERENCES SBI_OBJECTS (BIOBJ_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJ_PAR ADD  FOREIGN KEY (PAR_ID) REFERENCES SBI_PARAMETERS (PAR_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_PARUSE ADD  FOREIGN KEY (PAR_ID) REFERENCES SBI_PARAMETERS (PAR_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_OBJ_PARUSE ADD  FOREIGN KEY (USE_ID) REFERENCES SBI_PARUSE (USE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_PARUSE_CK ADD  FOREIGN KEY (USE_ID) REFERENCES SBI_PARUSE (USE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_PARUSE_DET ADD  FOREIGN KEY (USE_ID) REFERENCES SBI_PARUSE (USE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_AUDIT ADD  FOREIGN KEY (SUBOBJ_REF) REFERENCES SBI_SUBOBJECTS (SUBOBJ_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_REMEMBER_ME ADD  FOREIGN KEY (SUBOBJ_ID) REFERENCES SBI_SUBOBJECTS (SUBOBJ_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_ROLE_TYPE_USER_FUNC ADD  FOREIGN KEY (USER_FUNCT_ID) REFERENCES SBI_USER_FUNC (USER_FUNCT_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_MENU_ROLE ADD  FOREIGN KEY (MENU_ID) REFERENCES SBI_MENU (MENU_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE SBI_MENU_ROLE ADD  FOREIGN KEY (EXT_ROLE_ID) REFERENCES SBI_EXT_ROLES (EXT_ROLE_ID) ON UPDATE RESTRICT ON DELETE RESTRICT;

