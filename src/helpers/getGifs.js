


/**
 * Función que devuelve todos los gifs de la categoría que le indicamos por parámetro
 * haciendo una petición a la api de giphy.com, (límite 10 resultados)
 */

    export const getGifs = async (category) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURIComponent(category) }&limit=20&api_key=WEGxNXdcfZdTblRFILtY22yR9TWugenB`
        const resp = await fetch(url)
        const { data: images } = await resp.json();

        const gifs = images.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        return gifs;

    }