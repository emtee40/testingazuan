CREATE SEQUENCE SBI_CHECKS_SEQ 
INCREMENT BY 1 
START WITH 1 
NOMAXVALUE 
NOMINVALUE 
NOCACHE  
NOCYCLE
NOORDER
;
CREATE SEQUENCE SBI_DOMAINS_SEQ 
INCREMENT BY 1 
START WITH 1 
NOMAXVALUE 
NOMINVALUE 
NOCACHE  
NOCYCLE
NOORDER
;
CREATE SEQUENCE SBI_ENGINES_SEQ 
INCREMENT BY 1 
START WITH 1 
NOMAXVALUE 
NOMINVALUE 
NOCACHE  
NOCYCLE
NOORDER
;
CREATE SEQUENCE SBI_EXT_ROLES_SEQ 
INCREMENT BY 1 
START WITH 1 
NOMAXVALUE 
NOMINVALUE 
NOCACHE  
NOCYCLE
NOORDER
;
CREATE SEQUENCE SBI_FUNCTIONS_SEQ 
INCREMENT BY 1 
START WITH 1 
NOMAXVALUE 
NOMINVALUE 
NOCACHE  
NOCYCLE
NOORDER
;
CREATE SEQUENCE SBI_LOV_SEQ 
INCREMENT BY 1 
START WITH 1 
NOMAXVALUE 
NOMINVALUE 
NOCACHE  
NOCYCLE
NOORDER
;
CREATE SEQUENCE SBI_OBJECTS_SEQ 
INCREMENT BY 1 
START WITH 1 
NOMAXVALUE 
NOMINVALUE 
NOCACHE  
NOCYCLE
NOORDER
;
CREATE SEQUENCE SBI_PARAMETERS_SEQ 
INCREMENT BY 1 
START WITH 1 
NOMAXVALUE 
NOMINVALUE 
NOCACHE  
NOCYCLE
NOORDER
;
CREATE SEQUENCE SBI_PARUSE_SEQ 
INCREMENT BY 1 
START WITH 1 
NOMAXVALUE 
NOMINVALUE 
NOCACHE  
NOCYCLE
NOORDER
;
CREATE SEQUENCE SBI_OBJ_PAR_SEQ 
INCREMENT BY 1 
START WITH 1 
NOMAXVALUE 
NOMINVALUE 
NOCACHE  
NOCYCLE
NOORDER
;
CREATE SEQUENCE SBI_EVENTS_LOG_SEQ 
INCREMENT BY 1 
START WITH 1 
NOMAXVALUE 
NOMINVALUE 
NOCACHE  
NOCYCLE
NOORDER
;

CREATE SEQUENCE SBI_AUDIT_SEQ 
INCREMENT BY 1 
START WITH 1 
NOMAXVALUE 
NOMINVALUE 
NOCACHE  
NOCYCLE
NOORDER
;

CREATE TABLE SBI_CHECKS (
       CHECK_ID             INTEGER NOT NULL,
       DESCR                VARCHAR2(160) NULL,
       LABEL                VARCHAR2(20) NOT NULL,
       VALUE_TYPE_CD        VARCHAR2(20) NOT NULL,
       VALUE_TYPE_ID        INTEGER NOT NULL,
       VALUE_1              VARCHAR2(400) NULL,
       VALUE_2              VARCHAR2(400) NULL,
       NAME                 VARCHAR2(40) NOT NULL,
       CONSTRAINT XPKSBI_CHECKS 
              PRIMARY KEY (CHECK_ID)
);

CREATE UNIQUE INDEX XAK1SBI_CHECKS ON SBI_CHECKS
(
       LABEL                          ASC
);


CREATE TABLE SBI_DOMAINS (
       VALUE_ID             INTEGER NOT NULL,
       VALUE_CD             VARCHAR2(20) NULL,
       VALUE_NM             VARCHAR2(40) NULL,
       DOMAIN_CD            VARCHAR2(20) NULL,
       DOMAIN_NM            VARCHAR2(40) NULL,
       VALUE_DS             VARCHAR2(160) NULL,
       CONSTRAINT XPKSBI_DOMAINS 
              PRIMARY KEY (VALUE_ID)
);

