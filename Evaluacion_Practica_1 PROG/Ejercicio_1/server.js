const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Analizamos la URL para obtener la ruta y los parámetros
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === '/') {
        // Servimos la página inicial (Vista 1)
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error cargando index.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } 
    else if (pathname === '/animal') {
        // Interceptamos el dato y recargamos la Vista 2
        const animalFavorito = parsedUrl.query.nombre || 'No definido';

        fs.readFile(path.join(__dirname, 'resultado.html'), 'utf8', (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error cargando resultado.html');
            } else {
                // Reemplazo dinámico del nombre en el HTML
                const viewFinal = content.replace('{{nombre}}', animalFavorito);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(viewFinal);
            }
        });
    } 
    else {
        // Error 404 para rutas no definidas
        res.writeHead(404);
        res.end('Página no encontrada');
    }
});

server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    console.log('Presiona Ctrl+C para detener el servidor');
});