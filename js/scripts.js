$(document).ready(function() {
  $("#blanks").click(function() {

    var itemOne = $("input#itemOne").val();
    var itemTwo = $("input#itemTwo").val();
    var itemThree = $("input#itemThree").val();
    var itemFour = $("input#itemFour").val();
    var itemFive = $("input#itemFive").val();

    var groceryItems = [itemOne, itemTwo, itemThree, itemFour, itemFive];

    var groceryOrder = groceryItems.map(function(groceryItem) {
     return groceryItem.toUpperCase();
    });

    var groceryOrderTwo = groceryOrder.sort();

    $(".groceries").append("<li>"+groceryOrderTwo[0]+"</li>");
    $(".groceries").append("<li>"+groceryOrderTwo[1]+"</li>");
    $(".groceries").append("<li>"+groceryOrderTwo[2]+"</li>");
    $(".groceries").append("<li>"+groceryOrderTwo[3]+"</li>");
    $(".groceries").append("<li>"+groceryOrderTwo[4]+"</li>");

  //$(".groceries").show();

    event.preventDefault();
  });
});
