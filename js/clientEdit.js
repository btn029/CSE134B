/*global localStorage: false*/
/*global document: false*/
/*global window: false*/
function saveEdits() {
    var firstNameInput = document.getElementById("firstNameEntry");
	if(firstNameInput.value){
        localStorage.setItem("clientFName", firstNameInput.value);
    }
        
    var lastNameInput = document.getElementById("lastNameEntry");
	if(lastNameInput.value){
        localStorage.setItem("clientLName", lastNameInput.value);
    }
        
    var emailInput = document.getElementById("emailEntry");
	if(emailInput.value){
        localStorage.setItem("clientEmail", emailInput.value);
    }
        
    var passwordInput = document.getElementById("passwordEntry");
    if(passwordInput.value){
        localStorage.setItem("clientPassword", passwordInput.value);
    }

    var phoneNumInput = document.getElementById("phoneNumEntry");
	if(phoneNumInput.value){
        localStorage.setItem("clientPhoneNum", phoneNumInput.value);
    }
    
    var streetInput = document.getElementById("streetEntry");
	if(streetInput.value){
        localStorage.setItem("clientStreet", streetInput.value);
    }
    
    var cityInput = document.getElementById("cityEntry");
	if(cityInput.value){
        localStorage.setItem("clientCity", cityInput.value);
    }
    
    var stateInput = document.getElementById("stateEntry");
	if(stateInput.value){
        localStorage.setItem("clientState", stateInput.value);
    }
    
    var zipInput = document.getElementById("zipCodeEntry");
	if(zipInput.value){
        localStorage.setItem("clientZip", zipInput.value);
    }
    window.location.href = "clienthome.html";
}

