var URL= 'http://localhost:5000/amigos';    //guardamos el url

var mostrarAmigos=function () {     //creamos la funcion mostrarAmigos
    $(`#lista`).empty();            //borramos lista
    $.get(`${URL}`, function(amigo){    //con el metodo GET instanciamos el URL como primer parametro, seguido por uma 
    console.log(amigo);                 //segumda intancia qie es una funcion
    amigo.forEach(e=> {                 //se recorre la lista de amigos
        $(`#lista`).append(`<li= id="${e.id}">${e.name}<button id="${e.id}"onClick=borrar(${e.id})>X</button></li>`) //agregamos el id y nombres de los amigos a la lista
    })    
    });
   } ;

$('#boton').click(mostrarAmigos);   //asignamos al boton la funcion mostrarAmigos cuando se de el evento click

var buscar = function () {      //creamos la funcion buscar
    let id= $("input").val();   //decalaramos una variable id que es igual al valor ingresado en el input

    if(id){                                     //filtramos con un if, siendo que si tiene algun valor el input
        $.get(`${URL}/${id}`, function (amigo) {   //se hace la peticion a la URL de los valores que tienen los objetos en la propiedad id
            console.log(amigo) 
            $('#amigo').text(`${amigo.name}, ${amigo.age}, ${amigo.email}`)  //en el span con id 'amigo', se va a mostrar en texto los valores de amigo.name, amigo.age y amigo.email                  
            $("input").val(''); 
        })
         
    }else $('#amigo').text('el ID ingresado no es valido')
} ;

$("#search").click(buscar) //le asignamos a 'search' la funcion buscar que se ejecutara cuando se de el evento click.

var borrar = function (idX) {
    let id;
    if(idX){
        id= idX;
    }else{ 
        id= $('inputDelete').val();}
    let amigoBorrado;
    if(id){
        $.get(`${URL}/${id}`, function (amigo) {   //se hace la peticion a la URL de los valores que tienen los objetos en la propiedad id
            amigoBorrado=amigo;                     
        })
        $.ajax({
            url : `${URL}/${id}`,
            type: 'DELETE',
            success :  function () {
            $('#inputDelete').text(`el amigo ${amigoBorrado.name} de id ${id} ha sido eliminado`)
            $("input").val('');
        }})
    }else $('#success').text('el ID ingresado no es valido')
}

$('#delete').click(borrar)
