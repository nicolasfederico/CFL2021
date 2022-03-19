use cfl;

CREATE TABLE notificaciones (
  fecha date NOT NULL,
  nro_cliente INT not null,
  importe varchar(45),
  primary key (fecha,nro_cliente)
);

alter table notificaciones add constraint fk_NotificacionesCliente foreign key (nro_cliente) references e01_cliente (nro_cliente);



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

INSERT INTO cfl.e01_factura values (404, now(), 90000, 21, (90000+(90000*2.1)), 99);

INSERT INTO cfl.E01_FACTURA values(409,'2021-11-24',30000,21,35000,1);

SELECT * FROM cfl.e01_factura WHERE cfl.e01_factura.nro_factura = 403

