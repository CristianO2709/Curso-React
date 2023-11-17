export const getImagen = async() => {

    try {
        //para que falle y entre en el catch debo de eliminar la api key en la pagina de giphy API
        const apiKey = '1t1oIdqXCZwUcIeHJrXKTw4bA1Qx7qVW';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;
    } catch (error) {
        // manejo del error
        // console.error(error);
        return 'No se encontro la imagen';
    }
    
    
    
}

 getImagen();



