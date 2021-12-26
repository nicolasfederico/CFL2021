use cfl;

#1
SELECT nro_cliente, codigo_area FROM e01_telefono WHERE nro_cliente IN 
(SELECT nro_cliente FROM e01_cliente WHERE nombre = 'Xerxes');

#2
SELECT * FROM e01_producto
WHERE codigo_producto IN 
	(SELECT codigo_producto FROM e01_detalle_factura
    WHERE nro_factura IN
		(SELECT nro_factura FROM e01_factura
        WHERE nro_cliente IN 
			(SELECT nro_cliente FROM e01_cliente WHERE nombre = 'Xerxes' )AND e01_factura.fecha > '2017-01-01'));
            
#3
SELECT marca FROM e01_producto 
WHERE codigo_producto IN (
	SELECT codigo_producto FROM e01_detalle_factura 
	WHERE nro_item = 37 AND nro_factura IN(
		SELECT nro_factura FROM e01_factura 
		WHERE nro_cliente IN (
			SELECT nro_cliente FROM e01_cliente 
			WHERE nombre = 'Pandora')));

#4
SELECT distinct fecha FROM e01_factura 
WHERE fecha>'2016-12-31' AND nro_factura IN 
(SELECT nro_factura FROM e01_detalle_factura
WHERE codigo_producto IN 
(SELECT codigo_producto FROM e01_producto WHERE marca= 'Quam Industries'));

#5
SELECT * FROM e01_cliente
WHERE nro_cliente IN (
	SELECT nro_cliente FROM e01_telefono WHERE tipo = 'F')
AND nro_cliente IN (
		SELECT nro_cliente FROM e01_factura 
        WHERE fecha > '2017-01-01' AND nro_factura IN (
			SELECT nro_factura FROM e01_detalle_factura 
            WHERE codigo_producto IN 
				(SELECT codigo_producto FROM e01_producto WHERE nombre LIKE 'fish')));

#6 
SELECT * FROM e01_producto 
WHERE codigo_producto IN (
	SELECT codigo_producto FROM e01_detalle_factura 
	WHERE nro_factura IN (
		SELECT nro_factura from e01_factura 
        WHERE fecha > '2017-03-28'));

#7
SELECT * FROM e01_detalle_factura
WHERE cantidad = 100 AND nro_factura IN(
	SELECT nro_factura FROM e01_factura
    WHERE fecha > '2017-01-01' AND nro_cliente IN(
		SELECT nro_cliente FROM e01_cliente
        WHERE nombre = 'Chancellor'));
        
#8 
SELECT fecha FROM e01_factura 
WHERE nro_cliente IN (
	SELECT nro_cliente FROM e01_cliente WHERE nombre LIKE 'Candice') 
AND nro_factura IN (
	SELECT nro_factura FROM e01_detalle_factura 
	WHERE nro_item IN 
		(SELECT nro_item FROM e01_producto
		WHERE nombre LIKE 'sales tax'));

#9
SELECT * FROM e01_producto
WHERE codigo_producto IN (
	SELECT codigo_producto FROM e01_detalle_factura
	WHERE nro_factura IN (
		SELECT nro_factura FROM e01_factura 
        WHERE total_con_iva <= '818259.5621312256'));
        
        
#Ejercicios de Tarea
use cfl;

#1
SELECT * FROM e01_cliente
INNER JOIN e01_telefono ON e01_cliente.nro_cliente = e01_telefono.nro_cliente;

#2
SELECT * FROM e01_cliente
INNER JOIN e01_telefono ON e01_cliente.nro_cliente = e01_telefono.nro_cliente
WHERE e01_cliente.nro_cliente = 30;

#3
SELECT e01_cliente.nombre, e01_cliente.apellido, e01_factura.total_con_iva FROM e01_cliente
INNER JOIN e01_factura ON e01_cliente.nro_cliente = e01_factura.nro_cliente;

#4
SELECT * FROM e01_factura 
INNER JOIN e01_cliente ON e01_cliente.nombre LIKE 'Pandora' AND e01_cliente.apellido LIKE 'Tate';

#5
SELECT * FROM e01_factura
INNER JOIN e01_detalle_factura on e01_factura.nro_factura = e01_detalle_factura.nro_factura
INNER JOIN e01_producto on e01_producto.codigo_producto= e01_detalle_factura.codigo_producto
where e01_producto.marca LIKE 'In Faucibus Inc.';

#6
SELECT * FROM e01_cliente
INNER JOIN e01_telefono ON e01_cliente.nro_cliente = e01_telefono.nro_cliente
where e01_telefono.codigo_area = 296;

#7
SELECT * FROM e01_cliente
INNER JOIN e01_factura on e01_cliente.nro_cliente = e01_factura.nro_factura
INNER JOIN e01_detalle_factura ON e01_factura.nro_factura = e01_detalle_factura.nro_factura
INNER JOIN e01_producto ON e01_detalle_factura.codigo_producto = e01_detalle_factura.codigo_producto
WHERE e01_producto.nombre LIKE 'scales';

#8
SELECT e01_telefono.codigo_area FROM e01_telefono
INNER JOIN e01_cliente on e01_telefono.nro_cliente = e01_cliente.nro_cliente
INNER JOIN e01_factura on e01_cliente.nro_cliente = e01_factura.nro_factura
INNER JOIN e01_detalle_factura ON e01_factura.nro_factura = e01_detalle_factura.nro_factura
INNER JOIN e01_producto ON e01_detalle_factura.codigo_producto = e01_detalle_factura.codigo_producto
WHERE e01_producto.nombre LIKE 'scales';

#6 
SELECT p.* FROM e01_producto p
INNER JOIN e01_detalle_factura df on p.codigo_producto = df.codigo_producto
INNER JOIN e01_factura f on df.nro_factura = f.nro_factura
WHERE f.fecha > '2017-03-28';

