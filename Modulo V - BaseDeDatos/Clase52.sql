DELIMITER $$

CREATE TRIGGER trg_cliente_insert
    AFTER INSERT
    ON e01_cliente FOR EACH ROW
BEGIN
   INSERT INTO e01_log values(now(),'e01_cliente','insert',NEW.nombre,null);
END$$    

DELIMITER ;


select count(*) from e01_cliente;

DELIMITER $$

CREATE TRIGGER trg_cliente_update
    AFTER UPDATE
    ON e01_cliente FOR EACH ROW
BEGIN
   INSERT INTO e01_log values(now(),'e01_cliente','update',NEW.nombre,null);
END$$    

DELIMITER ;

DELIMITER $$

CREATE TRIGGER trg_cliente_delete
    BEFORE DELETE
    ON e01_cliente FOR EACH ROW
BEGIN
   INSERT INTO e01_log values(now(),'e01_cliente','delete',OLD.nombre,null);
END$$    

DELIMITER ;

insert into e01_cliente(nro_cliente,nombre,apellido,direccion,activo) values(101,'Federico','Moine','SSS',1);
insert into e01_cliente(nro_cliente,nombre,apellido,direccion,activo) values(102,'Guillermo','Islas','NNN',1);
insert into e01_cliente(nro_cliente,nombre,apellido,direccion,activo) values(103,'Mauricio','Islas','ZZZ',1);

DELETE FROM e01_cliente
WHERE nro_cliente = 101;

SELECT * FROM cfl.e01_cliente
WHERE nro_cliente = 101;

START TRANSACTION; 
DELETE FROM cfl.e01_cliente 
WHERE nro_cliente >= 101;

ROLLBACK ;#Vuelve atras los cambios luego de un start transaction

COMMIT; #Fija los cambios de manera permanente