CREATE UNIQUE INDEX XAK1SBI_DOMAINS ON SBI_DOMAINS
(
       VALUE_CD                       ASC,
       DOMAIN_CD                      ASC
);


CREATE TABLE SBI_ENGINES (
       ENGINE_ID            INTEGER NOT NULL,
       ENCRYPT              SMALLINT NULL,
       NAME                 VARCHAR2(40) NOT NULL,
       DESCR                VARCHAR2(160) NULL,
       MAIN_URL             VARCHAR2(400) NULL,
       SECN_URL             VARCHAR2(400) NULL,
       OBJ_UPL_DIR          VARCHAR2(400) NULL,
       OBJ_USE_DIR          VARCHAR2(400) NULL,
       DRIVER_NM            VARCHAR2(400) NULL,
       LABEL                VARCHAR2(20) NOT NULL,
       ENGINE_TYPE          INTEGER NOT NULL,
       CLASS_NM             VARCHAR2(400) NULL,
       BIOBJ_TYPE           INTEGER NOT NULL,
       CONSTRAINT XPKSBI_ENGINES 
              PRIMARY KEY (ENGINE_ID)
);


CREATE UNIQUE INDEX XAK1SBI_ENGINES ON SBI_ENGINES
(
       LABEL                          
);


CREATE TABLE SBI_EXT_ROLES (
       EXT_ROLE_ID          INTEGER NOT NULL,
       NAME                 VARCHAR2(100) NULL,
       DESCR                VARCHAR2(160) NULL,
       CODE                 VARCHAR2(20) NULL,
       ROLE_TYPE_CD         VARCHAR2(20) NOT NULL,
       ROLE_TYPE_ID         INTEGER NOT NULL,
       CONSTRAINT XPKSBI_EXT_ROLES 
              PRIMARY KEY (EXT_ROLE_ID)
);

CREATE UNIQUE INDEX XAK1SBI_EXT_ROLES ON SBI_EXT_ROLES
(
       CODE                           ASC
);


CREATE TABLE SBI_FUNC_ROLE (
       ROLE_ID              INTEGER NOT NULL,
       FUNCT_ID             INTEGER NOT NULL,
       STATE_CD             VARCHAR2(20) NULL,
       STATE_ID             INTEGER NOT NULL,
       CONSTRAINT XPKSBI_FUNC_ROLE 
              PRIMARY KEY (FUNCT_ID, STATE_ID, ROLE_ID)
);


CREATE TABLE SBI_FUNCTIONS (
       FUNCT_ID             INTEGER NOT NULL,
       FUNCT_TYPE_CD        VARCHAR2(20) NOT NULL,
       PARENT_FUNCT_ID      INTEGER NULL,
       NAME                 VARCHAR2(40) NULL,
       DESCR                VARCHAR2(160) NULL,
       PATH                 VARCHAR2(400) NULL,
       CODE                 VARCHAR2(20) NOT NULL,
       PROG					INTEGER NOT NULL,
       FUNCT_TYPE_ID        INTEGER NOT NULL,
       CONSTRAINT XPKSBI_FUNCTIONS 
              PRIMARY KEY (FUNCT_ID)
);

CREATE UNIQUE INDEX XAK1SBI_FUNCTIONS ON SBI_FUNCTIONS
(
       CODE                           ASC
);


CREATE TABLE SBI_LOV (
       LOV_ID               INTEGER NOT NULL,
       DESCR                VARCHAR2(160) NULL,
       LABEL                VARCHAR2(20) NOT NULL,
       INPUT_TYPE_CD        VARCHAR2(20) NOT NULL,
       DEFAULT_VAL          VARCHAR2(40) NULL,
       LOV_PROVIDER         VARCHAR2(4000) NULL,
       INPUT_TYPE_ID        INTEGER NOT NULL,
       PROFILE_ATTR         VARCHAR2(20) NULL,
       NAME                 VARCHAR2(40) NOT NULL,
       CONSTRAINT XPKSBI_LOV 
              PRIMARY KEY (LOV_ID)
);

