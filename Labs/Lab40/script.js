
function move (){
  $("#divv").animate({left:"+=500px"}, 5000)
};


function opa(){
  $("#divv").animate({opacity:"0.5"},100)
           .animate({opacity:"1"},500)
           .animate({opacity:".4"},500)
           .animate({opacity:".8"},500)
           .animate({opacity:"1"},500)
};

function cir(){
  $("#divv").animate({borderRadius:"50%"},300)
  
}
function craz(){
  $("#divv").animate({left:"+=500px"}, 500)
  $("#divv").animate({left:"-=500px"}, 500)
  $("#divv").animate({opacity:"0.5"},100)
           .animate({opacity:"1"},500)
           .animate({opacity:".4"},500)
           .animate({opacity:".8"},500)
           .animate({opacity:"1"},500)
  $("#divv").animate({borderRadius:"50%"},300)
  $("#divv").animate({left:"+=500px"}, 500)
  $("#divv").animate({left:"-=500px"}, 500)
  $("#divv").animate({width:"200px", height:"200px"},3000)
  $("#divv").animate({width:"20px", height:"20px"},300)
  $("#divv").animate({width:"50px", height:"50px"},512)
  $("#divv").animate({left:"+=500px"}, 500)
  $("#divv").animate({left:"-=500px"}, 500)
  $("#divv").animate({width:"50px", height:"50px"},512)
  $("#divv").animate({borderRadius:"0%"},300)
  $("#divv").animate({width:"200px", height:"200px"},3000)
  $("#divv").animate({width:"20px", height:"20px"},300)
  $("#divv").animate({width:"50px", height:"50px"},512)
  $("#divv").animate({width:"50px", height:"50px"},512)
}
function siz(){
  $("#divv").animate({width:"200px", height:"200px"},3000)
};

function reset(){
  $("#divv").removeAttr('style');
}
function stop1(){
  $("#divv").stop();
}
function stop2(){
  $("#divv").stop(true);
}
function stop3(){
  $("#divv").stop(true,true);
}

