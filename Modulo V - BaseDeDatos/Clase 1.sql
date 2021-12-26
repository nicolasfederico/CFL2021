use pruebaejercicioconsql;

CREATE TABLE IF NOT EXISTS E01_TELEFONO (
nro_cliente INT NOT NULL,
codigo_area INT NOT NULL,
nro_telefono INT NOT NULL,
tipo CHAR(1),
PRIMARY KEY (codigo_area, nro_telefono));

CREATE TABLE IF NOT EXISTS E01_CLIENTE (
nro_cliente INT not null ,
nombre VARCHAR (45),
apellido VARCHAR (45),
direccion VARCHAR (45),
activo TINYINT,
PRIMARY KEY (nro_cliente));

CREATE TABLE IF NOT EXISTS E01_FACTURA (
nro_cliente INT,
nro_factura INT not null,
fecha DATE,
total_sin_iva DOUBLE,
iva DOUBLE,
total_con_iva DOUBLE,
primary key (nro_factura));

CREATE TABLE IF NOT EXISTS E01_DETALLE_FACTURA (
nro_factura INT NOT NULL,
nro_item INT,
cantidad FLOAT,
codigo_producto INT NOT NULL,
PRIMARY KEY (nro_factura, codigo_producto));

CREATE TABLE IF NOT EXISTS E01_PRODUCTO (
codigo_producto INT,
marca VARCHAR(45),
nombre VARCHAR(45),
descripcion VARCHAR(45),
precio FLOAT,
stock INT,
PRIMARY KEY (codigo_producto));

ALTER TABLE E01_TELEFONO ADD
constraint relacion_telefono_cliente FOREIGN KEY (nro_cliente) references E01_CLIENTE (nro_cliente);

ALTER TABLE E01_FACTURA ADD 
constraint relacion_Factura_cliente FOREIGN KEY (nro_cliente) references E01_CLIENTE (nro_cliente);

ALTER TABLE E01_DETALLE_FACTURA
ADD constraint relacion_factura_detalle foreign key (nro_factura) references E01_FACTURA (nro_factura),
ADD constraint relacion_detallefactura_codigoproducto foreign key (codigo_producto) references E01_PRODUCTO (codigo_producto) ;


INSERT INTO 
E01_PRODUCTO (codigo_producto, marca, nombre, precio, stock)
values (1,"misky","turron",4,100);

UPDATE E01_PRODUCTO
SET stock = 90
where codigo_producto = 1;