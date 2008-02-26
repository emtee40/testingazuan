
CREATE TABLE SBI_ENGINES (
       ENGINE_ID            INTEGER IDENTITY(1, 1) NOT NULL,
       ENCRYPT              SMALLINT NULL,
       NAME                 VARCHAR(40) NOT NULL,
       DESCR                VARCHAR(160) NULL,
       MAIN_URL             VARCHAR(400) NULL,
       SECN_URL             VARCHAR(400) NULL,
       OBJ_UPL_DIR          VARCHAR(400) NULL,
       OBJ_USE_DIR          VARCHAR(400) NULL,
       DRIVER_NM            VARCHAR(400) NULL,
       LABEL                VARCHAR(20) NOT NULL,
       ENGINE_TYPE          INTEGER NOT NULL,
       CLASS_NM             VARCHAR(400) NULL,
       BIOBJ_TYPE           INTEGER NOT NULL,
	   DEFAULT_DS_ID		INTEGER,
       CONSTRAINT XAK1SBI_ENGINES UNIQUE (LABEL),
       CONSTRAINT PK_SBI_ENGINES PRIMARY KEY CLUSTERED(ENGINE_ID)
)ON [PRIMARY]


CREATE TABLE SBI_EXT_ROLES (
       EXT_ROLE_ID           INTEGER IDENTITY(1, 1) NOT NULL,
       NAME                 VARCHAR(100) NULL,
       DESCR                VARCHAR(160) NULL,
       CODE                 VARCHAR(20) NULL,
       ROLE_TYPE_CD         VARCHAR(20) NOT NULL,
       ROLE_TYPE_ID         INTEGER NOT NULL,       
       CONSTRAINT PK_SBI_EXT_ROLES PRIMARY KEY CLUSTERED(EXT_ROLE_ID)
)ON [PRIMARY]


CREATE TABLE SBI_FUNC_ROLE (
       ROLE_ID              INTEGER NOT NULL,
       FUNCT_ID             INTEGER NOT NULL,
       STATE_CD             VARCHAR(20) NULL,
       STATE_ID             INTEGER NOT NULL,
       CONSTRAINT PK_SBI_FUNC_ROLE PRIMARY KEY CLUSTERED(FUNCT_ID, STATE_ID, ROLE_ID)
)ON [PRIMARY]


CREATE TABLE SBI_FUNCTIONS (
       FUNCT_ID             INTEGER IDENTITY(1, 1) NOT NULL,
       FUNCT_TYPE_CD        VARCHAR(20) NOT NULL,
       PARENT_FUNCT_ID      INTEGER NULL,
       NAME                 VARCHAR(40) NULL,
       DESCR                VARCHAR(160) NULL,
       PATH                 VARCHAR(400) NULL,
       CODE                 VARCHAR(20) NOT NULL,
       PROG 				        INTEGER NOT NULL,
       FUNCT_TYPE_ID        INTEGER NOT NULL,
       CONSTRAINT XAK1SBI_FUNCTIONS UNIQUE (CODE),
       CONSTRAINT PK_SBI_FUNCTIONS PRIMARY KEY CLUSTERED(FUNCT_ID)
)ON [PRIMARY]



CREATE TABLE SBI_LOV (
       LOV_ID               INTEGER IDENTITY(1, 1) NOT NULL,
       DESCR                VARCHAR(160) NULL,
       LABEL                VARCHAR(20) NOT NULL,
       INPUT_TYPE_CD        VARCHAR(20) NOT NULL,
       DEFAULT_VAL          VARCHAR(40) NULL,
       LOV_PROVIDER         VARCHAR(4000) NULL,
       INPUT_TYPE_ID        INTEGER NOT NULL,
       PROFILE_ATTR         VARCHAR(20) NULL,
       NAME                 VARCHAR(40) NOT NULL,
       CONSTRAINT XAK1SBI_LOV UNIQUE (LABEL),
       CONSTRAINT PK_SBI_LOV PRIMARY KEY CLUSTERED(LOV_ID)
)ON [PRIMARY]


CREATE TABLE SBI_OBJ_FUNC (
       BIOBJ_ID             INTEGER NOT NULL,
       FUNCT_ID             INTEGER NOT NULL,
       PROG                 INTEGER NULL,
       CONSTRAINT PK_SBI_OBJ_FUNC PRIMARY KEY CLUSTERED(BIOBJ_ID, FUNCT_ID)
)ON [PRIMARY]


