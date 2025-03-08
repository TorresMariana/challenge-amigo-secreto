// El principal objetivo de este desafío es fortalecer tus habilidades en lógica 
// de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//VARIABLES
let amigos = [];
let indiceMaximo = amigos.length;

// Desarrolla una función, que permita al usuario ingresar un nombre en 
// el campo de texto y añadirlo a la lista de amigos creada anteriormente.
function agregarAmigo(){
    // Capturar el valor del campo de entrada: Utilizar document.getElementById o 
    // document.querySelector para obtener el texto ingresado por el usuario.
    let nombre = document.getElementById('amigo').value;
    console.log(nombre);

    //validar la entrada
    if(nombre == ''){
        alert('Por favor, inserte un nombre.');
    }else{
        // Actualizar el array de amigos
        amigos.push(nombre);
        // Limpiar el campo de entrada
        document.querySelector('#amigo').value = '';
        actualizarListaDeAmigos();
    }

    console.log(amigos);
}

function limpiarEntrada(){
    document.querySelector('#amigo').value = '';
    return;
}
function limpiarLista(idLista){
    return document.querySelector(`#${idLista}`).innerHTML = "";
}


// Crea una función que recorra el array amigos y agregue cada nombre como 
// un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la 
// lista antes de agregar nuevos elementos.
function actualizarListaDeAmigos(){
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente
   limpiarLista('listaAmigos');
    if(amigos.length > 0){
        // Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo 
        // amigos y crear elementos de lista (<li>) para cada título.
        for(let i=0; i<amigos.length; i++){
            // Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
            let obtenerNombre = document.createElement("li");
            obtenerNombre.innerHTML = amigos[i];
            lista.appendChild(obtenerNombre);
            console.log(lista);
        }

    }
    else{
        return lista.innerHTML = "";
    }
}



// Escribe una función que seleccione de manera aleatoria uno de los nombres 
// almacenados en el array amigos. Usa Math.random() y Math.floor() para 
// obtener un índice aleatorio.
function sortearAmigo(){
    // Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder 
    // al nombre correspondiente en el arreglo.
    let nombreSorteado = amigos[generarIndiceAleatorio()];
    console.log(nombreSorteado);

    // Mostrar el resultado: Actualizar el contenido del elemento de resultado 
    // utilizando document.getElementById()  e innerHTML para mostrar el 
    // amigo sorteado.
    document.getElementById('resultado').innerHTML = nombreSorteado;
}


function generarIndiceAleatorio(){
    // Generar un índice aleatorio: Usar Math.random() y Math.floor() 
    // para seleccionar un índice aleatorio del arreglo.
    let indiceAlteatorio = Math.floor(Math.random()*indiceMaximo);
    console.log(indiceAlteatorio);

    // Validar que haya amigos disponibles: Antes de sortear, comprobar si el 
    // array amigos no está vacío.
    if (amigos.length > 0){
        return indiceAlteatorio;
    }
    else{
        alert('No hay amigos disponibles para sortear');
    }
}
