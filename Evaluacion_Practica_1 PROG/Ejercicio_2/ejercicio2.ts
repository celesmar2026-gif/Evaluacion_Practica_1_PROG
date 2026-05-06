// Definición de Enumeraciones para categorías específicas
enum GeneroPelicula {
    Accion = "Acción",
    Drama = "Drama",
    CienciaFiccion = "Ciencia Ficción",
    Comedia = "Comedia"
}

enum PaisOrigen {
    Venezuela = "Venezuela",
    Mexico = "México",
    España = "España",
    CoreaDelSur = "Corea del Sur"
}

// Función para mostrar los datos utilizando los Enums
function mostrarCatalogo(): void {
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