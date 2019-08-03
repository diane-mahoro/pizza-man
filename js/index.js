$(document).ready(function() {
var Pizza = function(size,topping,crust,flavour){
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.flavour = flavour;
}
$("button#another").click(function(event){
    event.preventDefault();
$("#jessy").append(
    '<label for="size">Size</label><br>' +
    ' <input type="text" id="first1">' +
    '<label for="flavour">Flavour</label>' +
    '<input type="text"id="second1">' +
   '<label for="crust">Crust</label>' +
   '<input type="text" id="third1">' +
   '<label for="top">Toppings</label> <br>' +
   '<input type="text" id="fourth1">'
);
$("div.col-md-4").append(
   '<h4>ANOTHER PIZZA ORDER DETAIL:</h4>' +
              '<P>Size: <span id="A">' + +'</span></P>' +
              '<P>Flavour: <span id="B"></span></P>' +
              '<P>Crust: <span id="C"></span></P>' +
             '<P>Toppings: <span id="D"></span></P>' +
              '<p>Total price: <span id="price1"></span></p>'
);
});
$("form#form").submit(function(event){
    event.preventDefault();
    var p=0;
    var s = $("#first").val().toLowerCase();
    var f =$("#second").val().toLowerCase();
    var c =$("#third").val().toLowerCase();
    var t =$("#fourth").val().toLowerCase();
    var newPizza = new Pizza(s,f,c,t);
    $("span#first2").text(newPizza.size);
    $("span#second2").text(newPizza.flavour);
    $("span#third2").text(newPizza.crust);
    $("span#fourth2").text(newPizza.topping);
    $("#size").val("");
    $("#flavour").val("");
    $("#crust").val("");
    $("#top").val("");
        if( newPizza.size == 'large'){
            p = 15000;
            $("span#price").text(p + 'frw');
        }
        else if( newPizza.size == 'medium'){
            p = 10000;
            $("span#price").text(p + 'frw');
        }
        else if( newPizza.size == 'small'){
            p = 8000;
            $("span#price").text(p + 'frw');
        }
});
});