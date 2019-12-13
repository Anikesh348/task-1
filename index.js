$(".paid").click(function() {
  $(".active").css("visibility", "visible");
  $(".nonactive").css("visibility", "collapse");
  $('.active').attr('data-target','#exampleModalCenter1');
});
$(".free").click(function(){
  $(".active").css("visibility", "visible");
  $(".nonactive").css("visibility", "collapse");
  $('.active').attr('data-target','#exampleModalCenter2');
});
$(".single").click(function() {
  $(".active1").css("visibility", "visible");
  $(".nonactive1").css("visibility", "collapse");
  $('.active1').attr('data-target','#exampleModalCenter2');
});
$(".multiple").click(function(){
  $(".active1").css("visibility", "visible");
  $(".nonactive1").css("visibility", "collapse");
  $('.active1').attr('data-target','#exampleModalCenter3');
});
var i = 0;
var c = 0;
$(".remove").click(function() {
  $(".cardp").css("visibility", "collapse");

});
$(".add").click(function() {
  $(".cardp").css("visibility", "visible");
  $(".done").html("Done 👍");
});
$(".done").click(function() {
  var price = $(".test2").val();
  var category = $(".test1").val();
  if (price != " " && category != " ") {
    i++;
    c++;
  }
  $(".test1").val(" ");
  $(".test2").val(" ");
  $(".test3").val(" ");
  if (c != 0) {
    $(".price").append("<li>" + i + " 👉 " + category + " ₹" + price + "<br>" + "</li>");
    $("li").addClass("list-group-item");
    $(".cardp").css("visibility", "collapse");
    c = 0;
    $(".done").html("Submit ✌");

  }
});
// $(".submit").click(function()
// { var compare = $(".submit").html();
//
//   if(compare === "Submit ✌")
//     {
//       $('.done').attr("data-dismiss","modal");
//     }
// });
