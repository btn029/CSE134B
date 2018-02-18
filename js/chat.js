document.getElementById("myBtn").addEventListener("click", function(){
                                                  var div = document.createElement("div");
                                                  div.style.width = "800px";
                                                  div.style.height = "50px";
                                                  div.style.border = "1px solid #000000";
                                                  div.innerHTML = document.getElementById("myTxtbox").value;
                                                  document.getElementById("msgs:").appendChild(div);
                                                  });
