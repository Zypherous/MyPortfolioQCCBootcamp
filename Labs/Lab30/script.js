let myFavFoods = [ 'pizza', 'burger' , 'crickets' ]

for(var i = 0; i < myFavFoods.length;i++){
  var newLi = document.createElement("li")
  newLi.innerHTML = myFavFoods[i]
  newLi.style.listStyle = "none"
  document.getElementById("forLoop").appendChild(newLi)
}

var subjectsTaken = { 
  cmp426: 'Operating Systems',
  cmp464 :'Graphs and Applications',
  cmp414: 'Artificial Intelligence'
};

for(subject in subjectsTaken){
  var newLi = document.createElement("li")
  newLi.innerHTML = subject + " : " + subjectsTaken[subject]
  newLi.style.listStyle = "none"
  document.getElementById("forin").appendChild(newLi)
}

var thingsIdoInfreeTime = ['AAAA', 'BBBB', 'CCCC', 'DDDDDD', 'EEEEEEEE']

var counter = 0;

while(counter < 5){
  var newLi = document.createElement("li")
  newLi.innerHTML = thingsIdoInfreeTime[counter]
  newLi.style.listStyle = "none"
  document.getElementById("whileL").appendChild(newLi)
  counter++;
}

var counter2= 4
var myWorries=['school', 'money', 'food', 'family']
do{
  var newLi = document.createElement("li")
  newLi.innerHTML = myWorries[counter2-1]
  newLi.style.listStyle = "none"
  document.getElementById("doWhile").appendChild(newLi)
  counter2--;
}while(counter2 >0)