CREATE TABLE SBI_OBJ_PAR (
       OBJ_PAR_ID           INTEGER IDENTITY(1, 1) NOT NULL,
       PAR_ID               INTEGER NOT NULL,
       BIOBJ_ID             INTEGER NOT NULL,
       LABEL                VARCHAR(20) NOT NULL,
       REQ_FL               SMALLINT NULL,
       MOD_FL               SMALLINT NULL,
       VIEW_FL              SMALLINT NULL,
       MULT_FL              SMALLINT NULL,
       PROG                 INTEGER NOT NULL,
       PARURL_NM            VARCHAR(20) NULL,
       PRIORITY             INTEGER NULL,
        CONSTRAINT PK_SBI_OBJ_PAR PRIMARY KEY CLUSTERED([OBJ_PAR_ID])
)ON [PRIMARY]


CREATE TABLE SBI_OBJ_STATE (
       BIOBJ_ID             INTEGER NOT NULL,
       STATE_ID             INTEGER NOT NULL,
       END_DT               datetime NULL,
       START_DT             datetime NOT NULL,
       NOTE                 VARCHAR(300) NULL,
       CONSTRAINT PK_SBI_OBJ_STATE PRIMARY KEY (BIOBJ_ID, STATE_ID, START_DT)
)ON [PRIMARY]



CREATE TABLE SBI_OBJECTS (
       BIOBJ_ID             INTEGER IDENTITY(1, 1) NOT NULL,
       ENGINE_ID            INTEGER NOT NULL,
       DESCR                VARCHAR(160) NULL,
       LABEL                VARCHAR(20) NOT NULL,
       ENCRYPT              SMALLINT NULL,
       PATH                 VARCHAR(400) NULL,
       REL_NAME             VARCHAR(400) NULL,
       STATE_ID             INTEGER NOT NULL,
       STATE_CD             VARCHAR(20) NOT NULL,
       BIOBJ_TYPE_CD        VARCHAR(20) NOT NULL,
       BIOBJ_TYPE_ID        INTEGER NOT NULL,
       SCHED_FL             SMALLINT NULL,
       EXEC_MODE_ID         INTEGER NULL,
       STATE_CONS_ID        INTEGER NULL,
       EXEC_MODE_CD         VARCHAR(20) NULL,
       STATE_CONS_CD        VARCHAR(20) NULL,
       NAME                 VARCHAR(40) NOT NULL,
       VISIBLE              SMALLINT NOT NULL,
       UUID                 VARCHAR(40) NOT NULL,
	   DATA_SOURCE_ID		INTEGER,
       CONSTRAINT XAK1SBI_OBJECTS UNIQUE (LABEL),
       CONSTRAINT PK_SBI_OBJECTS PRIMARY KEY CLUSTERED(BIOBJ_ID)
)ON [PRIMARY]


CREATE TABLE SBI_PARAMETERS (
       PAR_ID               INTEGER IDENTITY(1, 1) NOT NULL,
       DESCR                VARCHAR(160) NULL,
       LENGTH               SMALLINT NOT NULL,
       LABEL                VARCHAR(20) NOT NULL,
       PAR_TYPE_CD          VARCHAR(20) NOT NULL,
       MASK                 VARCHAR(20) NULL,
       PAR_TYPE_ID          INTEGER NOT NULL,
       NAME                 VARCHAR(40) NOT NULL,
       FUNCTIONAL_FLAG		SMALLINT NOT NULL DEFAULT 1,
       CONSTRAINT XAK1SBI_PARAMETERS UNIQUE (LABEL),
       CONSTRAINT PK_SBI_PARAMETERS PRIMARY KEY CLUSTERED(PAR_ID)
)ON [PRIMARY]