CREATE UNIQUE INDEX XAK1SBI_LOV ON SBI_LOV
(
       LABEL                          ASC
);


CREATE TABLE SBI_OBJ_FUNC (
       BIOBJ_ID             INTEGER NOT NULL,
       FUNCT_ID             INTEGER NOT NULL,
       PROG                 INTEGER NULL,
       CONSTRAINT XPKSBI_OBJ_FUNC 
              PRIMARY KEY (BIOBJ_ID, FUNCT_ID)
);


CREATE TABLE SBI_OBJ_PAR (
       OBJ_PAR_ID           INTEGER NOT NULL,
       PAR_ID               INTEGER NOT NULL,
       BIOBJ_ID             INTEGER NOT NULL,
       LABEL                VARCHAR2(20) NOT NULL,
       REQ_FL               SMALLINT NULL,
       MOD_FL               SMALLINT NULL,
       VIEW_FL              SMALLINT NULL,
       MULT_FL              SMALLINT NULL,
       PROG                 INTEGER NOT NULL,
       PARURL_NM            VARCHAR2(20) NULL,
       PRIORITY             INTEGER NULL,
       CONSTRAINT XPKSBI_OBJ_PAR 
              PRIMARY KEY (OBJ_PAR_ID)
);


CREATE TABLE SBI_OBJ_STATE (
       BIOBJ_ID             INTEGER NOT NULL,
       STATE_ID             INTEGER NOT NULL,
       END_DT               DATE NULL,
       START_DT             DATE NOT NULL,
       NOTE                 VARCHAR(300) NULL,
       CONSTRAINT XPKSBI_OBJ_STATE 
              PRIMARY KEY (BIOBJ_ID, STATE_ID, START_DT)
);


CREATE TABLE SBI_OBJECTS (
       BIOBJ_ID             INTEGER NOT NULL,
       ENGINE_ID            INTEGER NOT NULL,
       DESCR                VARCHAR2(160) NULL,
       LABEL                VARCHAR2(20) NOT NULL,
       ENCRYPT              SMALLINT NULL,
       PATH                 VARCHAR2(400) NULL,
       REL_NAME             VARCHAR2(400) NULL,
       STATE_ID             INTEGER NOT NULL,
       STATE_CD             VARCHAR2(20) NOT NULL,
       BIOBJ_TYPE_CD        VARCHAR2(20) NOT NULL,
       BIOBJ_TYPE_ID        INTEGER NOT NULL,
       SCHED_FL             SMALLINT NULL,
       EXEC_MODE_ID         INTEGER NULL,
       STATE_CONS_ID        INTEGER NULL,
       EXEC_MODE_CD         VARCHAR2(20) NULL,
       STATE_CONS_CD        VARCHAR2(20) NULL,
       NAME                 VARCHAR2(40) NOT NULL,
       VISIBLE              SMALLINT NOT NULL,
       UUID                 VARCHAR2(40) NOT NULL,
       CONSTRAINT XPKSBI_OBJECTS 
              PRIMARY KEY (BIOBJ_ID)
);

CREATE UNIQUE INDEX XAK1SBI_OBJECTS ON SBI_OBJECTS
(
       LABEL                          ASC
);


CREATE TABLE SBI_PARAMETERS (
       PAR_ID               INTEGER NOT NULL,
       DESCR                VARCHAR2(160) NULL,
       LENGTH               SMALLINT NOT NULL,
       LABEL                VARCHAR2(20) NOT NULL,
       PAR_TYPE_CD          VARCHAR2(20) NOT NULL,
       MASK                 VARCHAR2(20) NULL,
       PAR_TYPE_ID          INTEGER NOT NULL,
       NAME                 VARCHAR2(40) NOT NULL,
       FUNCTIONAL_FLAG		SMALLINT DEFAULT 1 NOT NULL,
       CONSTRAINT XPKSBI_PARAMETERS 
              PRIMARY KEY (PAR_ID)
);

