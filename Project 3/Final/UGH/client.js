
var request = new XMLHttpRequest("/senddata")

request.open("POST","/senddata")
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

// request.setRequestHeader("Content-type", "application/json");
// request.send("data="+encodeURIComponent("?text=hello"));