CREATE TABLE SBI_PARUSE (
       USE_ID               INTEGER IDENTITY(1, 1) NOT NULL,
       LOV_ID               INTEGER NULL,
       LABEL                VARCHAR(20) NOT NULL,
       DESCR                VARCHAR(160) NULL,
       PAR_ID               INTEGER NOT NULL,
       NAME                 VARCHAR(40) NOT NULL,
       MAN_IN               INTEGER NOT NULL,
       SELECTION_TYPE  VARCHAR(20) DEFAULT 'LIST',
       MULTIVALUE_FLAG  INTEGER DEFAULT 0,
       CONSTRAINT XAK1SBI_PARUSE UNIQUE (PAR_ID, LABEL),
       CONSTRAINT PK_SBI_PARUSE PRIMARY KEY CLUSTERED(USE_ID)
)ON [PRIMARY]
 

CREATE TABLE SBI_PARUSE_CK (
       CHECK_ID             INTEGER NOT NULL,
       USE_ID               INTEGER NOT NULL,
       PROG                 INTEGER NULL,
       CONSTRAINT PK_SBI_PARUSE_CK PRIMARY KEY CLUSTERED(USE_ID, CHECK_ID)
)ON [PRIMARY]
 


CREATE TABLE SBI_PARUSE_DET (
       EXT_ROLE_ID          INTEGER NOT NULL,
       PROG                 INTEGER NULL,
       USE_ID               INTEGER NOT NULL,
       HIDDEN_FL            SMALLINT NULL,
       DEFAULT_VAL          VARCHAR(40) NULL,
       CONSTRAINT PK_SBI_PARUSE_DET PRIMARY KEY CLUSTERED(USE_ID, EXT_ROLE_ID)
)ON [PRIMARY]
 

CREATE TABLE SBI_SUBREPORTS (
       MASTER_RPT_ID        INTEGER NOT NULL,
       SUB_RPT_ID           INTEGER NOT NULL,
       CONSTRAINT PK_SBI_SUBREPORTS PRIMARY KEY CLUSTERED(MASTER_RPT_ID, SUB_RPT_ID)
)ON [PRIMARY]
        

CREATE TABLE SBI_OBJ_PARUSE (
	OBJ_PAR_ID          INTEGER NOT NULL,
	USE_ID              INTEGER NOT NULL,
	OBJ_PAR_FATHER_ID   INTEGER NOT NULL,
	FILTER_OPERATION    VARCHAR(20) NOT NULL,
	PROG INTEGER NOT NULL,
	FILTER_COLUMN       VARCHAR(30) NOT NULL,
	PRE_CONDITION VARCHAR(10),
  POST_CONDITION VARCHAR(10),
  LOGIC_OPERATOR VARCHAR(10),
  CONSTRAINT PK_SBI_OBJ_PARUSE PRIMARY KEY(OBJ_PAR_ID,USE_ID,OBJ_PAR_FATHER_ID,FILTER_OPERATION)
)ON [PRIMARY]
        

CREATE TABLE SBI_EVENTS (
	ID                  INTEGER IDENTITY(1, 1) NOT NULL,
  USER_EVENT          VARCHAR(40) NOT NULL,
  CONSTRAINT PK_SBI_EVENTS PRIMARY KEY(ID)
)ON [PRIMARY]
  

CREATE TABLE SBI_EVENTS_LOG (
	ID                  INTEGER IDENTITY(1, 1) NOT NULL,
	USER_EVENT          VARCHAR(40) NOT NULL,
	EVENT_DATE          DATETIME  NOT NULL,
	DESCR               VARCHAR(1000) NOT NULL,
	PARAMS              VARCHAR(1000),
	HANDLER 	          VARCHAR(400) NOT NULL DEFAULT 'it.eng.spabi.events.handlers.DefaultEventPresentationHandler',
  CONSTRAINT PK_SBI_EVENTS_LOG  PRIMARY KEY(ID)
)ON [PRIMARY]
        

CREATE TABLE SBI_EVENTS_ROLES (
       EVENT_ID            INTEGER NOT NULL,
       ROLE_ID             INTEGER NOT NULL,
       CONSTRAINT PK_SBI_EVENTS_ROLES PRIMARY KEY (EVENT_ID, ROLE_ID)
)ON [PRIMARY]
        

