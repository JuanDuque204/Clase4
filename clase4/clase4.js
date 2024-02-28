//arreglos

let numeros =[10.32,1,100,32]

//cualquier tipo de dato
const varios = ["juan", true, 10, null, 3.0]

console.log(numeros);
console.log(varios[0]);

console.log(varios.length);

//agregar al final
numeros.push("colombia");
console.log(numeros);

//quitar el ultimo
numeros.pop();
console.log(numeros);


//poner al inicio
numeros.unshift("sapa");
console.log(numeros);

//quitar el primero
numeros.shift();
console.log(numeros);


//metodos para arreglos

//1. .reduce()

let reducido = numeros.reduce((acumulador,valoractual)=>{

    return acumulador+valoractual;

})

console.log(reducido);


//2. .filter()

let filtrado = numeros.filter(dato =>{

    return dato >10;

})
console.log(filtrado);


let strings = ["colombia","Brasil", "comoros","sapa","copero"];


console.log(strings.filter(dato =>{

    
    return dato.startsWith("co");
}));


//3. .map()

let mapeo= strings.map(pais =>{

    return pais.concat(" sapa");

})
console.log(mapeo);

let mapped = numeros.map(num =>{

    return Math.pow(num,2);
})

console.log(mapped);


// foreach

numeros.forEach(num=>{

    console.log(num);

});

