use ejercicio3;

INSERT INTO profesores VALUES ('1','45613246','jose','sarmiento 10','223341233');
INSERT INTO profesores VALUES ('2','12613246','carlos','sarmiento 141','125165123');
INSERT INTO profesores VALUES ('3','12934856','ernesto','avellaneda 1510','125156331');
INSERT INTO profesores VALUES ('4','32364792','guillermo','cisneros 10','756113213');
INSERT INTO profesores VALUES ('5','37852649','mauricio','españa 415','161212311');

INSERT INTO delegado VALUES (1,4);
INSERT INTO delegado VALUES (2,5);
INSERT INTO delegado VALUES (3,2);
INSERT INTO delegado VALUES (4,3);
INSERT INTO delegado VALUES (5,1);

INSERT INTO curso VALUES (1,5);
INSERT INTO curso VALUES (2,4);
INSERT INTO curso VALUES (3,3);
INSERT INTO curso VALUES (4,2);
INSERT INTO curso VALUES (5,1);

INSERT INTO alumno VALUES (1,'nicolas','mertens','1993-06-29',1);
INSERT INTO alumno VALUES (2,'federico','gonzales','1996-04-19',2);
INSERT INTO alumno VALUES (3,'matias','herrera','1982-03-29',3);
INSERT INTO alumno VALUES (4,'ortensio','martinez','1987-11-14',4);
INSERT INTO alumno VALUES (5,'bernardo','puentes','1975-12-19',5);

INSERT INTO modulo VALUES (1,'matematica',5,1);
INSERT INTO modulo VALUES (2,'geografia',4,2);
INSERT INTO modulo VALUES (3,'historia',3,3);
INSERT INTO modulo VALUES (4,'fisica',2,4);
INSERT INTO modulo VALUES (5,'programacion',1,5);


## CONSULTA -----------------------------------


SELECT p.nombre AS 'Nombre Profesor' , p.dni, a.nombre AS 'Nombre Alumno', a.apellido AS 'Apellido alumno', m.nombre AS 'Modulo', d.idDelegado AS 'Delegado', c.idCurso AS 'Curso'
FROM delegado d
INNER JOIN curso c ON c.Delegado_idDelegado = d.idDelegado
INNER JOIN alumno a ON a.Curso_idCurso = c.idCurso
INNER JOIN modulo m ON m.alumno_idAlumno = a.nro_expediente
INNER JOIN profesores p ON m.profesores_idProfesores = p.idProfesores;