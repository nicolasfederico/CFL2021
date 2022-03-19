
UPDATE e01_producto
set precio = precio+(precio*0.10)
where marca = "Odio Corp.";

DELETE FROM e01_producto
where marca = "Odio Corp.";

insert into cfl.e01_producto values(1000,'Medicamentos','Cafiaspirina','',1000,100);

DELETE FROM cfl.e01_producto where codigo_producto = 1000;

UPDATE cfl.e01_telefono set codigo_area = 526 where codigo_area = 551;

SELECT  nombre FROM cfl.e01_producto;

SELECT precio FROM cfl.e01_producto WHERE precio > 900;

SELECT codigo_producto, nombre, stock FROM cfl.e01_producto WHERE stock BETWEEN 60 AND 100;

SELECT nro_cliente, apellido, nombre FROM cfl.e01_cliente WHERE nombre LIKE 'F%';

SELECT codigo_producto, nombre, stock FROM cfl.e01_producto WHERE stock < 26 OR  nombre = 'fish';

SELECT * FROM cfl.e01_cliente;

SELECT nombre, apellido FROM cfl.e01_cliente;

SELECT nombre FROM cfl.e01_producto;

SELECT codigo_area FROM cfl.e01_telefono;

SELECT nombre 
FROM cfl.e01_producto
WHERE stock > 50 AND stock < 200;

SELECT *
FROM cfl.e01_producto
WHERE codigo_producto=50;

use cfl;
SELECT nro_cliente,nombre,apellido FROM cfl.e01_cliente WHERE nombre = 'Jacob';

SELECT codigo_area, nro_telefono 
FROM cfl.e01_telefono 
WHERE nro_cliente = 22;

SELECT nro_cliente,codigo_area, nro_telefono 
FROM cfl.e01_telefono 
WHERE nro_cliente = (SELECT nro_cliente FROM cfl.e01_cliente WHERE nombre = 'Jacob' AND apellido = 'Cooper');

SELECT nombre, apellido
FROM cfl.e01_cliente
WHERE apellido LIKE 'Leblanc' OR apellido LIKE 'Savage' OR apellido LIKE 'Stokes' OR apellido LIKE 'Pollard' OR apellido LIKE 'Rose' OR apellido LIKE 'Moreno';

SELECT nro_cliente,nombre, apellido
FROM cfl.e01_cliente
WHERE nro_cliente = (SELECT nro_cliente FROM cfl.e01_factura WHERE nro_factura = 60);

SELECT nro_factura FROM cfl.e01_factura WHERE nro_cliente = 4;

SELECT codigo_producto FROM cfl.e01_detalle_factura WHERE nro_factura = 1;

SELECT * 
FROM cfl.e01_producto
WHERE codigo_producto = 66;

SELECT marca, codigo_producto, nombre FROM cfl.e01_producto 
WHERE nombre LIKE '%drugstore%';

SELECT * FROM cfl.e01_producto WHERE nombre LIKE '%hold%';

SELECT * FROM cfl.e01_producto WHERE nombre LIKE '';

SELECT *
FROM cfl.e01_factura
order by total_sin_iva desc;

SELECT *
FROM cfl.e01_factura WHERE total_sin_iva > 0
order by total_sin_iva asc;

SELECT nro_factura, nro_item FROM cfl.e01_detalle_factura
order by nro_item desc;

SELECT codigo_producto,nro_factura FROM cfl.e01_detalle_factura
WHERE nro_factura = 286;

SELECT * FROM cfl.e01_producto WHERE codigo_producto = 81;

SELECT * FROM cfl.e01_factura 
order by fecha asc;

SELECT * FROM cfl.e01_factura 
order by fecha desc;

SELECT * FROM cfl.e01_cliente WHERE nro_cliente = 92;

SELECT * FROM cfl.e01_factura order by total_con_iva desc;
SELECT * FROM e01_cliente WHERE nro_cliente = 21;

SELECT nro_cliente,codigo_area, nro_telefono 
FROM cfl.e01_telefono 
WHERE nro_cliente IN (SELECT nro_cliente FROM cfl.e01_cliente WHERE nombre = 'Jacob' AND apellido = 'Cooper');

SELECT * FROM cfl.e01_producto
WHERE codigo_producto IN (SELECT codigo_producto FROM cfl.e01_detalle_factura WHERE nro_factura = 60);

SELECT * FROM cfl.e01_producto
WHERE EXISTS (SELECT codigo_producto FROM cfl.e01_detalle_factura WHERE nro_factura = 60 
AND e01_detalle_factura.codigo_producto = e01_producto.codigo_producto);

SELECT * FROM e01_factura WHERE nro_cliente IN 
(SELECT nro_cliente FROM e01_cliente where nombre = 'pandora' and apellido = 'tate');

SELECT * FROM e01_factura WHERE nro_factura IN 
(SELECT nro_factura FROM e01_detalle_factura WHERE  codigo_producto IN  
(SELECT codigo_producto FROM e01_producto WHERE marca = 'In Faucibus Inc.')); 