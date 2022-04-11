$(document).ready(function () {
  $(".navigation").hide();
  $(".labs").hide();
  $(".main-Text").hide();
  $(".containerMain").animate({heigh:"toggle"},0);
  $(window).on("scroll",function () {
    console.log(window.scrollY);
    if (window.scrollY > 1000) {
      $(".toTop").fadeIn();
    } else {
      $(".toTop").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      900
    );
    return false;
  });
  $(".button").click(function (e) {
    var idClicked = e.target.id;
    if (idClicked == "main") {
      $(".banner-image").fadeIn(900);
      $(".banner-text").fadeIn(100);
      $(".navigation").animate({ width: "toggle" }, 1200);
      $(".main-Text").hide();
      $(".containerMain").animate({height:"toggle"},0);
    }
    if (idClicked == "labs") {
      $(".navigation").animate({ width: "toggle" }, 1200);
      $(".main-Text").hide(400);
      $(".containerMain").animate({height:"toggle"},500);
      $(".navigationLabs").toggle({ duration: 800 });
      // $(".navigationLabs").animate({ width: "toggle"}, 700);

      $(".labs").slideDown({ duration: 1200 });
      $(".aboutme").hide({ duration: 400 });
    //   $(".navigation").animate({ width: "toggle" }, 700);
    //   $(".containerMain").animate({heigh:"toggle"},700);
    //   $(".main-Text").toggle({duration: 400});
    }
    if (idClicked == "home") {
      // $(".containerMain").show({ duration: 400 });
      // $(".navigation").animate({ width: "toggle" }, 900);

      $(".containerMain").fadeIn(800);
      setTimeout(function(){
        $(".navigation").animate({ width: "toggle" }, 1000);},800);
    
      
      $(".aboutme").hide({ duration: 400 });
      $(".labs").hide({ duration: 400 });
      $(".navigationLabs").hide({ duration: 600 });
      $("#bgimg").removeClass("backgroundImage2").addClass("backgroundImage");
    }
    if (idClicked == "aboutme") {
      $(".navigation").animate({ width: "toggle" }, 1200);
      $(".main-Text").hide(400);
      $(".containerMain").animate({height:"toggle"},500);
      $(".aboutme").show({ duration: 700 });
      // $(".navigation").animate({ width: "toggle" }, 700);
      // $(".containerMain").hide();
      $(".labs").hide({ duration: 400 });
      $("#bgimg").removeClass("backgroundImage").addClass("backgroundImage2");
    }
    if (idClicked == "banner-text") {
      $(".banner-text").fadeOut(100);
      $(".banner-image").fadeOut(500);
      // $(".navigation").slideDown({ duration: 900});
      // $(".navigation").toggle({duration: 1300});
      // $(".main-text").fadeIn({duration: 400});
      $(".containerMain").fadeIn(800);
      setTimeout(function(){
        $(".navigation").animate({ width: "toggle" }, 1000);},800);
    }
  });
});
// var wind = function (){ 
//   console.log(window)
// }
// wind();