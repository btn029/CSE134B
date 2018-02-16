/*global document: false*/
/*global localStorage: false*/
function update() {
    document.getElementById("firstN").innerHTML = localStorage.getItem("firstName");
    document.getElementById("lastN").innerHTML = localStorage.getItem("lastName");
    document.getElementById("phoneNum").innerHTML = localStorage.getItem("phoneNum");
    document.getElementById("email").innerHTML = localStorage.getItem("email");
    document.getElementById("street").innerHTML = localStorage.getItem("street");
    document.getElementById("city").innerHTML = localStorage.getItem("city");
    document.getElementById("state").innerHTML = localStorage.getItem("state");
    document.getElementById("zip").innerHTML = localStorage.getItem("zip");
    document.getElementById("password").innerHTML = localStorage.getItem("password");
}