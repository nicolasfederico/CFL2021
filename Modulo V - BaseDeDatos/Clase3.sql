create schema E02_EmpleadoUsuario;
use E02_EmpleadoUsuario;


CREATE TABLE IF NOT EXISTS E02_Empleado (
cuit INT NOT NULL,
nombre VARCHAR (45),
apellido VARCHAR (45),
direccion VARCHAR (45),
PRIMARY KEY (cuit));

CREATE TABLE IF NOT EXISTS E02_Usuario  (
login VARCHAR (10) NOT NULL,
password VARCHAR (10) NOT NULL,
email VARCHAR (45) NOT NULL,
PRIMARY KEY (login));film_text



