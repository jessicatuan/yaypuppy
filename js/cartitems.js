  
  $(document).ready(function(){

  $.getJSON("https:www.diypestspray.com/home3/diypests/public_html/matt_test/items.json", function(json) {

    for(var i in json) {
      $(".products").append("<div class=\"large-4 small-6 columns\"><img src=\"" + json[i].imgurl + "\"><div class=\"panel\"><h5>" + json[i].name + "</h5><h6 class= \"subheader item-price\"> $" + json[i].price +" </h6></div><div class=\"list-item-add\"><a href=\"#\" class=\"button\">Add to cart</a></div></div></div>");
    }
});

  updateTotal = function() {
    var total = 0;
    $(".cart-item-price").each(function() {
      total += parseInt($(this).html().substring(1));
    });
    $("#cart-total").html("$" + total);
  };

  $(document).on("click", ".list-item-add .button", function (e) {
    e.preventDefault();
    var $parent = $(this).parents(".list-item");
    var name = $parent.find(".list-item-name").html();
    var price = $parent.find(".list-item-price").html();
    $("#cart tbody").append("<tr class=\"cart-item\"><td class=\"cart-item-name\">" + name + "</td><td class=\"cart-item-price\">" + price + "</td><td class=\"cart-item-remove\"><a href=\"#\" class=\"button\">Remove</a></td></tr>");
    updateTotal();
  });

  $(document).on("click", ".cart-item-remove .button", function (e) {
    e.preventDefault();
    $(this).parents(".cart-item").remove();
    updateTotal();
  });

});
