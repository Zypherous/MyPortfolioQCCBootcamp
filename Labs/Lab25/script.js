  function hide_unhide_all(){
    var collection =     document.getElementsByTagName("h3");
    for (var  i = 0; i < collection.length; i++){
      console.log(collection[i].className)
      if(collection[i].className === "hidden"){
        collection[i].className ="show";
      }else{
        collection[i].className ="hidden";
      }
    }
  }