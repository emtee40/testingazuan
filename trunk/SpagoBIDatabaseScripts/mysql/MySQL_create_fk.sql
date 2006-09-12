CREATE INDEX XIF3SBI_CHECKS ON SBI_CHECKS
(
       VALUE_TYPE_ID                  ASC
);

CREATE INDEX XIF1SBI_EXT_ROLES ON SBI_EXT_ROLES
(
       ROLE_TYPE_ID                   ASC
);

CREATE INDEX XIF1SBI_FUNC_ROLE ON SBI_FUNC_ROLE
(
       ROLE_ID                        ASC
);

CREATE INDEX XIF2SBI_FUNC_ROLE ON SBI_FUNC_ROLE
(
       FUNCT_ID                       ASC
);

CREATE INDEX XIF4SBI_FUNC_ROLE ON SBI_FUNC_ROLE
(
       STATE_ID                       ASC
);

CREATE INDEX XIF1SBI_FUNCTIONS ON SBI_FUNCTIONS
(
       FUNCT_TYPE_ID                  ASC
);

CREATE INDEX XIF2SBI_FUNCTIONS ON SBI_FUNCTIONS
(
       PARENT_FUNCT_ID                ASC
);

CREATE INDEX XIF3SBI_LOV ON SBI_LOV
(
       INPUT_TYPE_ID                  ASC
);

CREATE INDEX XIF1SBI_OBJ_FUNC ON SBI_OBJ_FUNC
(
       BIOBJ_ID                       ASC
);

CREATE INDEX XIF2SBI_OBJ_FUNC ON SBI_OBJ_FUNC
(
       FUNCT_ID                       ASC
);

CREATE INDEX XIF1SBI_OBJ_PAR ON SBI_OBJ_PAR
(
       PAR_ID                         ASC
);

CREATE INDEX XIF2SBI_OBJ_PAR ON SBI_OBJ_PAR
(
       BIOBJ_ID                       ASC
);

CREATE INDEX XIF3SBI_OBJ_STATE ON SBI_OBJ_STATE
(
       BIOBJ_ID                       ASC
);

CREATE INDEX XIF4SBI_OBJ_STATE ON SBI_OBJ_STATE
(
       STATE_ID                       ASC
);

CREATE INDEX XIF2SBI_OBJECTS ON SBI_OBJECTS
(
       STATE_ID                       ASC
);

CREATE INDEX XIF4SBI_OBJECTS ON SBI_OBJECTS
(
       BIOBJ_TYPE_ID                  ASC
);

CREATE INDEX XIF5SBI_OBJECTS ON SBI_OBJECTS
(
       EXEC_MODE_ID                   ASC
);

CREATE INDEX XIF6SBI_OBJECTS ON SBI_OBJECTS
(
       STATE_CONS_ID                  ASC
);

CREATE INDEX XIF1SBI_PARAMETERS ON SBI_PARAMETERS
(
       PAR_TYPE_ID                    ASC
);

CREATE INDEX XIF1SBI_PARUSE ON SBI_PARUSE
(
       PAR_ID                         ASC
);

CREATE INDEX XIF2SBI_PARUSE ON SBI_PARUSE
(
       LOV_ID                         ASC
);

CREATE INDEX XIF1SBI_PARUSE_CK ON SBI_PARUSE_CK
(
       USE_ID                         ASC
);

CREATE INDEX XIF2SBI_PARUSE_CK ON SBI_PARUSE_CK
(
       CHECK_ID                       ASC
);

CREATE INDEX XIF2SBI_PARUSE_DET ON SBI_PARUSE_DET
(
       EXT_ROLE_ID                    ASC
);

CREATE INDEX XIF3SBI_PARUSE_DET ON SBI_PARUSE_DET
(
       USE_ID                         ASC
);


