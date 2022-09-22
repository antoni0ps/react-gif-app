import { useEffect } from 'react';
import { useState } from 'react'
import { getGifs } from '../helpers/getGifs';



// CUSTOM HOOK (función con estados personalizada)

export const useFetchGifs = (category) => {


    //Creamos un estado que devuelve por defecto un objeto con un campo data y un campo loading
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)   //La funcion getGifs devuelve una promesa y para resolverla usamos setImages
            .then(gifs => {
                setState({
                    data: gifs,
                    loading: false
                });
            })

    }, []);    //agregamos la categoría en las dependencias, si la categoría cambia, el componente se vuelve a renderizar.





    return state; //{ data:[], loading: true }
}