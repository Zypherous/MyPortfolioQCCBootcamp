$(document).ready(function () {
  $(".navigation").hide();
  $(".labs").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
  $(".button").click(function (e) {
    var idClicked = e.target.id;
    if (idClicked == "main") {
      $(".banner-image").fadeIn(900);
      $(".banner-text").fadeIn(100);
      $(".navigation").animate({ width: "toggle" }, 1200);
    }
    if (idClicked == "labs") {
      $(".navigationLabs").toggle({ duration: 800 });
      $(".labs").slideDown({ duration: 800 });
      $(".aboutme").hide({ duration: 400 });
      $(".navigation").animate({ width: "toggle" }, 700);
      $(".containerMain").hide();
    }
    if (idClicked == "home") {
      $(".navigation").animate({ width: "toggle" }, 900);
      $(".containerMain").show({ duration: 400 });
      $(".aboutme").hide({ duration: 400 });
      $(".labs").hide({ duration: 400 });
      $(".navigationLabs").hide({ duration: 400 });
      $("#bgimg").removeClass("backgroundImage2").addClass("backgroundImage");
    }
    if (idClicked == "aboutme") {
      $(".aboutme").show({ duration: 700 });
      $(".navigation").animate({ width: "toggle" }, 700);
      $(".containerMain").hide();
      $(".labs").hide({ duration: 400 });
      $("#bgimg").removeClass("backgroundImage").addClass("backgroundImage2");
    }
    if (idClicked == "banner-text") {
      $(".banner-text").fadeOut(100);
      $(".banner-image").fadeOut(500);
      $(".navigation").animate({ width: "toggle" }, 900);
    }
  });
});
