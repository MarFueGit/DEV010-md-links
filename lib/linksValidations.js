const axios = require("axios"); //Usamos la libreria Axios para las peticiones HTTP.

const validateLinks = (links, pathToValidate) => new Promise((resolve, reject) => {
  // 1. Armamos un array de promesas con axios, donde le decimos que por cada link dentro del array de links que nos pasaron
  // haga una peticion GET y nos devuelva el status junto con los demas parametros del link
  const arrayRequest = links.map((link) => axios.get(link.href)
  .then((response) => { // Maneja respuesta exitosa
    return {
      ...link,
      status: response.status,
      ok:'ok'
    };
  })
  .catch((error) => { // maneja cualquier error en la solicitud.
    return {
      ...link,
      status:500,
      ok: 'fail'
    };
  }))

  // Utilizamos Promise.all para esperar que todas promesas en arrayRequest se cumplan o se rechazen.
  Promise.all(arrayRequest)
    .then((data) => { // Se registra en la consola el resultado de la validacion de links(data)
      // Y luego se resuelve la Promesa original con estos datos.
    console.log("LINKS: " , data)
      resolve(data)
    })
    .catch((err) => { // Se rechaza la Promesa original con un error que indica que hubo un problema al validar los links
      reject(new Error('Hubo un problema al validar los links'))
    });
})

module.exports = {
  validateLinks,
};


/*
En resumen, este código se utiliza para validar links web haciendo solicitudes HTTP a cada uno de ellos
 y luego devuelve un arreglo de objetos que contiene información sobre el estado de cada links (éxito o falla).
  La función validateLinks es asincrónica y devuelve una Promesa que se resuelve con los resultados de
  la validación o se rechaza en caso de errores.
 */
