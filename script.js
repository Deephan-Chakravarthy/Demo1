// XML-HTTP Methods:
// Purpose:it is used to interact with the
// servers via API

//Total There are 5 steps

//Step 01: Create a XML-HTTP Object
var request =  new XMLHttpRequest();
//Step 02: Open a Request.
request.open("GET","https://restcountries.com/v3.1/all")