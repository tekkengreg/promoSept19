USE paint;

SELECT * FROM primitive_shape;
SELECT * FROM primitive_color;
SELECT * FROM drawing;
SELECT * FROM form;

### MY BIG SELECT
SELECT d.name, ps.display_name, pc.display_name, pc.code, f.size, f.x, f.y, f.orientation FROM drawing as d
	INNER JOIN form as f ON d.id = f.drawing_id
    INNER JOIN primitive_shape AS ps ON ps.id =	 f.primitive_shape_id
    INNER JOIN primitive_color AS pc ON pc.id = f.primitive_color_id;