ALTER TABLE SBI_CHECKS ADD CONSTRAINT FK_sbi_checks_1 FOREIGN KEY FK_sbi_checks_1 ( VALUE_TYPE_ID ) REFERENCES SBI_DOMAINS ( VALUE_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_EXT_ROLES ADD CONSTRAINT FK_sbi_ext_roles_1 FOREIGN KEY FK_sbi_ext_roles_1 ( ROLE_TYPE_ID ) REFERENCES SBI_DOMAINS ( VALUE_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_FUNC_ROLE ADD CONSTRAINT FK_sbi_func_role_3 FOREIGN KEY FK_sbi_func_role_3 ( FUNCT_ID ) REFERENCES SBI_FUNCTIONS ( FUNCT_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_FUNC_ROLE ADD CONSTRAINT FK_sbi_func_role_1 FOREIGN KEY FK_sbi_func_role_1 ( ROLE_ID ) REFERENCES SBI_EXT_ROLES ( EXT_ROLE_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_FUNC_ROLE ADD CONSTRAINT FK_sbi_func_role_2 FOREIGN KEY FK_sbi_func_role_2 ( STATE_ID ) REFERENCES SBI_DOMAINS ( VALUE_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_FUNCTIONS ADD CONSTRAINT FK_sbi_functions_1 FOREIGN KEY FK_sbi_functions_1 ( FUNCT_TYPE_ID ) REFERENCES SBI_DOMAINS ( VALUE_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_FUNCTIONS ADD CONSTRAINT FK_sbi_functions_2 FOREIGN KEY FK_sbi_functions_2 ( PARENT_FUNCT_ID ) REFERENCES SBI_FUNCTIONS ( FUNCT_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_LOV ADD CONSTRAINT FK_sbi_lov_1 FOREIGN KEY FK_sbi_lov_1 ( INPUT_TYPE_ID ) REFERENCES SBI_DOMAINS ( VALUE_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_OBJ_FUNC ADD CONSTRAINT FK_sbi_obj_func_2 FOREIGN KEY FK_sbi_obj_func_2 ( BIOBJ_ID ) REFERENCES SBI_OBJECTS ( BIOBJ_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_OBJ_FUNC ADD CONSTRAINT FK_sbi_obj_func_1 FOREIGN KEY FK_sbi_obj_func_1 ( FUNCT_ID ) REFERENCES SBI_FUNCTIONS ( FUNCT_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_OBJ_PAR ADD CONSTRAINT FK_sbi_obj_par_1 FOREIGN KEY FK_sbi_obj_par_1 ( BIOBJ_ID ) REFERENCES SBI_OBJECTS ( BIOBJ_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_OBJ_PAR ADD CONSTRAINT FK_sbi_obj_par_2 FOREIGN KEY FK_sbi_obj_par_2 ( PAR_ID ) REFERENCES SBI_PARAMETERS ( PAR_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_OBJ_STATE ADD CONSTRAINT FK_sbi_obj_state_1 FOREIGN KEY FK_sbi_obj_state_1 ( BIOBJ_ID ) REFERENCES SBI_OBJECTS ( BIOBJ_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_OBJ_STATE ADD CONSTRAINT FK_sbi_obj_state_2 FOREIGN KEY FK_sbi_obj_state_2 ( STATE_ID ) REFERENCES SBI_DOMAINS ( VALUE_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT FK_sbi_objects_2 FOREIGN KEY FK_sbi_objects_2 ( STATE_ID ) REFERENCES SBI_DOMAINS ( VALUE_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT FK_sbi_objects_3 FOREIGN KEY FK_sbi_objects_3 ( BIOBJ_TYPE_ID ) REFERENCES SBI_DOMAINS ( VALUE_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT FK_sbi_objects_5 FOREIGN KEY FK_sbi_objects_5 ( ENGINE_ID ) REFERENCES SBI_ENGINES ( ENGINE_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT FK_sbi_objects_4 FOREIGN KEY FK_sbi_objects_4 ( EXEC_MODE_ID ) REFERENCES SBI_DOMAINS ( VALUE_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_OBJECTS ADD CONSTRAINT FK_sbi_objects_1 FOREIGN KEY FK_sbi_objects_1 ( STATE_CONS_ID ) REFERENCES SBI_DOMAINS ( VALUE_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_PARAMETERS ADD CONSTRAINT FK_sbi_parameters_1 FOREIGN KEY FK_sbi_parameters_1 ( PAR_TYPE_ID ) REFERENCES SBI_DOMAINS ( VALUE_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_PARUSE ADD CONSTRAINT FK_sbi_paruse_1 FOREIGN KEY FK_sbi_paruse_1 ( PAR_ID ) REFERENCES SBI_PARAMETERS ( PAR_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_PARUSE ADD CONSTRAINT FK_sbi_paruse_2 FOREIGN KEY FK_sbi_paruse_2 ( LOV_ID ) REFERENCES SBI_LOV ( LOV_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_PARUSE_CK ADD CONSTRAINT FK_sbi_paruse_ck_1 FOREIGN KEY FK_sbi_paruse_ck_1 ( USE_ID ) REFERENCES SBI_PARUSE ( USE_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_PARUSE_CK ADD CONSTRAINT FK_sbi_paruse_ck_2 FOREIGN KEY FK_sbi_paruse_ck_2 ( CHECK_ID ) REFERENCES SBI_CHECKS ( CHECK_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_PARUSE_DET ADD CONSTRAINT FK_sbi_paruse_det_1 FOREIGN KEY FK_sbi_paruse_det_1 ( USE_ID ) REFERENCES SBI_PARUSE ( USE_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_PARUSE_DET ADD CONSTRAINT FK_sbi_paruse_det_2 FOREIGN KEY FK_sbi_paruse_det_2 ( EXT_ROLE_ID ) REFERENCES SBI_EXT_ROLES ( EXT_ROLE_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_OBJ_PARUSE ADD CONSTRAINT FK_sbi_obj_paruse_1 FOREIGN KEY FK_sbi_obj_paruse_1 ( OBJ_PAR_ID ) REFERENCES SBI_OBJ_PAR ( OBJ_PAR_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_OBJ_PARUSE ADD CONSTRAINT FK_sbi_obj_paruse_2 FOREIGN KEY FK_sbi_obj_paruse_2 ( USE_ID ) REFERENCES SBI_PARUSE ( USE_ID ) ON DELETE RESTRICT;ALTER TABLE SBI_OBJ_PARUSE ADD CONSTRAINT FK_sbi_obj_paruse_3 FOREIGN KEY FK_sbi_obj_paruse_3 ( OBJ_PAR_FATHER_ID ) REFERENCES SBI_OBJ_PAR ( OBJ_PAR_ID ) ON DELETE RESTRICT;
ALTER TABLE SBI_ENGINES ADD CONSTRAINT FK_sbi_engines_1 FOREIGN KEY FK_sbi_engines_1 ( BIOBJ_TYPE ) REFERENCES SBI_DOMAINS ( VALUE_ID );
ALTER TABLE SBI_ENGINES ADD CONSTRAINT FK_sbi_engines_2 FOREIGN KEY FK_sbi_engines_2 ( ENGINE_TYPE ) REFERENCES SBI_DOMAINS ( VALUE_ID );
