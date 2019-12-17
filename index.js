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
var t = 0;
var tprice = 0;
$(".remove").click(function() {
  $(".cardp").css("visibility", "collapse");
  $(".done").text("Submit ✌");
  t = 1;
});
$(".add").click(function() {
  $(".cardp").css("visibility", "visible");
  $(".done").html("Done 👍");
  $(".done").removeAttr("data-dismiss", "modal");
  t = 0;


});
$(".done").click(function() {
  t++;
  var category = $(".test1").val();
  var price = $(".test2").val();
  if (price != " " && category != " ") {
    i++;
    c++;

  }
  $(".test1").val(" ");
  $(".test2").val(" ");
  $(".test3").val(" ");
  $(".tprices").text(" ");
  tprice += Number(price);

  if (c != 0) {
    $(".entry").append("<li class=\"li\">" + i + " → " + category + " ₹" + price + "</li>");
    $(".li").addClass("list-group-item");
    $(".cardp").css("visibility", "collapse");
    c = 0;
    $(".tprices").text("Total Cost:" + tprice);
    $(".done").text("Submit ✌");

  }
  else
  {
    if(t==1)
    {swal("Error", "Please fill the form first!!", "error");
      t=0;
     }

  }
  if (t == 2) {
    $(".done").attr("data-dismiss", "modal");
    swal("Congrats!", " Ticket Booked!", "success");
    t = 0;

  }


});
$(".done2").click(function(){
  swal("Congrats!", " Ticket Booked!", "success");
});
