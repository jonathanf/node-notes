const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    edad: 50,
    getNombre: function(){
        return `${this.nombre} ${this.apellido}`
    }

}

function imprimeHeroe( {nombre, apellido, poder, edad = 0} ){

    console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [ , , h3] = heroes;

console.log(h3);