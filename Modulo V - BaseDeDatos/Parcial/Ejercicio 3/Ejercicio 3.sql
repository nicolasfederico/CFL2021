-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Ejercicio3
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Ejercicio3
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Ejercicio3` DEFAULT CHARACTER SET utf8 ;
USE `Ejercicio3` ;

-- -----------------------------------------------------
-- Table `Ejercicio3`.`Profesores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ejercicio3`.`Profesores` (
  `idProfesores` INT NOT NULL,
  `dni` INT(8) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `telefono` INT NOT NULL,
  PRIMARY KEY (`idProfesores`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ejercicio3`.`Delegado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ejercicio3`.`Delegado` (
  `idDelegado` INT NOT NULL,
  `nro_expediente_alumno` INT NOT NULL,
  PRIMARY KEY (`idDelegado`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ejercicio3`.`Curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ejercicio3`.`Curso` (
  `idCurso` INT NOT NULL,
  `Delegado_idDelegado` INT NOT NULL,
  PRIMARY KEY (`idCurso`, `Delegado_idDelegado`),
  INDEX `fk_Curso_Delegado1_idx` (`Delegado_idDelegado` ASC) VISIBLE,
  CONSTRAINT `fk_Curso_Delegado1`
    FOREIGN KEY (`Delegado_idDelegado`)
    REFERENCES `Ejercicio3`.`Delegado` (`idDelegado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ejercicio3`.`Alumno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ejercicio3`.`Alumno` (
  `nro_expediente` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `fecha_nacimiento` DATE NOT NULL,
  `Curso_idCurso` INT NOT NULL,
  PRIMARY KEY (`nro_expediente`),
  INDEX `fk_Alumno_Curso1_idx` (`Curso_idCurso` ASC) VISIBLE,
  CONSTRAINT `fk_Alumno_Curso1`
    FOREIGN KEY (`Curso_idCurso`)
    REFERENCES `Ejercicio3`.`Curso` (`idCurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ejercicio3`.`Modulo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ejercicio3`.`Modulo` (
  `idModulo` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `Profesores_idProfesores` INT NOT NULL,
  `Alumno_idAlumno` INT NOT NULL,
  PRIMARY KEY (`idModulo`),
  INDEX `fk_Modulo_Profesores_idx` (`Profesores_idProfesores` ASC) VISIBLE,
  INDEX `fk_Modulo_Alumno1_idx` (`Alumno_idAlumno` ASC) VISIBLE,
  CONSTRAINT `fk_Modulo_Profesores`
    FOREIGN KEY (`Profesores_idProfesores`)
    REFERENCES `Ejercicio3`.`Profesores` (`idProfesores`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Modulo_Alumno1`
    FOREIGN KEY (`Alumno_idAlumno`)
    REFERENCES `Ejercicio3`.`Alumno` (`nro_expediente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
