/*global localStorage: false*/
/*global document: false*/
/*global window: false*/
function saveEdits() {
	var firstNameInput = document.getElementById("firstNameEntry");
	if(firstNameInput.value){
        localStorage.setItem("firstName", firstNameInput.value);
    }
        
    var lastNameInput = document.getElementById("lastNameEntry");
	if(lastNameInput.value){
        localStorage.setItem("lastName", lastNameInput.value);
    }
        
    var emailInput = document.getElementById("emailEntry");
	if(emailInput.value){
        localStorage.setItem("email", emailInput.value);
    }
        
    var passwordInput = document.getElementById("passwordEntry");
    if(passwordInput.value){
        localStorage.setItem("password", passwordInput.value);
    }

    var phoneNumInput = document.getElementById("phoneNumEntry");
	if(phoneNumInput.value){
        localStorage.setItem("phoneNum", phoneNumInput.value);
    }
    
    var streetInput = document.getElementById("streetEntry");
	if(streetInput.value){
        localStorage.setItem("street", streetInput.value);
    }
    
    var cityInput = document.getElementById("cityEntry");
	if(cityInput.value){
        localStorage.setItem("city", cityInput.value);
    }
    
    var stateInput = document.getElementById("stateEntry");
	if(stateInput.value){
        localStorage.setItem("state", stateInput.value);
    }
    
    var zipInput = document.getElementById("zipCodeEntry");
	if(zipInput.value){
        localStorage.setItem("zip", zipInput.value);
    }
        
    window.location.href = "barberhome.html";
}

