import React from 'react'

export const Formulario = () => {

    const enviar = e => {
        
        e.preventDefault();
      
        let pelicula = {
            titulo: e.target.titulo.value,
            genero: e.target.genero.value,
            director: e.target.director.value
        }


        let Metadatos = {
            method: 'POST',
            body: JSON.stringify(pelicula),
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            },
        };

        fetch("/peliculas", Metadatos)
            .then((res) => console.log(res))
    }

    return (
        <div>
            <h1>Introduce una nueva película</h1>

            <form onSubmit={enviar}>
                <input type="text" name="titulo" placeholder='Titulo' />
                <input type="text" name="genero" placeholder='genero' />
                <input type="text" name="director" placeholder='director' />
                <input type="submit" name="enviar" value='enviar' />
            </form>
        </div>
    )
}
