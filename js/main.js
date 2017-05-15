function agregaPosteo() {
//rescatar el contenedor-posteos, el nombre y el comentario del usuario
var containerPosteos = document.getElementById("contenedor-posteos");
var nombreFF = document.getElementById("nombre").value;
var contenidoFF = document.getElementById("cajaposteos").value;

//creamos el nodo elemento donde irá nuestro post
var nuevoPost = document.createElement("div");

//creamos elementos donde guardamos los valores
var contenedorNombre = document.createElement("strong");
var contenedorPost = document.createElement("p");
var separacion = document.createElement("hr");

//creamos elemento para corazón
var parrafCorazon = document.createElement("p");
var i = document.createElement("i");

//asignamos padre a ícono corazón
parrafCorazon.appendChild(i);

//otorgamos atributos a icono corazón
parrafCorazon.setAttribute("class", "corazon");
i.setAttribute("class", "fa fa-heart");
i.setAttribute("arial-hidden", "true");

//transformar nombre a nodo texto
var nodoNombre = document.createTextNode(nombreFF + " escribió:");
var nodoPosteo = document.createTextNode(contenidoFF);

//asignaremos padre a nodo creado
contenedorNombre.appendChild(nodoNombre);
contenedorPost.appendChild(nodoPosteo);

//asignaremos padres a nombre y contenido
nuevoPost.appendChild(contenedorNombre);
nuevoPost.appendChild(contenedorPost);
nuevoPost.appendChild(parrafCorazon);
nuevoPost.appendChild(separacion);


//creacr función onClick para corazón  asignándole la clase rojo CSS
i.addEventListener("click", function(){
	i.classList.toggle('rojo');
});

//otorgar atributos a nuestro post y agregarlo a contenedor-posteosS
nuevoPost.setAttribute("class", "posteo");
containerPosteos.appendChild(nuevoPost);

//sirve para resetear campos dejarlos nuevamente en blanco
document.getElementById("nombre").value = "";
document.getElementById("cajaposteos").value = "";

}