CREATE UNIQUE INDEX XAK1SBI_PARAMETERS ON SBI_PARAMETERS
(
       LABEL                          ASC
);


CREATE TABLE SBI_PARUSE (
       USE_ID               INTEGER NOT NULL,
       LOV_ID               INTEGER NULL,
       LABEL                VARCHAR2(20) NOT NULL,
       DESCR                VARCHAR2(160) NULL,
       PAR_ID               INTEGER NOT NULL,
       NAME                 VARCHAR2(40) NOT NULL,
       MAN_IN               INTEGER NOT NULL,
       SELECTION_TYPE  VARCHAR(20) DEFAULT 'LIST',
       MULTIVALUE_FLAG  INTEGER DEFAULT 0,
       CONSTRAINT XPKSBI_PARUSE 
              PRIMARY KEY (USE_ID)
);

CREATE UNIQUE INDEX XAK1SBI_PARUSE ON SBI_PARUSE
(
       PAR_ID                         ASC,
       LABEL                          ASC
);


CREATE TABLE SBI_PARUSE_CK (
       CHECK_ID             INTEGER NOT NULL,
       USE_ID               INTEGER NOT NULL,
       PROG                 INTEGER NULL,
       CONSTRAINT XPKSBI_PARUSE_CK 
              PRIMARY KEY (USE_ID, CHECK_ID)
);


CREATE TABLE SBI_PARUSE_DET (
       EXT_ROLE_ID          INTEGER NOT NULL,
       PROG                 INTEGER NULL,
       USE_ID               INTEGER NOT NULL,
       HIDDEN_FL            SMALLINT NULL,
       DEFAULT_VAL          VARCHAR2(40) NULL,
       CONSTRAINT XPKSBI_PARUSE_DET 
              PRIMARY KEY (USE_ID, EXT_ROLE_ID)
);


CREATE TABLE SBI_SUBREPORTS (
       MASTER_RPT_ID        INTEGER NOT NULL ,
       SUB_RPT_ID           INTEGER NOT NULL,
       CONSTRAINT XPKSBI_SUBREPORTS 
              PRIMARY KEY (MASTER_RPT_ID, SUB_RPT_ID)
);

CREATE TABLE SBI_OBJ_PARUSE (
       OBJ_PAR_ID           INTEGER NOT NULL,
       USE_ID               INTEGER NOT NULL,
       OBJ_PAR_FATHER_ID    INTEGER NOT NULL,
       FILTER_OPERATION     VARCHAR(10) NOT NULL,
       PROG 				INTEGER NOT NULL,
       FILTER_COLUMN        VARCHAR(30) NOT NULL,
       PRE_CONDITION 		VARCHAR(10),
       POST_CONDITION 		VARCHAR(10),
       LOGIC_OPERATOR 		VARCHAR(10),
       CONSTRAINT XPKSBI_OBJ_PARUSE 
              PRIMARY KEY (OBJ_PAR_ID,USE_ID,OBJ_PAR_FATHER_ID,FILTER_OPERATION)
);

CREATE TABLE SBI_EVENTS (
       ID                   INTEGER NOT NULL,
       USER_EVENT                 VARCHAR2(40) NOT NULL,
       CONSTRAINT XPKSBI_EVENTS 
              PRIMARY KEY (ID)
);

CREATE TABLE SBI_EVENTS_LOG (
       ID                   INTEGER NOT NULL,
       USER_EVENT                 VARCHAR2(40) NOT NULL,
       EVENT_DATE           TIMESTAMP DEFAULT SYSTIMESTAMP NOT NULL,
       DESCR                 VARCHAR2(1000) NOT NULL,
       PARAMS               VARCHAR2(1000) NOT NULL,
       HANDLER 	VARCHAR2(1000) DEFAULT 'it.eng.spagobi.events.handlers.DefaultEventPresentationHandler' NOT NULL,
       CONSTRAINT XPKSBI_EVENTS_LOG 
              PRIMARY KEY (ID)
);

