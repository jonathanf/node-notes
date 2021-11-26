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
    const empleado = empleados.find( (e) => e.id === id );
    if (empleado){
        callback( null, empleado );
    } else {
        callback( `Empleado id ${id} no existe`)
    }
}

const getSalarioByID = (id, callback) => {
    const salario = salarios.find( (s) => s.id === id );
    if ( salario ){
        callback( null, salario );
    } else {
        callback( `Salario del empleado id ${id} no existe`)
    }
}

const id = 1;

getEmpleadoByID( id, ( err, empleado ) => {
    if ( err ){
        return console.log(err);
    }
    console.log( "Empleado existe");
    console.log( empleado );
} );

getSalarioByID( id, ( err, salario ) => {
    if ( err ){
        return console.log(err);
    }
    console.log( "Salario existe");
    console.log( salario );
} );
