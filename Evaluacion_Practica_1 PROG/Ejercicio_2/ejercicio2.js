// Definición de Enumeraciones para categorías específicas
var GeneroPelicula;
(function (GeneroPelicula) {
    GeneroPelicula["Accion"] = "Acci\u00F3n";
    GeneroPelicula["Drama"] = "Drama";
    GeneroPelicula["CienciaFiccion"] = "Ciencia Ficci\u00F3n";
    GeneroPelicula["Comedia"] = "Comedia";
})(GeneroPelicula || (GeneroPelicula = {}));
var PaisOrigen;
(function (PaisOrigen) {
    PaisOrigen["Venezuela"] = "Venezuela";
    PaisOrigen["Mexico"] = "M\u00E9xico";
    PaisOrigen["Espa\u00F1a"] = "Espa\u00F1a";
    PaisOrigen["CoreaDelSur"] = "Corea del Sur";
})(PaisOrigen || (PaisOrigen = {}));
// Función para mostrar los datos utilizando los Enums
function mostrarCatalogo() {
    console.log("--- Listado de Géneros de Películas ---");
    console.log(GeneroPelicula.Accion);
    console.log(GeneroPelicula.Drama);
    console.log(GeneroPelicula.CienciaFiccion);
    console.log(GeneroPelicula.Comedia);
    console.log("\n--- Listado de Países de Origen ---");
    console.log(PaisOrigen.Venezuela);
    console.log(PaisOrigen.Mexico);
    console.log(PaisOrigen.España);
    console.log(PaisOrigen.CoreaDelSur);
}
// Ejecución de la función
mostrarCatalogo();