CREATE TABLE SBI_EVENTS_ROLES (
       EVENT_ID            INTEGER NOT NULL,
       ROLE_ID             INTEGER NOT NULL,
       CONSTRAINT XPKSBI_EVENTS_ROLES 
              PRIMARY KEY (EVENT_ID, ROLE_ID)
);


CREATE TABLE SBI_AUDIT ( 
		ID 					INTEGER NOT NULL,
		USERNAME 			VARCHAR(20) NOT NULL,
		USERGROUP 			VARCHAR(40),
		DOC_REF 			INTEGER,
		DOC_ID 				INTEGER,
		DOC_LABEL 			VARCHAR(20) NOT NULL,
		DOC_NAME 			VARCHAR(40) NOT NULL,
		DOC_TYPE 			VARCHAR(20) NOT NULL,
		DOC_STATE 			VARCHAR(20) NOT NULL,
		DOC_PARAMETERS 		VARCHAR(400),
		ENGINE_REF 			INTEGER,
		ENGINE_ID 			INTEGER,
		ENGINE_LABEL 		VARCHAR(20) NOT NULL,
		ENGINE_NAME 		VARCHAR(40) NOT NULL,
		ENGINE_TYPE 		VARCHAR(20) NOT NULL,
		ENGINE_URL 			VARCHAR(400),
		ENGINE_DRIVER 		VARCHAR(400),
		ENGINE_CLASS 		VARCHAR(400),
		REQUEST_TIME 		TIMESTAMP NOT NULL,
		EXECUTION_START 	TIMESTAMP,
		EXECUTION_END 		TIMESTAMP,
		EXECUTION_STATE 	VARCHAR(20),
		ERROR_MESSAGE 		VARCHAR(400),
		ERROR_CODE 			VARCHAR(20),
		EXECUTION_MODALITY 	VARCHAR(20),
		CONSTRAINT XPKSBI_AUDIT 
              PRIMARY KEY (ID)
);

ALTER TABLE SBI_AUDIT
       ADD ( CONSTRAINT FK_sbi_audit_1 
              FOREIGN KEY (DOC_REF)
                             REFERENCES SBI_OBJECTS ON DELETE SET NULL );
                             
ALTER TABLE SBI_AUDIT
       ADD ( CONSTRAINT FK_sbi_audit_2 
              FOREIGN KEY (ENGINE_REF)
                             REFERENCES SBI_ENGINES ON DELETE SET NULL ) ;

ALTER TABLE SBI_CHECKS
       ADD  ( CONSTRAINT FK_sbi_checks_1
              FOREIGN KEY (VALUE_TYPE_ID)
                             REFERENCES SBI_DOMAINS ) ;


ALTER TABLE SBI_EXT_ROLES
       ADD  ( CONSTRAINT FK_sbi_ext_roles_1
              FOREIGN KEY (ROLE_TYPE_ID)
                             REFERENCES SBI_DOMAINS ) ;


ALTER TABLE SBI_FUNC_ROLE
       ADD  ( CONSTRAINT FK_sbi_func_role_2
              FOREIGN KEY (STATE_ID)
                             REFERENCES SBI_DOMAINS ) ;


ALTER TABLE SBI_FUNC_ROLE
       ADD  ( CONSTRAINT FK_sbi_func_role_3
              FOREIGN KEY (FUNCT_ID)
                             REFERENCES SBI_FUNCTIONS ) ;


ALTER TABLE SBI_FUNC_ROLE
       ADD  ( CONSTRAINT FK_sbi_func_role_1
              FOREIGN KEY (ROLE_ID)
                             REFERENCES SBI_EXT_ROLES ) ;


ALTER TABLE SBI_FUNCTIONS
       ADD  ( CONSTRAINT FK_sbi_functions_2
              FOREIGN KEY (PARENT_FUNCT_ID)
                             REFERENCES SBI_FUNCTIONS ) ;


