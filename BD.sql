CREATE DATABASE Repositorio;

USE Repositorio;

CREATE TABLE Documentos (
    id INT AUTO_INCREMENT,
    tipo VARCHAR(255),
    carrera VARCHAR(255),
    titulo VARCHAR(255),
    autor VARCHAR(255),
    year YEAR,
    ruta_pdf VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO Documentos (tipo, carrera, titulo, autor, year, ruta_pdf)
VALUES ('Proyecto de grado', 'Ingeniería en redes y telecomunicaciones', 'DISEÑO DE RED CON ERBIUM DOPED 
FIBER AMPLIFIER Y TECNOLOGÍA 
GIGABIT PASSIVE OPTICAL NETWORK 
CON SERVICIOS DE BANDA ANCHA EN 
LA ZONA SAN ANTONIO ALTO
CASO: COOPERATIVA COTEL R.L.', 'Valeria Iris Tapia Moreno
', 2022, 'C:\Users\vergh\OneDrive\Escritorio\Repositorio_upds\pdf\proyecto1.pdf');

select * from Documentos;
DELETE FROM Documentos WHERE id = 4;

create table usuarios (
id_usuario int auto_increment primary key,
nombre varchar (255),
contraseña varchar (60)
);
insert into usuarios  (nombre, contraseña)
values('sorel', '1234');

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sorel';
FLUSH PRIVILEGES;


SELECT VERSION();