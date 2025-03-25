create database gestionproductos;

use gestionproductos;

CREATE TABLE productos (  
    partNumber VARCHAR(250) PRIMARY KEY,  
    productType VARCHAR(250),  
    categoryCode VARCHAR(250),  
    brandCode VARCHAR(250),  
    familyCode VARCHAR(250),  
    lineCode VARCHAR(250),  
    productSegmentCode VARCHAR(250),  
    status VARCHAR(250),  
    value DECIMAL(10, 2),  
    valueCurrency VARCHAR(250),  
    defaultQuantityUnits VARCHAR(250),  
    name VARCHAR(250),  
    description TEXT,  
    plannerCode VARCHAR(250),  
    sourceLink VARCHAR(250)  
);  

SHOW VARIABLES LIKE "secure_file_priv";

LOAD DATA INFILE 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\Product_v6.csv'
INTO TABLE productos
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;

/*1.Contar productos en la tabla:*/
SELECT COUNT(*) AS total_productos FROM productos;  


/*2.Calcular el valor total de todos los productos*/
SELECT SUM(value) AS valor_total_productos FROM productos;  

/*3.Obtener el valor promedio de los productos*/
SELECT AVG(value) AS valor_promedio_productos FROM productos;  

/*4.Encontrar el producto con el valor más alto*/
SELECT partNumber, value FROM productos ORDER BY value DESC LIMIT 1;  

/*5.Encontrar el producto con el valor más bajo*/
SELECT partNumber, value FROM productos ORDER BY value ASC LIMIT 1;  

/*6.Contar el número de productos de cada tipo de moneda (valueCurrency)*/
SELECT valueCurrency, COUNT(*) AS numero_productos FROM productos GROUP BY valueCurrency;  

/*7.Calcular el valor promedio de los productos por cada tipo de moneda (valueCurrency)*/
SELECT valueCurrency, AVG(value) AS valor_promedio FROM productos GROUP BY valueCurrency;  

/*8.Obtener el valor total de los productos por productType*/
SELECT productType, SUM(value) AS valor_total FROM productos GROUP BY productType;  

/*9.Encontrar el valor máximo y mínimo por productType*/
SELECT productType, MAX(value) AS valor_maximo, MIN(value) AS valor_minimo FROM productos GROUP BY productType;  

/*10.Calcular el valor promedio de productos por cada categoryCode*/
SELECT categoryCode, AVG(value) AS valor_promedio FROM productos GROUP BY categoryCode;  

/*11.Contar productos disponibles en cada status*/
SELECT status, COUNT(*) AS cantidad_productos FROM productos GROUP BY status;  

/*12.Calcular el valor total de productos en cada brandCode*/
SELECT brandCode, SUM(value) AS valor_total FROM productos GROUP BY brandCode;  

/*13.Obtener el número total de códigos de productos únicos (partNumber)*/
SELECT COUNT(DISTINCT partNumber) AS total_productos_unicos FROM productos;  

/*14.Calcular el valor promedio y la cantidad de productos por cada lineCode*/
SELECT lineCode, AVG(value) AS valor_promedio, COUNT(*) AS cantidad_productos FROM productos GROUP BY lineCode;  

/*15.Encontrar el producto con el valor más alto por cada plannerCode*/
SELECT  
    plannerCode,  
    partNumber,  
    value  
FROM  
    (  
        SELECT  
            plannerCode,  
            partNumber,  
            value,  
            ROW_NUMBER() OVER (PARTITION BY plannerCode ORDER BY value DESC) AS rn  
        FROM  
            productos  
    ) AS subquery  
WHERE  
    rn = 1;  