ALTER TABLE SBI_FUNCTIONS
       ADD  ( CONSTRAINT FK_sbi_functions_1
              FOREIGN KEY (FUNCT_TYPE_ID)
                             REFERENCES SBI_DOMAINS ) ;


ALTER TABLE SBI_LOV
       ADD  ( CONSTRAINT FK_sbi_lov_1
              FOREIGN KEY (INPUT_TYPE_ID)
                             REFERENCES SBI_DOMAINS ) ;


ALTER TABLE SBI_OBJ_FUNC
       ADD  ( CONSTRAINT FK_sbi_obj_func_1
              FOREIGN KEY (FUNCT_ID)
                             REFERENCES SBI_FUNCTIONS ) ;


ALTER TABLE SBI_OBJ_FUNC
       ADD  ( CONSTRAINT FK_sbi_obj_func_2
              FOREIGN KEY (BIOBJ_ID)
                             REFERENCES SBI_OBJECTS ) ;


ALTER TABLE SBI_OBJ_PAR
       ADD  ( CONSTRAINT FK_sbi_obj_par_1
              FOREIGN KEY (BIOBJ_ID)
                             REFERENCES SBI_OBJECTS ) ;


ALTER TABLE SBI_OBJ_PAR
       ADD  ( CONSTRAINT FK_sbi_obj_par_2
              FOREIGN KEY (PAR_ID)
                             REFERENCES SBI_PARAMETERS ) ;


ALTER TABLE SBI_OBJ_STATE
       ADD  ( CONSTRAINT FK_sbi_obj_state_2
              FOREIGN KEY (STATE_ID)
                             REFERENCES SBI_DOMAINS ) ;


ALTER TABLE SBI_OBJ_STATE
       ADD  ( CONSTRAINT FK_sbi_obj_state_1
              FOREIGN KEY (BIOBJ_ID)
                             REFERENCES SBI_OBJECTS ) ;


ALTER TABLE SBI_OBJECTS
       ADD  ( CONSTRAINT FK_sbi_objects_1
              FOREIGN KEY (STATE_CONS_ID)
                             REFERENCES SBI_DOMAINS ) ;


ALTER TABLE SBI_OBJECTS
       ADD  ( CONSTRAINT FK_sbi_objects_4
              FOREIGN KEY (EXEC_MODE_ID)
                             REFERENCES SBI_DOMAINS ) ;


ALTER TABLE SBI_OBJECTS
       ADD  ( CONSTRAINT FK_sbi_objects_3
              FOREIGN KEY (BIOBJ_TYPE_ID)
                             REFERENCES SBI_DOMAINS ) ;


ALTER TABLE SBI_OBJECTS
       ADD  ( CONSTRAINT FK_sbi_objects_2
              FOREIGN KEY (STATE_ID)
                             REFERENCES SBI_DOMAINS ) ;


ALTER TABLE SBI_OBJECTS
       ADD  ( CONSTRAINT FK_sbi_objects_5
              FOREIGN KEY (ENGINE_ID)
                             REFERENCES SBI_ENGINES ) ;


ALTER TABLE SBI_PARAMETERS
       ADD  ( CONSTRAINT FK_sbi_parameters_1
              FOREIGN KEY (PAR_TYPE_ID)
                             REFERENCES SBI_DOMAINS ) ;


ALTER TABLE SBI_PARUSE
       ADD  ( CONSTRAINT FK_sbi_paruse_2
              FOREIGN KEY (LOV_ID)
                             REFERENCES SBI_LOV ) ;


ALTER TABLE SBI_PARUSE
       ADD  ( CONSTRAINT FK_sbi_paruse_1
              FOREIGN KEY (PAR_ID)
                             REFERENCES SBI_PARAMETERS ) ;


ALTER TABLE SBI_PARUSE_CK
       ADD  ( CONSTRAINT FK_sbi_paruse_ck_2
              FOREIGN KEY (CHECK_ID)
                             REFERENCES SBI_CHECKS ) ;


