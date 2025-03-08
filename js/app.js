// El principal objetivo de este desafío es fortalecer tus habilidades en lógica 
// de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//VARIABLES
let amigos = [];
let indiceMaximo = 0;
let listaNombresSorteados = [];

// Desarrolla una función, que permita al usuario ingresar un nombre en 
// el campo de texto y añadirlo a la lista de amigos creada anteriormente.
function agregarAmigo(){
    // Capturar el valor del campo de entrada
    let nombre = document.getElementById('amigo').value;
    
    //validar la entrada
    if(validarEntrada(nombre)){
        actualizarListaDeAmigos();
        condicionesInciales();
        return true;
    }
}

function validarEntrada(nombreIngresado){
    if(nombreIngresado == ''){
        alert('Por favor, inserte un nombre.');
        return false;
    }else{
        console.log(nombreIngresado);
        // Actualizar el array de amigos
        amigos.push(nombreIngresado);
        indiceMaximo++;
        return true;
    }
}

// Crea una función que recorra el array amigos y agregue cada nombre como 
// un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la 
// lista antes de agregar nuevos elementos.
function actualizarListaDeAmigos(){
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
   limpiarLista('listaAmigos');
    if(indiceMaximo > 0){
        // Iterar sobre el arreglo
        for(let i=0; i<indiceMaximo; i++){
            // Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
            let obtenerNombre = document.createElement('li');
            obtenerNombre.innerHTML = amigos[i];
            lista.appendChild(obtenerNombre);
        }

    }
    else{
        return lista.innerHTML = "";
    }
}

// Escribe una función que seleccione de manera aleatoria uno de los nombres 
// almacenados en el array amigos.
function sortearAmigo(){
    // Mostrar el resultado
    if(indiceMaximo == 0){
        alert('No hay amigos disponibles para sortear');
        return;
    }
    else {
        // Obtener el nombre sorteado
        let nombreSorteado = amigos[generarIndiceAleatorio()];
        console.log(nombreSorteado);
        return document.getElementById('resultado').innerHTML = nombreSorteado;
    }
}

function generarIndiceAleatorio(){
    // Generar un índice aleatorio
    console.log('maximo:', indiceMaximo);
    let indiceAlteatorio = Math.floor(Math.random()*indiceMaximo);
    console.log('indice aleatorio:',indiceAlteatorio);

    // Validar que haya amigos disponibles
    if(listaNombresSorteados.length == indiceMaximo){
        alert('Ya se sortearon todos los nombres posibles.');
        return listaNombresSorteados[listaNombresSorteados.length -1];
    }
    else{
        if(listaNombresSorteados.includes(indiceAlteatorio)){
            return generarIndiceAleatorio();
        }else{
            listaNombresSorteados.push(indiceAlteatorio);
            return indiceAlteatorio;
        }
    }
    
}

function condicionesInciales(){
    // Limpiar el campo de entrada
    document.querySelector('#amigo').value = '';

    //Al ingresar un nuevo nombre el sorteo de amigos se reinicia
    listaNombresSorteados = [];
    limpiarLista('resultado');
}

function limpiarLista(idLista){
    return document.querySelector(`#${idLista}`).innerHTML = '';
}
