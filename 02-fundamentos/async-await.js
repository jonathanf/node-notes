const empleados = [
    {
        id: 1,
        nombre: "Jonathan"
    },
    {
        id: 2,
        nombre: "Santiago"
    },
    {
        id: 3,
        nombre: "Carolina"
    }
];

const salarios = [
    {
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 650
    }
];


const getEmpleadoByID = (id, callback) => {
    return new Promise( (resolve, reject) => {
        const empleado = empleados.find( (e) => e.id === id )?.nombre;
        (empleado)
        ? resolve( empleado )
        : reject( `No existe empleado con id ${id}` )
    } );
}


const getSalarioByID = (id, callback) => {
    return new Promise( (resolve, reject) => {
        const salario = salarios.find( (s) => s.id === id )?.salario;
        (salario)
        ? resolve( salario )
        : reject( `El empleado con id ${id} no tiene un salario registrado` )
    } );
}

const getInfoUsuario = async() => {
    try {
        const empleado = await getEmpleadoByID( id );
        const salario = await getSalarioByID( id );
    
        return `Empleado ${empleado} tiene un salario ${salario}`
    } catch ( error ) {
        return error;
    }
}

const id = 3;

getInfoUsuario( id )
    .then( msg => console.log( msg ) )
    .catch( err => console.log( err ) );


