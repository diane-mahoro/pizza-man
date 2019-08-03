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
              '<P>Size: <span id="A"></span></P>' +
              '<P>Flavour: <span id="B"></span></P>' +
              '<P>Crust: <span id="C"></span></P>' +
             '<P>Toppings: <span id="D"></span></P>' +
              '<p>Total price: <span id="price1"></span></p>'
);
});
$("form#form").submit(function(event){
    event.preventDefault();
    var p=0;
    var s = $("#first").val();
    var f =$("#second").val();
    var c =$("#third").val();
    var t =$("#fourth").val();
    var newPizza = new Pizza(s,f,c,t);
    if(s=='large' && f =='Berry, Arugula and Prosciutto Pizza' && c =='Thin' && t =='Sausage and pineapple'){
        p = 11000;
    }
    else if(s=="medium" && f =="Berry, Arugula and Prosciutto Pizza" && c =="Thin" && t =="Berry, Arugula and Prosciutto Pizza"){
        p= 8000;
    }
    else{p=6000;}
    $("span#first1").text(s);
    $("span#second1").text(f);

    // return alert(p);

    $("#size").val("");
    $("#flavour").val("");
    $("#crust").val("");
    $("#top").val("");
});
});