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
    if(barber == true) {
        window.location.href = "barberHome.html"
    }
    else {
        window.location.href = "clientHome.html"
    }
}

function redirectSignUp() {
    window.location.href = "signup.html";
}