ALTER TABLE SBI_PARUSE_CK
       ADD  ( CONSTRAINT FK_sbi_paruse_ck_1
              FOREIGN KEY (USE_ID)
                             REFERENCES SBI_PARUSE ) ;


ALTER TABLE SBI_PARUSE_DET
       ADD  ( CONSTRAINT FK_sbi_paruse_det_1
              FOREIGN KEY (USE_ID)
                             REFERENCES SBI_PARUSE ) ;


ALTER TABLE SBI_PARUSE_DET
       ADD  ( CONSTRAINT FK_sbi_paruse_det_2
              FOREIGN KEY (EXT_ROLE_ID)
                             REFERENCES SBI_EXT_ROLES ) ;


ALTER TABLE SBI_OBJ_PARUSE
       ADD  ( CONSTRAINT FK_sbi_obj_paruse_1
              FOREIGN KEY (OBJ_PAR_ID)
                             REFERENCES SBI_OBJ_PAR ) ;       


ALTER TABLE SBI_OBJ_PARUSE
       ADD  ( CONSTRAINT FK_sbi_obj_paruse_2
              FOREIGN KEY (USE_ID)
                             REFERENCES SBI_PARUSE ) ; 


ALTER TABLE SBI_OBJ_PARUSE
       ADD  ( CONSTRAINT FK_sbi_obj_paruse_3
              FOREIGN KEY (OBJ_PAR_FATHER_ID)
                             REFERENCES SBI_OBJ_PAR ) ;    


ALTER TABLE SBI_ENGINES
       ADD  ( CONSTRAINT FK_sbi_engines_1
              FOREIGN KEY (BIOBJ_TYPE)
                             REFERENCES SBI_DOMAINS ) ;  

ALTER TABLE SBI_ENGINES
       ADD  ( CONSTRAINT FK_sbi_engines_2
              FOREIGN KEY (ENGINE_TYPE)
                             REFERENCES SBI_DOMAINS ) ; 

ALTER TABLE SBI_EVENTS_ROLES
       ADD  ( CONSTRAINT FK_sbi_events_roles_1
              FOREIGN KEY (ROLE_ID)
                             REFERENCES SBI_EXT_ROLES ) ; 

ALTER TABLE SBI_EVENTS_ROLES
       ADD  ( CONSTRAINT FK_sbi_events_roles_2
              FOREIGN KEY (EVENT_ID)
                             REFERENCES SBI_EVENTS_LOG ) ; 

ALTER TABLE SBI_SUBREPORTS
       ADD  ( CONSTRAINT FK_sbi_subreports_1
              FOREIGN KEY (MASTER_RPT_ID)
                             REFERENCES SBI_OBJECTS ) ;

ALTER TABLE SBI_SUBREPORTS
       ADD  ( CONSTRAINT FK_sbi_subreports_2
              FOREIGN KEY (SUB_RPT_ID)
                             REFERENCES SBI_OBJECTS ) ;

create trigger TRG_SBI_CHECKS
  BEFORE INSERT
  on SBI_CHECKS
  REFERENCING OLD AS old NEW AS new
  for each row
  declare nuovo_id number;
begin
IF :new.CHECK_ID IS NULL THEN
     select SBI_CHECKS_SEQ.nextval into nuovo_id from dual;
     :new.CHECK_ID:=nuovo_id;
END IF;
end;
/





create trigger TRG_SBI_DOMAINS
  BEFORE INSERT
  on SBI_DOMAINS
  REFERENCING OLD AS old NEW AS new
  for each row
  declare nuovo_id number;
begin
IF :new.VALUE_ID IS NULL THEN
     select SBI_DOMAINS_SEQ.nextval into nuovo_id from dual;
     :new.VALUE_ID:=nuovo_id;
END IF;
end;
/




create trigger TRG_SBI_ENGINES
  BEFORE INSERT
  on SBI_ENGINES
  REFERENCING OLD AS old NEW AS new
  for each row
  declare nuovo_id number;
