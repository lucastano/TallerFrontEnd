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