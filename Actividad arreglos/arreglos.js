//funcion para crear arreglo de numeros aleatorios
 const CrearArreglo = cantidad =>{
    let array = [];
    for (let i =0; i < cantidad; i++){
        array.push(Math.floor(Math.random()*100));
    }
    return array;
 }

 //numeros pares con filter
 const numerosPares = arreglo =>{

    return arreglo.filter(numero => numero % 2 === 0);
 }

 //numeros al cuadrado con map

 const alcuadrado = arreglo =>{
    
    return arreglo.map(numero => Math.pow (numero,2));
 }

 //sumar todos los numeros con reduce y callbackfn

 const sumar = arreglo =>{
    
    return arreglo.reduce((acumulador,valorActual) => acumulador + valorActual,0);
 }


 //mostrar resultados

 let numerosRandom = CrearArreglo(15);
 console.log("Array numeros randoms", numerosRandom);


 let Pares = numerosPares(numerosRandom);
 console.log("Los numeros pares son: ", Pares);

 let cuadrado = alcuadrado(numerosRandom);
 console.log("Los numeros al cuadrado son: ", cuadrado);

 let sumaTotal = sumar(numerosRandom);
 console.log("La suma del array es: ", sumaTotal);

 


