-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Ejercicio2
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Ejercicio2
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Ejercicio2` DEFAULT CHARACTER SET utf8 ;
USE `Ejercicio2` ;

-- -----------------------------------------------------
-- Table `Ejercicio2`.`Empresa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ejercicio2`.`Empresa` (
  `idEmpresa` INT NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEmpresa`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ejercicio2`.`Camionero`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ejercicio2`.`Camionero` (
  `idCamionero` INT NOT NULL,
  `dni` INT(8) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `telefono` INT NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `salario` INT NOT NULL,
  `poblacion` VARCHAR(45) NOT NULL,
  `Empresa_idEmpresa` INT NOT NULL,
  PRIMARY KEY (`idCamionero`, `Empresa_idEmpresa`),
  INDEX `fk_Camionero_Empresa1_idx` (`Empresa_idEmpresa` ASC) VISIBLE,
  CONSTRAINT `fk_Camionero_Empresa1`
    FOREIGN KEY (`Empresa_idEmpresa`)
    REFERENCES `Ejercicio2`.`Empresa` (`idEmpresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ejercicio2`.`Provincia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ejercicio2`.`Provincia` (
  `idProvincia` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idProvincia`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ejercicio2`.`Camion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ejercicio2`.`Camion` (
  `matricula` VARCHAR(7) NOT NULL,
  `modelo` INT NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  `potencia` INT NOT NULL,
  PRIMARY KEY (`matricula`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ejercicio2`.`Viaje`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ejercicio2`.`Viaje` (
  `idViaje` INT NOT NULL,
  `Camion_matricula` VARCHAR(7) NOT NULL,
  `Camionero_idCamionero` INT NOT NULL,
  PRIMARY KEY (`idViaje`, `Camion_matricula`, `Camionero_idCamionero`),
  INDEX `fk_Viaje_Camion1_idx` (`Camion_matricula` ASC) VISIBLE,
  INDEX `fk_Viaje_Camionero1_idx` (`Camionero_idCamionero` ASC) VISIBLE,
  CONSTRAINT `fk_Viaje_Camion1`
    FOREIGN KEY (`Camion_matricula`)
    REFERENCES `Ejercicio2`.`Camion` (`matricula`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Viaje_Camionero1`
    FOREIGN KEY (`Camionero_idCamionero`)
    REFERENCES `Ejercicio2`.`Camionero` (`idCamionero`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ejercicio2`.`Paquete`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ejercicio2`.`Paquete` (
  `idPaquete` INT NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `destinatario` VARCHAR(45) NOT NULL,
  `direccion_destinatario` VARCHAR(45) NOT NULL,
  `Provincia_idProvincia` INT NOT NULL,
  `Viaje_idViaje` INT NOT NULL,
  `Viaje_Camion_matricula` VARCHAR(7) NOT NULL,
  `Viaje_Camionero_idCamionero` INT NOT NULL,
  PRIMARY KEY (`idPaquete`, `Provincia_idProvincia`, `Viaje_idViaje`, `Viaje_Camion_matricula`, `Viaje_Camionero_idCamionero`),
  INDEX `fk_Paquete_Provincia1_idx` (`Provincia_idProvincia` ASC) VISIBLE,
  INDEX `fk_Paquete_Viaje1_idx` (`Viaje_idViaje` ASC, `Viaje_Camion_matricula` ASC, `Viaje_Camionero_idCamionero` ASC) VISIBLE,
  CONSTRAINT `fk_Paquete_Provincia1`
    FOREIGN KEY (`Provincia_idProvincia`)
    REFERENCES `Ejercicio2`.`Provincia` (`idProvincia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Paquete_Viaje1`
    FOREIGN KEY (`Viaje_idViaje` , `Viaje_Camion_matricula` , `Viaje_Camionero_idCamionero`)
    REFERENCES `Ejercicio2`.`Viaje` (`idViaje` , `Camion_matricula` , `Camionero_idCamionero`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
