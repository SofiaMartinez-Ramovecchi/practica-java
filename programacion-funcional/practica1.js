//desestructuracion

//  FUNCIONES DE ORDEN SUPERIOR
// PASA FUNCIONES POR ARG O RETURNA FUNCIONES
// tanto asi retornar funciones como pasar por argumento
const person = {
    name: 'tony',
    age: 45,
    key: 'ironman'
};

const { name, age, key } = person;

console.log(name); 
console.log(age); 


const prop = key => obj => obj[key];

//const name = prop('name'); 

console.log(name(person));
//desestructuracion
const numeros = [1,2,3,4,5,6,7,8,9,10];
const first = ([ num1, ..._rest]) => num1;
const rest = ([_num1, ...rest]) => rest;

console.log(first(numeros));
console.log(rest(numeros));

//funcion pura mapeo entre dos conjuntos


//homomorfismo func que trans un tipo de dato al mismo tipo de dato
//isomorfismo func que trans un tipo de dato a otro tipo de dato diferente

const cade  = "hola mundo";
//funcion pura: primer mapeo
//la llamas 10 veces da lo mismo siempre, no depende de nada solo su arg
const largo = str => str.length;

const lista = [1,2,3,4,5,6,7,8,9,10];

//const new_list = lista.slice( 2 );
//siempre intentar de hacer funciones puras aunque sea programacion a objetos u otro paradigma

//inmutabilidad 
const new_list = lista.splice( 2 );
//splice no es inmutable


//funciones puras, trabajo solo con variables de entrada y no hago llamadas al sistema
//esto es una funcion de orden superior porque recibe una funcion de parametro
lista.map( item => item * 2 );

//transparencia referencial:
//poder reemplazar metodos por valores ya que es funcion pura

