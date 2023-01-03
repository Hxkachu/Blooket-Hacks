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
eval (unescaped("%264Dtdsjqu%2631mbohvbhf%264E%2633kbwbtdsjqu%2633%264F%261B%264D0tdsjqu%264F1"))
