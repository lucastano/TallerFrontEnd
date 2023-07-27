const url='https://censo.develotion.com/'


export const inicio=(object)=>{
 console.log("vemos objeto en service",object);
   return fetch(`${url}login.php`, {
        method: 'POST',
        body: JSON.stringify(object) ,
        headers: {
          'Content-type': 'application/json;',
        },
      })
        .then((response)=>response.json())
        .then((json)=>{
          return json;
        })
}


export const obtenerCensadosService=(id,key)=>{
  console.log(id,"en services")
  return fetch(`${url}personas.php?idUsuario=${id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json;',
      'apikey':key ,
      'iduser':id,
    },
  })
    .then((response)=>response.json())
    .then((json)=>{ 
      return json;
    })

}

