document.write("<div class='right-aligned'><h1 id='test'> JQuery H1 with id = test</h1></div>")
document.write("<div class='container'>")
document.write("<p class='test'> This is a JQuery P with test class<p>")
document.write("<p> Regular P </p>")
document.write("<button type='button'> This is a hide JQuery button testing</button>")
document.write("<h2 id='show'> This is a  show JQuery button testing with timer</h2>")
document.write("<h2 id='hide'> This is a  hide JQuery button testing with timer</h2>")
document.write("<h2 id='callback'> This is a  callback  show then hide all in one JQuery button testing with timer</h2>")

document.write("</div>")

$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  })
// $(document).ready(function(){
//   $("#show").click(function(){
//     $("p").show();
//   })
// })

  $("#show").click(function(){
    $("p").show(1500);
    $("#callback").show();
  });
  $("#hide").click(function(){
    $("#callback").hide(150, function(){
      alert("Hidden");
    });
  });

  
  $("#callback").click(function(){
    $(".test").show(1500, function(){  //Call back function (functione within function)
      $(".test").hide(150, function() {
        alert("The callback is complete.")
      });
    });
  });
  
});

