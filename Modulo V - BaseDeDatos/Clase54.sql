use cfl;


CREATE TABLE alertas (
  fecha datetime NOT NULL,
  nombre_producto varchar (45) not null,
  codigo_producto INT not null,
  importe varchar(45),
  primary key (fecha,codigo_producto)
);

DELIMITER $$
CREATE TRIGGER trg_notificaciones_insert
    AFTER INSERT
    ON e01_factura FOR EACH ROW
BEGIN
   IF NEW.total_con_iva > 30000 THEN 
   INSERT INTO notificaciones values(now(),NEW.nro_cliente,NEW.total_con_iva);
   END IF;
END$$    
DELIMITER ;

SELECT * FROM e01_producto p
INNER JOIN e01_detalle_factura df on p.codigo_producto = df.codigo_producto;


SELECT p.nombre, sum(df.cantidad) FROM e01_producto p
LEFT JOIN e01_detalle_factura df on p.codigo_producto = df.codigo_producto
GROUP BY p.nombre
having sum(df.cantidad) is null;

select p.nombre
FROM e01_producto p
WHERE NOT EXISTS 
(SELECT p.nombre FROM e01_detalle_factura df
WHERE df.codigo_producto = p.codigo_producto);
