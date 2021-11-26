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


// getEmpleadoByID(id)
//     .then( empleado => console.log(empleado) )
//     .catch( err => console.log(err) )

// getSalarioByID(id)
//     .then( salario => console.log(salario) )
//     .catch( err => console.log(err) )

const id = 4;
let nombre;

getEmpleadoByID(id)
    .then( empleado => {
        nombre = empleado;
        return getSalarioByID( id );
    } )
    .then( salario => console.log(`El empleado ${nombre} tiene un salario de ${salario}`) )
    .catch( err => console.log(err) );

