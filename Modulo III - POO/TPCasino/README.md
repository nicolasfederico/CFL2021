# Trabajo Práctico Objetos – Casino POO

## Introducción

Este trabajo práctico consiste en la creación de un Casino, en el cual debemos contar con 2 Tragamonedas (clase padre y herencia,) y 2 juegos a elección. En ese caso yo opté por hacer un juego de la Ruleta y uno de Turf. Los tragamonedas poseen su carga de configuración desde un .txt. Todos los juegos cuentan con logs de resultados que se dan en formato .txt también y los cuales se crean al momento de hacer la primera jugada en cada uno de ellos.

##### Módulos adicionales usados:

* _readline-sync_
* _project-name-generator_


### Juegos

#### Tragamonedas
Tragamoneda convencional de 3 rodillos. El pozo del premio, la cantidad de rodillos y el monto de la apuesta son leidas desde un .txt. Tanto esta clase como la Tragamonedas Con Bonus, comparten el mismo .txt pero no así sus parámetros de configuración.  El resultado de la jugada es registrada en un Log. Pregunta al inicio del juego por el monto que el usuario desee cargar a la máquina. Cuando éste sea agotado, no permitirá seguir jugando.

#### Tragamonedas Con Bonus

Lo mismo que el anterior, excepto que hereda la clase padre Tragamonedas.ts y agrega un atributo y un método el cual otorga o no el bono de premio al azar, además de recibir otros parámetros de configuración del archivo .txt.



#### Ruleta

En este juego se toma la ruleta tradicional del casino. Cuenta con un menú donde se elige si se desea jugar a Pleno, Color o Par/Inpar. Cada tipo de apuesta da su premio propio. Los resultados son guardados en un .txt.


#### Turf
En este juego se simula una carrera de caballos. Se crea aleatoriamente una carrera con nombres de caballos y sus dividendos también aleatorios. Se muestra en pantalla y se le pide al usuario que ingrese el número de caballo al cual desea apostar y el monto de su apuesta. Si resulta ganador, se le paga al usuario el resultado de su monto de apuesta por el dividendo que paga su caballo ganador.

## Instalación
Para proceder a la instalación hay que seguir los siguientes pasos:

Crear una nueva carpeta y clonar el branch del directorio git-hub en ella:
```
$ git clone -b casino-poo https://github.com/nicolasfederico/CFL2021
```
Luego dirigirse al directorio del proyecto:

* ___CFL2021\Modulo III - POO\TPCasino___

Abrir una terminal integrada en ese directorio y correr los siguientes comandos:

```
$ npm i
$ npm run build
```
***
## Uso

Abrir una terminal integrada en el directorio del programa y correr los siguientes comandos:
```
$ npm run casino
```
***
# Diagrama UML

![diagrama UML](https://i.ibb.co/31f52T7/Casino.jpg)