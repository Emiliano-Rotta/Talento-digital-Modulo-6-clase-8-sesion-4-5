//tema pendiente de la sesion 4 AXIOS
//npm i axios
//https://jsonplaceholder.typicode.com/posts/1
// const axios = require('axios');


// axios.get('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => {
//         console.log('La info es: ', response.data)
//     })
//     .catch(error=>{
//         console.error('El error es: ', error);
//     })

//-------------------------------------

// const nuevoPost ={
//     title:'aprendiendo axios',
//     body: "lorem ipsum",
//     userId: 1,
//     title: 'sunt aut facere repellat'
// }

// axios.post('https://jsonplaceholder.typicode.com/posts', nuevoPost)
//     .then(response => {
//         console.log('Respuesta de la solicitud POST: ', response.data)
//     })
//     .catch(error=>{
//         console.error('El error es: ', error);
//     })

// const api = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// })

// api.get('posts/3')
//     .then(response => {
//         console.log("la info del id 3 es: " , response.data)
//     })
//     .catch(error=>{
//         console.error('El error es: ', error);
//     })

//     api.get('posts/4')
//     .then(response => {
//         console.log("la info del id 4 es: " , response.data)
//     })
//     .catch(error=>{
//         console.error('El error es: ', error);
//     })

//manejar errores post

// const nuevoPost = {
//     title: 'aprendiendo axios',
//     body: "lorem ipsum",
//     userId: 1,
//     title: 'sunt aut facere repellat'
// }

// axios.post('https://jsonplaceholder.typicode.com/posts', nuevoPost)
//     .then(response => {
//         if (response.status === 201) {
//             console.log('post creado con éxito:', response.data);
//         }
//     })
//     .catch(error => {
//         console.error('El error es: ', error.status);
//     })



// Realiza una solicitud GET a https://jsonplaceholder.typicode.com/users y muestra los nombres de los usuarios.
// const axios = require('axios');
// axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(response=>{
//         response.data.forEach(user => {
//             console.log(user.name)
//         });
//     })
//     .catch(error => {
//         console.error('El error es: ', error);
//     })



// Usa una solicitud POST para agregar un nuevo post con título y contenido personalizados.

// let nuevoPost = {
//     title: 'Mi nuevo post',
//     body: 'Contenido del post',
//     userId: 1
// }
// axios.post('https://jsonplaceholder.typicode.com/posts', nuevoPost )
//     .then(response => {            
//                 console.log('post creado con éxito:', response.data);
//         })
//         .catch(error => {
//             console.error('El error es: ', error.status);
//         })


// Configura una instancia de Axios con la URL base de https://jsonplaceholder.typicode.com y haz una solicitud GET para obtener los comentarios del post con ID 3. /posts/3/comments
// const api = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'})

// api.get('/posts/3/comments')
// .then (response => console.log(response.data))
// .catch(error => {
//     console.error('El error es: ', error.status);
// })


// Realiza una solicitud PUT para actualizar el título de un post específico (ID 1) y confirma el cambio mostrando el post actualizado.
// let textoActualizado = { title: 'Título actualizado' }

// axios.put('https://jsonplaceholder.typicode.com/posts/1', textoActualizado)
//     .then(response => console.log('Post actualizado:', response.data))
//     .catch(error => {
//         console.error('El error es: ', error.status);
//     })

// // Haz una solicitud DELETE para eliminar un post (ID 2) y verifica que fue eliminado.

// axios.delete('https://jsonplaceholder.typicode.com/posts/1')
//     .then(() => {
//         console.log('post eliminado con éxito:')
//     })

//     .catch(error => {
//         console.error('El error es: ', error.status);
//     })

    // si quieren ver como se agrega, edita o elimina con axios, pueden entrar a esta api, hacerse una cuenta y probarlos..https://mockapi.io/

    //-----------------------------------------------------------------------

//sesion 5 

// Ciclo de Vida de un Proceso
    // En Node.js, el ciclo de vida de un proceso incluye varios estados desde su inicio hasta su finalización. Un proceso en Node.js comienza con la ejecución del código y puede pasar por distintos estados como la ejecución de funciones, manejo de eventos asíncronos, y finalmente, su cierre.


// Etapas principales en el ciclo de vida:
    // Inicialización: Node.js carga el archivo de código, los módulos y las dependencias necesarias.
    // Ejecución de Código: El código de la aplicación se ejecuta de arriba hacia abajo. (Sincronico)
    // Eventos Asíncronos y Callbacks: Node.js usa un bucle de eventos que permite realizar tareas asíncronas como solicitudes HTTP, operaciones de E / S, etc.
    // Finalización del Proceso: El proceso finaliza cuando no hay más tareas pendientes en el bucle de eventos.


// process.on('beforeExit',()=>{
//     console.log('El proceso está por terminar')
//     //logica para cerrar la base de datos
// })
// process.on('exit',(code)=>{
//     console.log(`El proceso terminado con codigo: ${code}`)
// })

// console.log('El proceso está en ejecucion')


// crea en este archivo lo siguiente
// Configura eventos de proceso (beforeExit y exit) para capturar mensajes antes y después de la salida del proceso.
// Agrega un temporizador que muestre un mensaje en consola cada segundo y luego finalice después de 5 segundos.

// var counter = 0;
// const interval = setInterval(() => {
//     counter++;
//     console.log(`Ejecutando... (${counter} segundos)`);
//     if (counter === 5) {
//         clearInterval(interval);
//     }
// }, 1000);

// process.on('beforeExit', () => {
//     console.log('El proceso está por finalizar...');
//     console.log(counter)
//     counter = 0
//     console.log(counter)
// });


// process.on('exit', (code) => {
//     console.log(`Proceso finalizado con código: ${code}`);
// });

// console.log("codigo sincronico")


//------------------------------------------------------------------------------
// Introducción al Módulo HTTP de Node.js
//El módulo HTTP de Node.js permite crear servidores y manejar solicitudes HTTP sin necesidad de un framework adicional como Express. Con http, podemos crear un servidor que escuche solicitudes en un puerto específico y responda con contenido.
// Concepto Básico:
// http.createServer: Crea un servidor.
// request: Representa los datos que recibe el servidor.
// response: Permite enviar datos de vuelta al cliente.

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('¡Hola desde el servidor HTTP en Node.js!');
// });

// server.listen(3000, () => {
//     console.log('Servidor escuchando en http://localhost:3000');
// });



// En este archivo
// Usa el módulo http para crear un servidor que escuche en el puerto 4000.
// Agrega rutas para / y /saludo. La primera debe responder con un mensaje básico y la segunda con un saludo personalizado.

// const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.setHeader( 'Content-Type', 'text/plain' )
//     if (req.method === 'GET' && req.url === '/'){
//         res.writeHead(200);
//         res.end('Bienvenido al servidor Node!!!')
//     } else if (req.method === 'GET' && req.url === '/saludo'){
//         res.writeHead(200);
//         res.end('Hola, gracias por visitarnos')
//     } else{
//         res.writeHead(404);
//         res.end('Ruta no encontrada')
//     }
// })

// server.listen(4000,() =>{
//     console.log('Servidor levantado en el puerto 4000')
// })

//---------------------------------------------
//Persistencia de Datos con el Módulo fs

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/visitas' && req.method === 'GET') {
        fs.readFile('visitas.txt', 'utf8', (err, data) => {
            let visitas = parseInt(data) || 0;
            visitas++;

            fs.writeFile('visitas.txt', visitas.toString(), (err) => {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(`Número de visitas: ${visitas}`);
            });
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
});


server.listen(4000, () => {
    console.log('Servidor escuchando en http://localhost:4000');
});
