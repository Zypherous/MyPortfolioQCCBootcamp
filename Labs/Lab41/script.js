$(document).ready(function(){
  $("#2").hide();
  $("#p2").hide();
  $("#p3").hide();
  $("#p5").hide();
})
function disappear(){
  $(document).ready(function(){
    $("divv").toggle();
    $("#1").toggle();
    $("#2").toggle();
    $("#p1").hide();
    $("#p2").show();
    $("#p3").fadeIn(2000);
    $("#p4").fadeOut(2000);
    $("#p5").slideDown(2000);
  })
}
function appear(){
  $(document).ready(function(){
    $("divv").toggle();
    $("#1").toggle();
    $("#2").toggle();
    $("#p1").show();
    $("#p2").hide();
    $("#p3").fadeOut(2000);
    $("#p4").fadeIn(2000);
    $("#p5").slideUp(2000);
  })
}