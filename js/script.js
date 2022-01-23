// Animaciones del menú hamburguesa con JQuery
$('#contenedor-menu').change(function(){
    $('nav').slideToggle();
})

// Obtenemos el id menu
let menuContainer = document.getElementById("menu");
// console.log(menuContainer);

// Obtenemos todos los elementos con la clase link
let linksMenu = menuContainer.getElementsByClassName("link");
// console.log(linksMenu);

for (let i = 0; i < linksMenu.length; i++) {
    linksMenu[i].addEventListener("click", function() {
        let currentLink = document.getElementsByClassName("active");
        //console.log(currentLink[0]); // Esto es solo para comprobar en que link se hizo click
        currentLink[0].className = currentLink[0].className.replace(" active", "");
        this.className += " active";
    });    
}