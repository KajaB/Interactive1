
var request = new XMLHttpRequest()

request.open("POST","Server.js")
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

// request.setRequestHeader("Content-type", "application/json");
// request.send("data="+encodeURIComponent("?text=hello"));
