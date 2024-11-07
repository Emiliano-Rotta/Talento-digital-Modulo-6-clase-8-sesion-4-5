//tema pendiente de la sesion 4 AXIOS
//npm i axios
//https://jsonplaceholder.typicode.com/posts/1
const axios = require('axios');
const { title } = require('process');

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

const nuevoPost = {
    title: 'aprendiendo axios',
    body: "lorem ipsum",
    userId: 1,
    title: 'sunt aut facere repellat'
}

axios.post('https://jsonplaceholder.typicode.com/posts', nuevoPost)
    .then(response => {
        if (response.status === 201) {
            console.log('post creado con éxito:', response.data);
        }
    })
    .catch(error => {
        console.error('El error es: ', error.status);
    })



// Realiza una solicitud GET a https://jsonplaceholder.typicode.com/users y muestra los nombres de los usuarios.

// Usa una solicitud POST para agregar un nuevo post con título y contenido personalizados.

// Configura una instancia de Axios con la URL base de https://jsonplaceholder.typicode.com y haz una solicitud GET para obtener los comentarios del post con ID 3.

// Realiza una solicitud PUT para actualizar el título de un post específico (ID 1) y confirma el cambio mostrando el post actualizado.

// Haz una solicitud DELETE para eliminar un post (ID 2) y verifica que fue eliminado.

