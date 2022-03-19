use cfl;

SELECT count(*)
from e01_detalle_factura;

SELECT count(*)
FROM e01_producto
WHERE nombre = 'fish';

#1
SELECT count(*)
FROM e01_cliente;

#2 
SELECT nombre, AVG (precio)
FROM e01_producto 
GROUP BY nombre;

#3
SELECT p.nombre, AVG(p.precio)
FROM e01_producto p
GROUP BY p.nombre
order by p.nombre
LIMIT 10;

#4
SELECT c.nro_cliente, c.nombre, c.apellido, sum(f.total_con_iva) FROM e01_cliente c
INNER JOIN e01_factura f ON c.nro_cliente = f.nro_cliente
GROUP BY c.nro_cliente, c.nombre, c.apellido;

#5
SELECT p.nombre, AVG (p.precio)
FROM e01_producto p
GROUP BY p.nombre
HAVING AVG (p.precio) > 600;