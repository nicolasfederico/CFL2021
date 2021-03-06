use cfl;

CREATE TABLE t1 (a INT);
CREATE VIEW v1 AS SELECT * FROM t1 WHERE a < 2
WITH CHECK OPTION;

CREATE VIEW v2 AS SELECT * FROM v1 WHERE a > 0
WITH LOCAL CHECK OPTION;

CREATE VIEW v3 AS SELECT * FROM v1 WHERE a > 0
WITH CASCADED CHECK OPTION;

INSERT INTO v3 VALUES (2);

SELECT * FROM v2;

CREATE VIEW vistaCliente AS SELECT nro_cliente from e01_factura 
WHERE nro_cliente > 20;

SELECT * FROM vistaCliente;

