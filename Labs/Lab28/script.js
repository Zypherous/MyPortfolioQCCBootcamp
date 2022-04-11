function changeelement(){
  var un = document.getElementById("user_name").value
  var ue = document.getElementById("user_email").value
  var up =document.getElementById("user_phoneNumber").value

  document.getElementById("before").style.display ="none";
  document.getElementById("after").style.display = "block";
  document.getElementById("after").style.opacity = "1";
  
  document.getElementById("nameResult").innerHTML = un;
  document.getElementById("emailResult").innerHTML = ue;
  document.getElementById("phoneNumResult").innerHTML = up;

  

}