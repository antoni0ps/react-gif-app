import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);


    useEffect(() => {
        getGifs(category)
            .then(gifs => setImages(gifs)) //La funcion getGifs devuelve una promesa y para resolverla usamos setImages

    }, [category]);    //agregamos la categoría en las dependencias, si la categoría cambia, el componente se vuelve a renderizar.



    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            <div className="card-grid">

                {
                    images.map(img => {
                        return <GifGridItem
                            key={img.id}
                            {...img} />  //Se envían todas las props de la imagen como una propiedad independiente (id, title y urlº    )
                    })
                }

            </div>
        </>
    )
}

export default GifGrid