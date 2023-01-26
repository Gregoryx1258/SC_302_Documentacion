//G4
// Desarrollador 1 

let frutas = ["manzana", "plátano", "pera", "mango"]; 
// Desarrollador 2 

function imprimirFrutas() { 

    console.log(frutas); 

} 
// Desarrollador 3 

function agregarFruta(fruta) { 

    frutas.push(fruta); 

} 
// Desarrollador 2 

function eliminarFruta(fruta) { 

    let index = frutas.indexOf(fruta); 

    if (index > -1) { 

        frutas.splice(index, 1); 

    } 

} 

// *************** Espacio para desarrollador 4 ********************

// *************** Espacio para desarrollador 4 ********************
// Desarrollador 3 

imprimirFrutas();  

 

eliminarFruta("plátano"); 
// Desarrollador 1 

imprimirFrutas();  
