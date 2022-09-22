import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {


   
    const { data, loading } = useFetchGifs(category);



    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                
                {
                    data.map(img => {
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