CREATE TABLE SBI_AUDIT ( 
		ID 				  	  INTEGER IDENTITY(1, 1) NOT NULL,
		USERNAME 			  VARCHAR(40) NOT NULL,
		USERGROUP 			VARCHAR(100),
		DOC_REF 			  INTEGER,
		DOC_ID 				  INTEGER,
		DOC_LABEL 		  VARCHAR(20) NOT NULL,
		DOC_NAME 			  VARCHAR(40) NOT NULL,
		DOC_TYPE 			  VARCHAR(20) NOT NULL,
		DOC_STATE 		  VARCHAR(20) NOT NULL,
		DOC_PARAMETERS 	VARCHAR(400),
		SUBOBJ_REF			INTEGER,
		SUBOBJ_ID			INTEGER,
		SUBOBJ_NAME         VARCHAR(50),
		SUBOBJ_OWNER 	    VARCHAR(50),
		SUBOBJ_ISPUBLIC 	SMALLINT NULL,
		ENGINE_REF 			INTEGER,
		ENGINE_ID 			INTEGER,
		ENGINE_LABEL 		VARCHAR(20) NOT NULL,
		ENGINE_NAME 		VARCHAR(40) NOT NULL,
		ENGINE_TYPE 		VARCHAR(20) NOT NULL,
		ENGINE_URL 			VARCHAR(400),
		ENGINE_DRIVER 	VARCHAR(400),
		ENGINE_CLASS 		VARCHAR(400),
		REQUEST_TIME 		datetime NOT NULL,
		EXECUTION_START datetime,
		EXECUTION_END 	datetime,
		EXECUTION_TIME	INTEGER,
		EXECUTION_STATE VARCHAR(20),
		ERROR				    SMALLINT,
		ERROR_MESSAGE 	VARCHAR(400),
		ERROR_CODE 			VARCHAR(20),
		EXECUTION_MODALITY 	VARCHAR(20),
    CONSTRAINT PK_SBI_AUDIT 	PRIMARY KEY (ID)
)ON [PRIMARY]
  	


CREATE TABLE SBI_GEO_MAPS (
       MAP_ID               INTEGER IDENTITY(1, 1) NOT NULL,
       NAME                 VARCHAR(40) NOT NULL,
       DESCR                VARCHAR(160) NULL,
       URL					        VARCHAR(400) NOT NULL,
       FORMAT 				      VARCHAR(40) NULL,   
       CONSTRAINT XAK1SBI_GEO_MAPS UNIQUE (NAME),
       CONSTRAINT PK_SBI_GEO_MAPS PRIMARY KEY CLUSTERED(MAP_ID)
)ON [PRIMARY]
 

CREATE TABLE SBI_GEO_FEATURES (
       FEATURE_ID           INTEGER IDENTITY(1, 1) NOT NULL,  
       NAME                 VARCHAR(40) NOT NULL,
       DESCR                VARCHAR(160) NULL,
       TYPE					        VARCHAR(40)  NULL,
       CONSTRAINT XAK1SBI_GEO_FEATURES UNIQUE (NAME),
       CONSTRAINT PK_SBI_GEO_FEATURES PRIMARY KEY CLUSTERED(FEATURE_ID)
)ON [PRIMARY]
  

CREATE TABLE SBI_GEO_MAP_FEATURES (
       MAP_ID             INTEGER NOT NULL,
       FEATURE_ID         INTEGER NOT NULL,
       SVG_GROUP          VARCHAR(40),
       VISIBLE_FLAG		    VARCHAR(1),
       CONSTRAINT PK_SBI_GEO_MAP_FEATURES PRIMARY KEY (MAP_ID, FEATURE_ID)
)ON [PRIMARY]

CREATE TABLE SBI_VIEWPOINTS (
		VP_ID 				INTEGER IDENTITY(1, 1) NOT NULL,      
		BIOBJ_ID 			INTEGER NOT NULL, 
		VP_NAME 			VARCHAR(40) NOT NULL,
	    VP_OWNER 			VARCHAR(40),
		VP_DESC 			VARCHAR(160),
		VP_SCOPE 			VARCHAR (20) NOT NULL, 
		VP_VALUE_PARAMS 	VARCHAR(400), 
		VP_CREATION_DATE 	datetime NOT NULL,
       CONSTRAINT XAK1SBI_VIEWPOINTS UNIQUE (VP_NAME),
       CONSTRAINT XPKSBI_VIEWPOINTS  PRIMARY KEY (VP_ID)
)ON [PRIMARY]


