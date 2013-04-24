/**
 * @name 124651776726521488
*/
SELECT T_MTD_MDCHNGLOG_1.MDLOG_ID, T_MTD_MDCHNGLOG_1.OPTYPE, T_MTD_MDCHNGLOG_1.OPDATE, T_MTD_MDCHNGLOG_1.OPOBJNAME, T_MTD_DATACHNGLOG_1.OPDATE, T_MTD_DATACHNGLOG_1.OPSESSION_USER, T_MTD_DATACHNGLOG_1.TABLENAME, T_MTD_DATACHNGLOG_1.TABLEROWID, T_MTD_DATACHNGLOG_1.OPTYPE FROM EAS.MTD_MDCHNGLOG T_MTD_MDCHNGLOG_1, EAS.MTD_DATACHNGLOG T_MTD_DATACHNGLOG_1 WHERE (( T_MTD_MDCHNGLOG_1.OPDATE BETWEEN :STARTDATE AND :ENDDATE) AND (((:DBUSER=T_MTD_MDCHNGLOG_1.OPSESSION_USER) OR ((T_MTD_MDCHNGLOG_1.OPSESSION_USER IS NULL) AND (:dbUser IS NULL))) AND ((:DBUSER=T_MTD_DATACHNGLOG_1.OPSESSION_USER) OR ((T_MTD_DATACHNGLOG_1.OPSESSION_USER IS NULL) AND (:dbUser IS NULL))))) AND ( T_MTD_DATACHNGLOG_1.OPDATE BETWEEN :STARTDATE AND :ENDDATE) ORDER BY T_MTD_MDCHNGLOG_1.OPDATE DESC