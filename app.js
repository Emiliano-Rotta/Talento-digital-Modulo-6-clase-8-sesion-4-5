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
const axios = require('axios');
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
let textoActualizado = { title: 'Título actualizado' }

axios.put('https://jsonplaceholder.typicode.com/posts/1', textoActualizado)
    .then(response => console.log('Post actualizado:', response.data))
    .catch(error => {
        console.error('El error es: ', error.status);
    })

// Haz una solicitud DELETE para eliminar un post (ID 2) y verifica que fue eliminado.

axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(() => {
        console.log('post eliminado con éxito:')
    })
        
    .catch(error => {
        console.error('El error es: ', error.status);
    })

    // si quieren ver como se agrega, edita o elimina con axios, pueden entrar a esta api, hacerse una cuenta y probarlos..https://mockapi.io/