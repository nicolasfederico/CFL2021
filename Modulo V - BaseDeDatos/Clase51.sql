use cfl; 

CREATE TABLE e01_log (
  fecha datetime NOT NULL,
  tabla varchar(45),
  operacion varchar(45),
  valor_nuevo varchar(45),
  valor_viejo varchar(45)
);

DELIMITER $$
CREATE PROCEDURE ejemplo_cursor_simple(IN texto VARCHAR(45))
BEGIN
DECLARE done INT DEFAULT FALSE;
DECLARE adress VARCHAR(45);
DECLARE id INT;
DECLARE cur1 CURSOR FOR SELECT nro_cliente,direccion FROM e01_cliente WHERE direccion LIKE CONCAT(CONCAT('%',texto),'%');
DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
OPEN cur1;
read_loop: LOOP
    FETCH cur1 INTO id, adress;
     IF done THEN
      LEAVE read_loop;
    END IF;
    INSERT INTO e01_log VALUES(now(),'e01_cliente','stored_procedure',id,adress);
END LOOP;
CLOSE cur1;
END$$
DELIMITER ;

select * from e01_log;
call ejemplo_cursor_simple('Avda.');

DROP PROCEDURE ejemplo_cursor_simple

DELIMITER $$
CREATE PROCEDURE ejemplo_cursor_simple(IN texto VARCHAR(45))
BEGIN
DECLARE done INT DEFAULT FALSE;
DECLARE adress VARCHAR(45);
DECLARE id INT;
DECLARE numero_factura INT;

DECLARE cur1 CURSOR FOR SELECT c.nro_cliente,c.direccion, f.nro_factura
FROM e01_cliente c
INNER JOIN e01_factura f ON c.nro_cliente = f.nro_cliente
WHERE c.direccion LIKE CONCAT(CONCAT('%','avda'),'%');

DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
OPEN cur1;
read_loop: LOOP
    FETCH cur1 INTO id, adress, numero_factura;
     IF done THEN
      LEAVE read_loop;
    END IF;
    INSERT INTO e01_log VALUES(now(),'e01_cliente',id,adress,numero_factura);
END LOOP;
CLOSE cur1;
END$$
DELIMITER ;

delete FROM e01_log;
select * from e01_log;
call ejemplo_cursor_simple('Avda.');

SET GLOBAL log_bin_trust_function_creators = 1;

DELIMITER $$
CREATE FUNCTION cliente(id int) RETURNS varchar(100) CHARSET utf8mb4
    DETERMINISTIC
BEGIN
	DECLARE nombre_apellido VARCHAR(100);
	SELECT CONCAT(CONCAT(nombre,' '),apellido) INTO nombre_apellido from e01_cliente where nro_cliente = id;
RETURN nombre_apelLido;
END$$
DELIMITER ;
