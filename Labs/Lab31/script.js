function submitF(){
  //check first name
  var fName = document.getElementById("fName");
  if(fName.checkValidity() == false){
    document.getElementById('a').innerHTML = fName.validationMessage;
  }else{
    document.getElementById("a").innerHTML="Thank you!!!";
  }
  //check Last name
  var lName = document.getElementById("lName");
  if(lName.checkValidity()==false){
    document.getElementById("b").innerHTML=lName.validationMessage;
  }else{
    document.getElementById("b").innerHTML = "Thank you!!!";
  }

  //Check age and if the person can vote
  var age = document.getElementById("age");

  if(age.validity.rangeUnderflow){
    document.getElementById("c").innerHTML="Your age seems a bit off. <br> There is no way you are that young?!";
  }else if(age.validity.rangeOverflow){
    document.getElementById("c").innerHTML="Your age seems a bit off. <br> There is no way you are that OLD?!?"
  }else{
    var vote=(age.value<18)? "You are a child":"You are an adult!";
    document.getElementById("c").innerHTML= vote;
  }


  var birth = document.getElementById("birth").value;
  var slash = birth.indexOf("/");

  if(slash<1){
    document.getElementById("d").innerHTML="Please enter the right date format";
  }else{
    document.getElementById("d").innerHTML="Thank you!!!"
  }

  //Check Phone number
  var phone=document.getElementById("phone");
  if(phone.validity.rangeUnderflow){
    document.getElementById('e').innerHtmle="Please correct your phone number";
  }else if (phone.validity.rangeOverflow){
    document.getElementById('e').innerHtmle="Please correct your phone number";
  }else{
    document.getElementById('e').innerHtmle="Thank you!!!"; 
  }

  var email = document.getElementById("email").value;
  var dots = email.lastIndexOf(".");
  var aroba = email.indexOf("@")
  if(aroba < 1 || dots<1){
    document.getElementById("g").innerHTML="Make sure your email contains an @ symbol and a period";
  }else{
    document.getElementById("g").innerHTML= "Thank yoU!!!"
  }
}