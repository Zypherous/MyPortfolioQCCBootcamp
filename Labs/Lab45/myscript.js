// $(document).ready(function () {
//   $(".map-areas area").mouseenter(function () {
//     var idx = $(".map-areas area").index(this);
//     $(".map-hovers img:eq(" + idx + ")").show();
//     return false;
//   });
//   $(".map-hovers img").mouseleave(function () {
//     $(".map-hovers img").hide();
//     return false;
//   });
// });
$(function () {
  $(".map").maphilight({
    fill: true,
    fillColor: "777777",
    fillOpacity: 0.4,
    stroke: true,
    strokeColor: "d3be33",
    strokeOpacity: 0.6,
    strokeWidth: 1,
    fade: true,
    alwaysOn: false,
    neverOn: false,
    groupBy: false,
    wrapClass: true,
    shadow: true,
    shadowX: 0,
    shadowY: 0,
    shadowRadius: 6,
    shadowColor: "222222",
    shadowOpacity: 0.8,
    shadowPosition: "outside",
    shadowFrom: true,
  });
});

$(window).on("resize", function () {
  if ($(window).width() <= 1000) {
    $(function () {
      $(".map").maphilight({
        // fill the shape
        fill: true,

        // fill color
        fillColor: "777777",

        // fill opacity
        fillOpacity: 0.4,

        // outline the shape
        stroke: true,

        // stroke color
        strokeColor: "d3be33",

        // stroke opacity
        strokeOpacity: 0.6,

        // stroke width
        strokeWidth: 1,

        // fade in the shapes on mouseover
        fade: true,

        // always show the hilighted areas
        alwaysOn: true,

        // never show the hilighted areas
        neverOn: false,

        // The name of an attribute to group areas by, or a selector for elements in the map to group.
        // Or an array of the same
        // If this is present then all areas in the map which have the same attribute value as the hovered area will hilight as well
        groupBy: false,

        // If true, applies the class on the <img> to the wrapper div maphilight created.
        // If a string, that string is used as a class on the wrapper div.
        wrapClass: true,

        // apply a shadow to the shape
        shadow: true,
        shadowX: 0,
        shadowY: 0,
        shadowRadius: 6,
        shadowColor: "222222",
        shadowOpacity: 0.8,
        // Can be 'outside', 'inside', or 'both'.
        shadowPosition: "outside",
        // Can be 'stroke' or 'fill'
        shadowFrom: false,
      });
    });
    // $(function () {
    //   $("area").each(function () {
    //     var txt = $(this).attr("alt");
    //     var coor = $(this).attr("coords");
    //     var coorA = coor.split(",");
    //     var left = coorA[0];
    //     var top = coorA[1];

    //     var $span = $('<span class="map_title">' + txt + "</span>");
    //     $span.css({
    //       top: top + "px",
    //       left: left + "px",
    //       position: "absolute",
    //       fontSize: "8px",
    //       color: "white",
    //     });
    //     $span.appendTo("#map");
    //   });
    // });
  } else {
    $(function () {
      $(".map").maphilight({
        // fill the shape
        fill: true,

        // fill color
        fillColor: "777777",

        // fill opacity
        fillOpacity: 0.4,

        // outline the shape
        stroke: true,

        // stroke color
        strokeColor: "d3be33",

        // stroke opacity
        strokeOpacity: 0.6,

        // stroke width
        strokeWidth: 8,

        // fade in the shapes on mouseover
        fade: true,

        // always show the hilighted areas
        alwaysOn: false,

        // never show the hilighted areas
        neverOn: false,

        // The name of an attribute to group areas by, or a selector for elements in the map to group.
        // Or an array of the same
        // If this is present then all areas in the map which have the same attribute value as the hovered area will hilight as well
        groupBy: false,

        // If true, applies the class on the <img> to the wrapper div maphilight created.
        // If a string, that string is used as a class on the wrapper div.
        wrapClass: true,

        // apply a shadow to the shape
        shadow: true,
        shadowX: 0,
        shadowY: 0,
        shadowRadius: 6,
        shadowColor: "222222",
        shadowOpacity: 0.8,
        // Can be 'outside', 'inside', or 'both'.
        shadowPosition: "outside",
        // Can be 'stroke' or 'fill'
        shadowFrom: true,
      });
    });
  }
  //   $(function () {
  //     $("area").each(function () {
  //       var txt = $(this).attr("alt");
  //       var coor = $(this).attr("coords");
  //       var coorA = coor.split(",");
  //       var left = coorA[0];
  //       var top = coorA[1];

  //       var $span = $('<span class="map_title">' + txt + "</span>");
  //       $span.css({
  //         top: top + "px",
  //         left: left + "px",
  //         // position: "absolute",
  //         fontSize: "22px",
  //         color: "white",
  //       });
  //       $span.appendTo("#map");
  //     });
  //   });
});

$(".button").click(function () {
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".map").offset().top,
    },
    6000
  );
});

// $(function () {
//   $("area").each(function () {
//     var txt = $(this).attr("alt");
//     var coor = $(this).attr("coords");
//     var coorA = coor.split(",");
//     var left = coorA[0];
//     var top = coorA[1];

//     var $span = $('<span class="map_title">' + txt + "</span>");
//     $span.css({
//       top: top + "px",
//       left: left + "px",
//       position: "absolute",
//       fontSize: "22px",
//       color: "white",
//     });
//     $span.appendTo("#map");
//   });
// });
