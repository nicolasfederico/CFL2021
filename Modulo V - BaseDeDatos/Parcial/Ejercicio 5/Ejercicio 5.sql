use cfl;

#Muestra los clientes que no poseen facturas
SELECT c.* FROM e01_cliente c
LEFT JOIN e01_factura f on f.nro_cliente = c.nro_cliente
where f.nro_factura is null;


#Muestra los clientes que no tienen numeros de telefonos asociados
SELECT c.* FROM e01_cliente c
LEFT JOIN e01_telefono t on c.nro_cliente = t.nro_cliente
where t.nro_telefono is null;

#elaborar un query que muestre el nombre, apellido de cada cliente,
#conjuntamente con en "nombre" de cada producto facturado, con la cantidad de productos
#facturados distintos y el total de productos facturados

SELECT c.nombre,c.apellido,p.nombre, SUM(df.cantidad) AS 'cantidad de productos'
FROM e01_cliente c
INNER JOIN e01_factura f ON c.nro_cliente= f.nro_cliente
INNER JOIN e01_detalle_factura df ON f.nro_factura = df.nro_factura
INNER JOIN e01_producto p ON df.codigo_producto = p.codigo_producto 
GROUP BY c.nombre, c.apellido, p.nombre;