begin
IF :new.ENGINE_ID IS NULL THEN
     select SBI_ENGINES_SEQ.nextval into nuovo_id from dual;
     :new.ENGINE_ID:=nuovo_id;
END IF;
end;
/



create trigger TRG_SBI_EXT_ROLES
  BEFORE INSERT
  on SBI_EXT_ROLES
  REFERENCING OLD AS old NEW AS new
  for each row
  declare nuovo_id number;
begin
IF :new.EXT_ROLE_ID IS NULL THEN
     select SBI_EXT_ROLES_SEQ.nextval into nuovo_id from dual;
     :new.EXT_ROLE_ID:=nuovo_id;
END IF;
end;
/





create trigger TRG_SBI_FUNCTIONS
  BEFORE INSERT
  on SBI_FUNCTIONS
  REFERENCING OLD AS old NEW AS new
  for each row
  declare nuovo_id number;
begin
IF :new.FUNCT_ID IS NULL THEN
     select SBI_FUNCTIONS_SEQ.nextval into nuovo_id from dual;
     :new.FUNCT_ID:=nuovo_id;
END IF;
end;
/




create trigger TRG_SBI_LOV
  BEFORE INSERT
  on SBI_LOV
  REFERENCING OLD AS old NEW AS new
  for each row
  declare nuovo_id number;
begin
IF :new.LOV_ID IS NULL THEN
     select SBI_LOV_SEQ.nextval into nuovo_id from dual;
     :new.LOV_ID:=nuovo_id;
END IF;
end;
/

















create trigger TRG_SBI_OBJECTS
  BEFORE INSERT
  on SBI_OBJECTS
  REFERENCING OLD AS old NEW AS new
  for each row
  declare nuovo_id number;
begin
IF :new.BIOBJ_ID IS NULL THEN
     select SBI_OBJECTS_SEQ.nextval into nuovo_id from dual;
     :new.BIOBJ_ID:=nuovo_id;
END IF;
end;
/



create trigger TRG_SBI_PARAMETERS
  BEFORE INSERT
  on SBI_PARAMETERS
  REFERENCING OLD AS old NEW AS new
  for each row
  declare nuovo_id number;
begin
IF :new.PAR_ID IS NULL THEN
     select SBI_PARAMETERS_SEQ.nextval into nuovo_id from dual;
     :new.PAR_ID:=nuovo_id;
END IF;
end;
/



create trigger TRG_SBI_PARUSE
  BEFORE INSERT
  on SBI_PARUSE
  REFERENCING OLD AS old NEW AS new
  for each row
  declare nuovo_id number;
begin
IF :new.USE_ID IS NULL THEN
     select SBI_PARUSE_SEQ.nextval into nuovo_id from dual;
     :new.USE_ID:=nuovo_id;
END IF;
end;
/



create trigger TRG_SBI_OBJ_PAR
  BEFORE INSERT
  on SBI_OBJ_PAR
  REFERENCING OLD AS old NEW AS new
  for each row
  declare nuovo_id number;
begin
IF :new.OBJ_PAR_ID IS NULL THEN
     select SBI_OBJ_PAR_SEQ.nextval into nuovo_id from dual;
     :new.OBJ_PAR_ID:=nuovo_id;
END IF;
end;
/



create trigger TRG_SBI_EVENTS_LOG
  BEFORE INSERT
  on SBI_EVENTS_LOG
  REFERENCING OLD AS old NEW AS new
  for each row
  declare nuovo_id number;
begin
IF :new.ID IS NULL THEN
     select SBI_EVENTS_LOG_SEQ.nextval into nuovo_id from dual;
     :new.ID:=nuovo_id;
END IF;
end;
/

create trigger TRG_SBI_AUDIT
  BEFORE INSERT
  on SBI_AUDIT
  REFERENCING OLD AS old NEW AS new
  for each row
  declare nuovo_id number;
begin
IF :new.ID IS NULL THEN
     select SBI_AUDIT_SEQ.nextval into nuovo_id from dual;
     :new.ID:=nuovo_id;
END IF;
end;
/

