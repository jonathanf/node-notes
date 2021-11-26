console.log('Inicio de programa');

setTimeout( () => { 
    console.log('Primer TO')
}, 3000 );


setTimeout( () => { 
    console.log('Segundo TO')
}, 0 );


setTimeout( () => { 
    console.log('Tercer TO')
}, 0 );

console.log('Fin de programa');