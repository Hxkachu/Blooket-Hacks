function fetchApi(url, json, method){
 fetch(url, {
   method: method,
    body: JSON.stringify(json),
    headers: {
     'Content-Type': 'application/json'
    }
  }).then(function (response) {
   return response.text()
  }).then(function(text){
   console.log(text)
  }).catch(function(error){
   console.error(error)
  })
}
