-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Ejercicio4
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Ejercicio4
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Ejercicio4` DEFAULT CHARACTER SET utf8 ;
USE `Ejercicio4` ;

-- -----------------------------------------------------
-- Table `Ejercicio4`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ejercicio4`.`Cliente` (
  `idCliente` INT NOT NULL,
  `dni` INT(7) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `telefono` INT NOT NULL,
  PRIMARY KEY (`idCliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ejercicio4`.`Venta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ejercicio4`.`Venta` (
  `idVenta` INT NOT NULL,
  `Cliente_idCliente` INT NOT NULL,
  `fecha` TIMESTAMP NOT NULL,
  PRIMARY KEY (`idVenta`),
  INDEX `fk_Venta_Cliente1_idx` (`Cliente_idCliente` ASC) VISIBLE,
  CONSTRAINT `fk_Venta_Cliente1`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `Ejercicio4`.`Cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ejercicio4`.`Coche`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ejercicio4`.`Coche` (
  `matricula` VARCHAR(7) NOT NULL,
  `modelo` INT NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  `nuevo` TINYINT(1) NOT NULL,
  `cantidad_kilometros` INT NULL,
  `Venta_idVenta` INT NULL,
  PRIMARY KEY (`matricula`),
  INDEX `fk_Coche_Venta_idx` (`Venta_idVenta` ASC) VISIBLE,
  CONSTRAINT `fk_Coche_Venta`
    FOREIGN KEY (`Venta_idVenta`)
    REFERENCES `Ejercicio4`.`Venta` (`idVenta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ejercicio4`.`Coche_a_reparar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ejercicio4`.`Coche_a_reparar` (
  `matricula` INT NOT NULL,
  `modelo` VARCHAR(45) NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  `Cliente_idCliente` INT NOT NULL,
  PRIMARY KEY (`matricula`),
  INDEX `fk_Coche_a_reparar_Cliente1_idx` (`Cliente_idCliente` ASC) VISIBLE,
  CONSTRAINT `fk_Coche_a_reparar_Cliente1`
    FOREIGN KEY (`Cliente_idCliente`)
    REFERENCES `Ejercicio4`.`Cliente` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ejercicio4`.`Reparacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ejercicio4`.`Reparacion` (
  `idReparacion` INT NOT NULL,
  `duracion_horas` VARCHAR(45) NOT NULL,
  `fecha_reparacion` DATE NOT NULL,
  `Coche_a_reparar_matricula` INT NOT NULL,
  PRIMARY KEY (`idReparacion`, `Coche_a_reparar_matricula`),
  INDEX `fk_Reparacion_Coche_a_reparar1_idx` (`Coche_a_reparar_matricula` ASC) VISIBLE,
  CONSTRAINT `fk_Reparacion_Coche_a_reparar1`
    FOREIGN KEY (`Coche_a_reparar_matricula`)
    REFERENCES `Ejercicio4`.`Coche_a_reparar` (`matricula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ejercicio4`.`Mecanico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ejercicio4`.`Mecanico` (
  `idMecanico` INT NOT NULL,
  `dni` INT(7) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `fecha_contratacion` DATE NOT NULL,
  `salario` INT NOT NULL,
  `Reparacion_idReparacion` INT NOT NULL,
  PRIMARY KEY (`idMecanico`, `Reparacion_idReparacion`),
  INDEX `fk_Mecanico_Reparacion1_idx` (`Reparacion_idReparacion` ASC) VISIBLE,
  CONSTRAINT `fk_Mecanico_Reparacion1`
    FOREIGN KEY (`Reparacion_idReparacion`)
    REFERENCES `Ejercicio4`.`Reparacion` (`idReparacion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
