$(document).ready(function() {
var Pizza = function(size,topping,crust,flavour){
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.flavour = flavour;
}
$("button#another").click(function(event){
    event.preventDefault();
$("form#form").append(
    '<label for="size">Size</label><br>' +
    ' <input type="text" id="first">' +
    '<label for="flavour">Flavour</label>' +
    '<input type="text"id="second">' +
   '<label for="crust">Crust</label>' +
   '<input type="text" id="third">' +
   '<label for="top">Toppings</label> <br>' +
   '<input type="text" id="fourth">'
);
$("div.col-md-4").append(
   '<h4>ANOTHER PIZZA ORDER DETAIL:</h4>' +
              '<P>Size: <span id="first"></span></P>' +
              '<P>Flavour: <span id="second"></span></P>' +
              '<P>Crust: <span id="third"></span></P>' +
             '<P>Toppings: <span id="fourth"></span></P>' +
              '<p>Total price: <span id="price"></span></p>'
);
});
$("form#form").submit(function(event){
    event.preventDefault();
    var p=0;
    var s = $("#size").val();
    var f =$("#flavour").val();
    var c =$("#crust").val();
    var t =$("#top").val();
    var newPizza = new Pizza(s,f,c,t);
    if(s=='large' && f =='Berry, Arugula and Prosciutto Pizza' && c =='Thin' && t =='Sausage and pineapple'){
        p = 11000;
    }
    else if(s=="medium" && f =="Berry, Arugula and Prosciutto Pizza" && c =="Thin" && t =="Berry, Arugula and Prosciutto Pizza"){
        p= 8000;
    }
    else{p=6000;}
    $("#first").text(newPizza.size);
    $("#second").text(newPizza.flavour);
    // return alert(p);

    $("#size").val("");
    $("#flavour").val("");
    $("#crust").val("");
    $("#top").val("");
});
});