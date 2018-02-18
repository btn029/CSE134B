/*global document: false*/
/*global localStorage: false*/
function update() {
        
    if(document.getElementById("barberPic").src != localStorage.getItem("profilePic") && localStorage.getItem("profilePic")) {
        document.getElementById("barberPic").src = localStorage.getItem("profilePic");
    }
    
    if(document.getElementById("firstN").innerHTML != localStorage.getItem("firstName") && localStorage.getItem("firstName")) {
        document.getElementById("firstN").innerHTML = localStorage.getItem("firstName");
    }
    if(document.getElementById("lastN").innerHTML != localStorage.getItem("lastName") && localStorage.getItem("lastName")) {
        document.getElementById("lastN").innerHTML = localStorage.getItem("lastName");
    }
    if(document.getElementById("phoneNum").innerHTML != localStorage.getItem("phoneNum") && localStorage.getItem("phoneNum")) {
        document.getElementById("phoneNum").innerHTML = localStorage.getItem("phoneNum");
    }
    if(document.getElementById("email").innerHTML != localStorage.getItem("email") && localStorage.getItem("email")) {
        document.getElementById("email").innerHTML = localStorage.getItem("email");
    }
    if(document.getElementById("street").innerHTML != localStorage.getItem("street") && localStorage.getItem("street")) {
            document.getElementById("street").innerHTML = localStorage.getItem("street");
    }
    if(document.getElementById("city").innerHTML != localStorage.getItem("city") && localStorage.getItem("city")) {
        document.getElementById("city").innerHTML = localStorage.getItem("city");
    }
    if(document.getElementById("state").innerHTML != localStorage.getItem("state") && localStorage.getItem("state")) {
        document.getElementById("state").innerHTML = localStorage.getItem("state");
    }
    if(document.getElementById("zip").innerHTML != localStorage.getItem("zip") && localStorage.getItem("zip")) {
        document.getElementById("zip").innerHTML = localStorage.getItem("zip");
    }
    if(document.getElementById("password").innerHTML != localStorage.getItem("password") && localStorage.getItem("password")) {
        document.getElementById("password").innerHTML = localStorage.getItem("password");
    }

}

setInterval(function() {
    update();
});
