/*global localStorage: false*/
/*global document: false*/
/*global window: false*/
function saveEdits() {
	var firstNameInput = document.getElementById("firstNameEntry");
	localStorage.setItem("firstName", firstNameInput.value);
        
    var lastNameInput = document.getElementById("lastNameEntry");
	localStorage.setItem("lastName", lastNameInput.value);
    
    var emailInput = document.getElementById("emailEntry");
	localStorage.setItem("email", emailInput.value);
    
    var passwordInput = document.getElementById("passwordEntry");
	localStorage.setItem("password", passwordInput.value);
    
    var phoneNumInput = document.getElementById("phoneNumEntry");
	localStorage.setItem("phoneNum", phoneNumInput.value);
    
    var streetInput = document.getElementById("streetEntry");
	localStorage.setItem("street", streetInput.value);
    
    var cityInput = document.getElementById("cityEntry");
	localStorage.setItem("city", cityInput.value);
    
    var stateInput = document.getElementById("stateEntry");
	localStorage.setItem("state", stateInput.value);
    
    var zipInput = document.getElementById("zipCodeEntry");
	localStorage.setItem("zip", zipInput.value);

    window.location.href = "clienthome.html";
}
