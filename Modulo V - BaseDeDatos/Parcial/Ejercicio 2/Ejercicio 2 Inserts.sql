use ejercicio2;

INSERT INTO camion values('AB111CD','2016','frigorifico','2000');
INSERT INTO camion values('AB123CD','2020','tanque','1500');
INSERT INTO camion values('AB456CD','2021','frigorifico','2500');
INSERT INTO camion values('AB789CD','2012','frigorifico','4000');
INSERT INTO camion values('AB101XX','2013','acoplado abierto','2456');

INSERT INTO empresa values (1,'cruz el sur');
INSERT INTO empresa values (2,'crucero del norte');
INSERT INTO empresa values (3,'patronelli');
INSERT INTO empresa values (4,'flecha bus');
INSERT INTO empresa values (5,'via tac');

INSERT INTO camionero values('1','45613246','jose','223341233','sarmiento 10','83900','rauch','1');
INSERT INTO camionero values('2','12613246','carlos','125165123','sarmiento 141','81500','tandil','2');
INSERT INTO camionero values('3','12934856','ernesto','125156331','avellaneda 1510','111230','tandil','3');
INSERT INTO camionero values('4','32364792','guillermo','756113213','cisneros 10','123100','tandil','4');
INSERT INTO camionero values('5','37852649','mauricio','161212311','españa 415','131100','las flores','5');

INSERT INTO viaje values (1,'AB111CD',1);
INSERT INTO viaje values (2,'AB123CD',2);
INSERT INTO viaje values (3,'AB456CD',3);
INSERT INTO viaje values (4,'AB789CD',4);
INSERT INTO viaje values (5,'AB101XX',5);

INSERT INTO provincia values (1,'buenos aires');
INSERT INTO provincia values (2,'catamarca');
INSERT INTO provincia values (3,'la rioja');
INSERT INTO provincia values (4,'entre rios');
INSERT INTO provincia values (5,'la pampa existe');

INSERT INTO paquete values (1,'fragil','joselito perez','av los cardos 189',1,1,'AB111CD',1);
INSERT INTO paquete values (2,'confidencial','marito luis','av irigoyen 213',2,2,'AB123CD',2);
INSERT INTO paquete values (3,'pesado','marcelo iripino','av los arroyos 239',3,3,'AB456CD',3);
INSERT INTO paquete values (4,'fragil','marcela caratioca','av uruguay 209',4,4,'AB789CD',4);
INSERT INTO paquete values (5,'fragil','emberto nahuelito','los libres 1230',5,5,'AB101XX',5);
