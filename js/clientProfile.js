/*global document: false*/
/*global localStorage: false*/
function update() {
    if(document.getElementById("firstN").innerHTML != localStorage.getItem("clientFName") && localStorage.getItem("clientFName")) {
        document.getElementById("firstN").innerHTML = localStorage.getItem("clientFName");
    }
    if(document.getElementById("lastN").innerHTML != localStorage.getItem("clientLName") && localStorage.getItem("clientLName")) {
        document.getElementById("lastN").innerHTML = localStorage.getItem("clientLName");
    }
    if(document.getElementById("phoneNum").innerHTML != localStorage.getItem("clientPhoneNum") && localStorage.getItem("clientPhoneNum")) {
        document.getElementById("phoneNum").innerHTML = localStorage.getItem("clientPhoneNum");
    }
    if(document.getElementById("email").innerHTML != localStorage.getItem("clientEmail") && localStorage.getItem("clientEmail")){
        document.getElementById("email").innerHTML = localStorage.getItem("clientEmail");
    }
    if(document.getElementById("street").innerHTML != localStorage.getItem("clientStreet") && localStorage.getItem("clientStreet")){
            document.getElementById("street").innerHTML = localStorage.getItem("clientStreet");
    }
    if(document.getElementById("city").innerHTML != localStorage.getItem("clientCity") && localStorage.getItem("clientCity")) {
        document.getElementById("city").innerHTML = localStorage.getItem("clientCity");
    }
    if(document.getElementById("state").innerHTML != localStorage.getItem("clientState") && localStorage.getItem("clientState")) {
        document.getElementById("state").innerHTML = localStorage.getItem("clientState");
    }
    if(document.getElementById("zip").innerHTML != localStorage.getItem("clientZip") && localStorage.getItem("clientZip")) {
        document.getElementById("zip").innerHTML = localStorage.getItem("clientZip");
    }
    if(document.getElementById("password").innerHTML != localStorage.getItem("clientPassword") && localStorage.getItem("clientPassword")) {
        document.getElementById("password").innerHTML = localStorage.getItem("clientPassword");
    }
}

setInterval(function () {
    update();
});
