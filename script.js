
var request =  new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all")

request.send();

request.onload = function(){
var res = JSON.parse(request.response);
console.log(res);
// Print all 250 country common name in console
  for(var i =0;i<res.length;i++){
    console.log(res[i].name.common)
}
}
//Print the capital name, as well as area for countries
for(var i =0;i<res.length;i++){
    if(res[i].capital){
        console.log(res[i].capital[0]+" "+res[i].area)
    }
    else{
        console.log("Invalidd capital"+res[i].area);
    }
}
}
