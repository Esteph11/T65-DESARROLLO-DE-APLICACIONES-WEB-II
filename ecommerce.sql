create database ecommerce;
use ecommerce;

create table producto(
	IdProducto integer primary key auto_increment,
    nombre varchar(50),
    precioProducto float,
    Isv float,
    img text
)

INSERT INTO `producto` (`nombre`, `precioProducto`, `Isv`, `img`) VALUES   
('Zapatos', '', 12.50, 1),   
('Tenis', 'Lechuga, crutones, parmesano, y aderezo César', 7.00, 2),  
('Camisa', 'Jugo de naranja natural', 3.00, 3),  
('Pantalon', 'Postre italiano con café, un toque de licor y mascarpone', 6.50, 4),  
('Chaqueta', 'Pizza clásica con tomate, mozzarella y albahaca', 10.00, 1),  
('Sopa de Tomate', 'Sopa cremosa de tomate con hierbas frescas', 5.50, 2),  
('Café Espresso', 'Café espresso corto y fuerte', 2.50, 3);

Select * FROM menu;