CREATE TABLE SBI_DATA_SOURCE (
		DS_ID 				INTEGER IDENTITY(1, 1) NOT NULL,
		DESCR 				VARCHAR(160), 
		LABEL	 			VARCHAR(50) NOT NULL,
    	JNDI	 			VARCHAR(50),
		URL_CONNECTION		VARCHAR(50),
		USERNAME 			VARCHAR(50), 
		PWD				 	VARCHAR(50), 
		DRIVER			 	VARCHAR(160),
	    DIALECT_ID			INTEGER NOT NULL,
		CONSTRAINT XAK1SBI_DATA_SOURCE UNIQUE (LABEL),
        CONSTRAINT XPKSBI_DATA_SOURCE  PRIMARY KEY (DS_ID)
)ON [PRIMARY]

CREATE TABLE SBI_USER_FUNCTIONALITY (
		USER_FUNCT_ID 		INTEGER IDENTITY(1, 1)  NOT NULL,
		NAME 	            VARCHAR(50),  
    	DESCRIPTION 	    VARCHAR(100),      
		CONSTRAINT XAK1SBI_USER_FUNCTIONALITY UNIQUE (USER_FUNCT_ID),
	    CONSTRAINT XPKSBI_USER_FUNCTIONALITY PRIMARY KEY (USER_FUNCT_ID)
)ON [PRIMARY]


CREATE TABLE SBI_ROLE_TYPE_USER_FUNCTIONALITY (
		ROLE_TYPE_ID 		INTEGER NOT NULL,
		USER_FUNCT_ID 	    INTEGER NOT NULL,     
		CONSTRAINT XAK1SBI_ROLE_TYPE_USER_FUNCTIONALITY UNIQUE (ROLE_TYPE_ID,USER_FUNCT_ID),
		CONSTRAINT XPKSBI_ROLE_TYPE_USER_FUNCTIONALITY 	PRIMARY KEY (ROLE_TYPE_ID,USER_FUNCT_ID)
)ON [PRIMARY]

CREATE TABLE SBI_DOSSIER_PRESENTATIONS (
        PRESENTATION_ID 			INTEGER IDENTITY(1, 1) NOT NULL,
        WORKFLOW_PROCESS_ID 		BIGINT NOT NULL,
        BIOBJ_ID 					INTEGER NOT NULL,
        BIN_ID 						INTEGER NOT NULL,
        NAME 						VARCHAR(40) NOT NULL,
        PROG 						INTEGER NULL,
        CREATION_DATE 				TIMESTAMP,
        APPROVED 					SMALLINT NULL,
        CONSTRAINT PK_SBI_DOSSIER_PRESENTATIONS PRIMARY KEY CLUSTERED(PRESENTATION_ID)
)ON [PRIMARY]

CREATE TABLE SBI_DOSSIER_PARTS_TEMP (
        PART_ID 					INTEGER IDENTITY(1, 1) NOT NULL,
        WORKFLOW_PROCESS_ID 		BIGINT NOT NULL,
        BIOBJ_ID 					INTEGER NOT NULL,
        PAGE_ID 					INTEGER NOT NULL,
        CONSTRAINT PK_SBI_DOSSIER_PARTS_TEMP PRIMARY KEY CLUSTERED(PART_ID)
)ON [PRIMARY]

CREATE TABLE SBI_DOSSIER_BINARY_CONTENTS_TEMP (
        BIN_ID 						INTEGER IDENTITY(1, 1) NOT NULL,
        PART_ID 					INTEGER NOT NULL,
        NAME 						VARCHAR(20),
        BIN_CONTENT 				image NOT NULL,
        TYPE 						VARCHAR(20) NOT NULL,
        CREATION_DATE 				TIMESTAMP,
        CONSTRAINT PK_SBI_DOSSIER_BINARY_CONTENTS_TEMP PRIMARY KEY CLUSTERED(BIN_ID)
)ON [PRIMARY]

CREATE TABLE SBI_REMEMBER_ME (
       ID               INTEGER IDENTITY(1, 1) NOT NULL,
       USERNAME			VARCHAR(40) NOT NULL,
       BIOBJ_ID         INTEGER NOT NULL,
       SUBOBJ_ID        INTEGER NULL,
       PARAMETERS       VARCHAR(400),
       CONSTRAINT PK_SBI_REMEMBER_ME PRIMARY KEY CLUSTERED(ID)
)ON [PRIMARY]