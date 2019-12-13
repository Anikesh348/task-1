$(".paid").click(function() {
  $(".active2").css("visibility", "visible");
  $(".nonactive2").css("visibility", "collapse");
  $('.active2').attr('data-target', '#exampleModalCenter1');
});
$(".free").click(function() {
  $(".active2").css("visibility", "visible");
  $(".nonactive2").css("visibility", "collapse");
  $('.active2').attr('data-target', '#exampleModalCenter4');
});
$(".single").click(function() {
  $(".active1").css("visibility", "visible");
  $(".nonactive1").css("visibility", "collapse");
  $('.active1').attr('data-target', '#exampleModalCenter2');
});
$(".multiple").click(function() {
  $(".active1").css("visibility", "visible");
  $(".nonactive1").css("visibility", "collapse");
  $('.active1').attr('data-target', '#exampleModalCenter3');
});
var i = 0;
var c = 0;
var tprice = 0;
$(".remove").click(function() {
  $(".cardp").css("visibility", "collapse");
});
$(".add").click(function() {
  $(".cardp").css("visibility", "visible");
  $(".done").html("Done 👍");
  $(".done").css("visiblity", "visible");
  $(".submit").css("visiblity", "collapse");
});
$(".done").click(function() {
  var category = $(".test1").val();
  var price = $(".test2").val();
  if (price != " " && category != " ") {
    i++;
    c++;
  }
  $(".tprices").text(" ");
  tprice += Number(price);
  $(".test1").val(" ");
  $(".test2").val(" ");
  $(".test3").val(" ");
  if (c != 0) {
    $("ul").append("<li>" + i + " → " + category + " ₹" + price + "</li>");
    $("li").addClass("list-group-item");
    $(".cardp").css("visibility", "collapse");
    c = 0;
    $(".tprices").text("Total Cost:" + tprice);
  }
});
