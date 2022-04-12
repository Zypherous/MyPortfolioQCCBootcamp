$(document).ready(function () {
  $(".navigation").hide();
  $(".labs").hide();
  $(".main-Text").hide();
  $(".containerMain").animate({ heigh: "toggle" }, 0);
  $(window).on("scroll", function () {
    console.log(window.scrollY);
    if (window.scrollY > 1000) {
      $(".toTop").fadeIn();
    } else {
      $(".toTop").fadeOut();
    }
  });
  // $("#scroll").click(function () {
  //   //   window.scrollTo({top: 0, behavior: 'smooth'}
  //   // );

  //   return false;
  // });
  $(".button").click(function (e) {
    var idClicked = e.target.id;
    if (idClicked == "main") {
      $(".navigation").animate({ width: "toggle" }, 1200);
      $(".main-Text").animate({ width: "toggle" }, 800);
      $(".main-Text").animate({ height: "toggle" }, 800);
      $(".containerMain").animate({ height: "toggle" }, 800);
      setTimeout(function () {
        $(".banner-image").fadeIn(900);
        $(".banner-text").fadeIn(1000);
      }, 1200);
    }
    if (idClicked == "labs") {
      $(".navigation").animate({ width: "toggle" }, 1200);
      $(".main-Text").animate({ height: "toggle" }, 400);
      $(".containerMain").animate({ height: "toggle" }, 500);
      // $(".navigationLabs").toggle({ duration: 800 });
      // $(".navigationLabs").animate({ width: "toggle" }, 700);

      $(".navigationLabs").slideDown({ duration: 1200 });
      $(".labs").slideDown({ duration: 1200 });
      $(".aboutme").hide({ duration: 400 });
      //   $(".navigation").animate({ width: "toggle" }, 700);
      //   $(".containerMain").animate({heigh:"toggle"},700);
      //   $(".main-Text").toggle({duration: 400});
    }
    if (idClicked == "home") {
      // $(".containerMain").show({ duration: 400 });
      // $(".navigation").animate({ width: "toggle" }, 900);

      // $(".containerMain").fadeIn(800);
      // setTimeout(function () {
      //   $(".navigation").animate({ width: "toggle" }, 1000);
      // }, 800);

      $(".containerMain").slideDown(1200);
      setTimeout(function () {
        $(".navigation").animate({ width: "toggle" }, 1000);
      }, 600);
      $(".aboutme").hide({ duration: 400 });
      $(".labs").hide({ duration: 400 });
      $(".navigationLabs").hide({ duration: 600 });
      $("#bgimg").removeClass("backgroundImage2").addClass("backgroundImage");
    }
    if (idClicked == "aboutme") {
      $(".navigation").animate({ width: "toggle" }, 1200);
      $(".main-Text").hide(400);
      $(".containerMain").animate({ height: "toggle" }, 500);
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
      $(".containerMain").slideDown(1200);
      setTimeout(function () {
        $(".navigation").animate({ width: "toggle" }, 1000);
      }, 600);
    }
  });
});
// var wind = function (){
//   console.log(window)
// }
// wind();
