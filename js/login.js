/*global window: false */
/*global document: false */
$(function(){
    $('input[name="rad"]').click(function(){
        var $radio = $(this);
            // if this was previously checked
        if ($radio.data('waschecked') == true)
        {
            $radio.prop('checked', false);
            $radio.data('waschecked', false);
        }
        else 
            $radio.data('waschecked', true);
            // remove was checked from other radios
            $radio.siblings('input[name="rad"]').data('waschecked', false);
    });
});
    
function login() {
    var barber = document.getElementById("barber").checked;
    var client = document.getElementById("client").checked;
    var inputUsername= document.getElementById("usernameEntry");
    var inputPassword= document.getElementById("passwordEntry");

            if (inputUsername && inputUsername.value && inputPassword && inputPassword.value && barber == true) {
                console.log("match");
                window.location.href = "barberHome.html";
            }
    
            else if (inputUsername && inputUsername.value && inputPassword && inputPassword.value && client == true) {
                console.log("match");
                window.location.href = "clientHome.html";
            }
    
            else
            {
                console.log("no match");
                alert("Please enter a Username and Password.")
            }

}

function redirectSignUp() {
    window.location.href = "signup.html";
}