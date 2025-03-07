// El principal objetivo de este desafío es fortalecer tus habilidades en lógica 
// de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//VARIABLES
let amigos = [];

// Desarrolla una función, que permita al usuario ingresar un nombre en 
// el campo de texto y añadirlo a la lista de amigos creada anteriormente.
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    console.log(nombre);

    //validar la entrada
    if(nombre == ''){
        alert('Por favor, inserte un nombre.');
    }else{
        amigos.push(nombre);
        limpiarEntrada();
    }

    console.log(amigos);
    obtenerNombres();
    actualizarListaDeAmigos();
}

function limpiarEntrada(){
    document.querySelector('#amigo').value = '';
    return;
}

/*Capturar el valor del campo de entrada: Utilizar document.getElementById o 
document.querySelector para obtener el texto ingresado por el usuario.

Validar la entrada: Implementar una validación para asegurarse de que el campo 
no esté vacío. Si está vacío, mostrar un alert con un mensaje de 
error: "Por favor, inserte un nombre."

Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que 
almacena los nombre de amigos usando el método.push().

Limpiar el campo de entrada: Después de añadir el nombre, restablecer el 
campo de texto a una cadena vacía.
*/



/*
Crea una función que recorra el array amigos y agregue cada nombre como 
un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la 
lista antes de agregar nuevos elementos.

Obtener el elemento de la lista: Utilizar document.getElementById() o 
document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse 
de que no haya duplicados al actualizar.

Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos 
y crear elementos de lista (<li>) para cada título.

Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
*/
function actualizarListaDeAmigos(){
    let lista = document.getElementById('listaAmigos');
    //Limpiar la lista para asegurar de que no haya duplicados
    if(amigos.length > 0){
        let elementoLi = document.createElement("li");
        for(let i=0; i<amigos.length; i++){
            lista.innerHTML += elementoLi.innerHTML = amigos[i];
            console.log(lista);
    }
    }
    else{
        return lista.innerHTML = "";
    }
}

function obtenerNombres(){
    let elementoLi = document.createElement("li");
    for(let i=0; i<amigos.length; i++){
        elementoLi.innerHTML = amigos[i];
        console.log(elementoLi);
    }
}
