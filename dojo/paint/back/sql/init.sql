SHOW databases;

CREATE DATABASE paint;
USE paint;


### PRIMITIVE SHAPE
CREATE TABLE primitive_shape (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL, 
    display_name VARCHAR(20),
	PRIMARY KEY (id)
);



INSERT INTO primitive_shape
		(name, display_name)
	VALUES 
		('square', 'Square'),
		('circle', 'Circle'),
        ('triangle', 'Triangle');
        
### PRIMITIVE COLOR
CREATE TABLE primitive_color (
	id INT NOT NULL AUTO_INCREMENT,
    code VARCHAR(7) NOT NULL,
    display_name VARCHAR(20) NOT NULL,
	PRIMARY KEY (id)
);
INSERT INTO primitive_color
		(display_name, code)
	VALUES 
		('Red', '#FF0000'),
		('Green', '#00FF00'),
        ('Blue', '#0000FF');
        


### DRAWING
CREATE TABLE drawing (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    owner VARCHAR(20) NOT NULL,
	PRIMARY KEY (id)
);
INSERT INTO drawing
		(name, owner)
	VALUES 
		('my_artwork.png', 'Picasso'),
		('my_artwork_copy.png', 'Piccaso');
        

### FORM
CREATE TABLE form (
	id INT NOT NULL AUTO_INCREMENT,
    drawing_id INT NOT NULL,
    primitive_shape_id INT NOT NULL,
    primitive_color_id INT NOT NULL,
    size DOUBLE,
    x DOUBLE,
    y DOUBLE,
    orientation DOUBLE,
	PRIMARY KEY (id),
	FOREIGN KEY (drawing_id)
		REFERENCES drawing(id),
	FOREIGN KEY (primitive_shape_id)
		REFERENCES primitive_shape(id),
    FOREIGN KEY (primitive_color_id)
		REFERENCES primitive_color(id)
);
INSERT INTO form
		(drawing_id, primitive_shape_id,primitive_color_id, size, x, y, orientation )
	VALUES 
		( 1, 1, 3, 1  , 10, 14, 0),
		( 1, 2, 2, 2  , 50, 34, 0),
		( 1, 3, 1, 1.5, 60, 24, 10);
        

    

SHOW TABLES;