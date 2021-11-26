
// setTimeout( () => {
//     console.log("Hola Mundo!!")
// }, 1000);

const getUserByID = ( id, callback ) => {
    const usuario = {
        id,
        nombre: "Jonathan"
    }

    setTimeout( () => {
        callback( usuario )
    }, 1500)
}

getUserByID(10, ( usuario ) => {
    console.log(usuario);
    console.log(usuario.nombre.toUpperCase());
});