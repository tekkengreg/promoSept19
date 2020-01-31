import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ src }) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        axios.get(src, { header: "" })
            .then(r => setImage(r.data))
    }, []);

    if (image)
        return <img src={image} />
    return ""
}