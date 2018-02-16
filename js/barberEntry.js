document.getElementById("myBtn").addEventListener("click", function(){
    var div = document.createElement("div");
    div.style.width = "800px";
    div.style.height = "100px";
    div.style.border = "thick solid #000000";
    div.innerHTML = document.getElementById("myTxtbox").value;
    document.getElementById("msgs").appendChild(div);
});

function saveDataBarber(){
	var input = document.getElementById("number2");
	localStorage.setItem("ratingVal2", input.value);
}
