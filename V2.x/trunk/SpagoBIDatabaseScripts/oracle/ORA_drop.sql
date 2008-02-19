DROP SEQUENCE SBI_DOSSIER_PRESENTATIONS_SEQ ;
DROP SEQUENCE SBI_DOSSIER_PARTS_TEMP_SEQ ;
DROP SEQUENCE SBI_DOSSIER_BINARY_CONTENTS_TEMP_SEQ ;
DROP SEQUENCE SBI_CHECKS_SEQ ;
DROP SEQUENCE SBI_DOMAINS_SEQ ;
DROP SEQUENCE SBI_ENGINES_SEQ ;
DROP SEQUENCE SBI_EXT_ROLES_SEQ ;
DROP SEQUENCE SBI_FUNCTIONS_SEQ ;
DROP SEQUENCE SBI_LOV_SEQ ;
DROP SEQUENCE SBI_OBJECTS_SEQ ;
DROP SEQUENCE SBI_PARAMETERS_SEQ ;
DROP SEQUENCE SBI_PARUSE_SEQ ;
DROP SEQUENCE SBI_OBJ_PAR_SEQ ;
DROP SEQUENCE SBI_EVENTS_LOG_SEQ ;
DROP SEQUENCE SBI_AUDIT_SEQ ;
DROP SEQUENCE SBI_MAPS_SEQ ;
DROP SEQUENCE SBI_FEATURES_SEQ ;
DROP SEQUENCE SBI_VIEWPOINTS_SEQ ;
DROP SEQUENCE SBI_DATA_SOURCE_SEQ ;
DROP SEQUENCE SBI_USER_FUNCTIONALITY_SEQ ;

DROP TABLE SBI_DOSSIER_PRESENTATIONS ;
DROP TABLE SBI_DOSSIER_BINARY_CONTENTS_TEMP ;
DROP TABLE SBI_DOSSIER_PARTS_TEMP ;
DROP TABLE SBI_AUDIT CASCADE CONSTRAINTS;
DROP TABLE SBI_EVENTS_ROLES CASCADE CONSTRAINTS;
DROP TABLE SBI_EVENTS_LOG CASCADE CONSTRAINTS;
DROP TABLE SBI_EVENTS CASCADE CONSTRAINTS;
DROP TABLE SBI_SUBREPORTS CASCADE CONSTRAINTS;
DROP TABLE SBI_OBJ_PARUSE CASCADE CONSTRAINTS;
DROP TABLE SBI_PARUSE_CK CASCADE CONSTRAINTS;
DROP TABLE SBI_PARUSE_DET CASCADE CONSTRAINTS;
DROP TABLE SBI_PARUSE CASCADE CONSTRAINTS;
DROP TABLE SBI_FUNC_ROLE CASCADE CONSTRAINTS;
DROP TABLE SBI_OBJ_FUNC CASCADE CONSTRAINTS;
DROP TABLE SBI_FUNCTIONS CASCADE CONSTRAINTS;
DROP TABLE SBI_CHECKS CASCADE CONSTRAINTS;
DROP TABLE SBI_OBJ_PAR CASCADE CONSTRAINTS;
DROP TABLE SBI_PARAMETERS CASCADE CONSTRAINTS;
DROP TABLE SBI_OBJECT_NOTES CASCADE CONSTRAINTS;
DROP TABLE SBI_OBJECT_TEMPLATES CASCADE CONSTRAINTS;
DROP TABLE SBI_BINARY_TEMPLATES CASCADE CONSTRAINTS;
DROP TABLE SBI_BINARY_CONTENTS CASCADE CONSTRAINTS;
DROP TABLE SBI_SNAPSHOTS CASCADE CONSTRAINTS;
DROP TABLE SBI_SUBOBJECTS CASCADE CONSTRAINTS;
DROP TABLE SBI_USER_FUNCTIONALITY CASCADE CONSTRAINTS;
DROP TABLE SBI_ROLE_TYPE_USER_FUNCTIONALITY CASCADE CONSTRAINTS;
DROP TABLE SBI_OBJ_STATE CASCADE CONSTRAINTS;
DROP TABLE SBI_OBJECTS CASCADE CONSTRAINTS;
DROP TABLE SBI_EXT_ROLES CASCADE CONSTRAINTS;
DROP TABLE SBI_LOV CASCADE CONSTRAINTS;
DROP TABLE SBI_ENGINES CASCADE CONSTRAINTS;
DROP TABLE SBI_DOMAINS CASCADE CONSTRAINTS;
DROP TABLE SBI_GEO_MAP_FEATURES CASCADE CONSTRAINTS;
DROP TABLE SBI_GEO_FEATURES CASCADE CONSTRAINTS;
DROP TABLE SBI_GEO_MAPS CASCADE CONSTRAINTS;
DROP TABLE SBI_VIEWPOINTS CASCADE CONSTRAINTS;
DROP TABLE SBI_DATA_SOURCE CASCADE CONSTRAINTS;