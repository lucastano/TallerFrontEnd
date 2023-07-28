const url='https://censo.develotion.com/'


export const inicio=(object)=>{
 
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


export const obtenerCensadosService=(token,id)=>{



  return fetch(`${url}personas.php?idUsuario=${id}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json;',
      'apikey':token,
      'iduser':id,
    },
  })
    .then((response)=>response.json())
    .then((json)=>{ 
      return json;
    })

}

export const obtenerDepartamentos=(token,id)=>{
  return fetch(`${url}/departamentos.php`,{
    method:'GET',
    headers:{
      'Content-type': 'application/json;',
      'apikey':token,
      'iduser':id,


    }
  })
  .then((response)=>response.json())
  .then((json)=>{return json;})
}

export const obtenerOcupaciones=(token,id)=>{
  return fetch(`${url}/ocupaciones.php`,{
    method:'GET',
    headers:{
      'Content-type': 'application/json;',
      'apikey':token,
      'iduser':id,


    }
  })
  .then((response)=>response.json())
  .then((json)=>{return json;})
}


