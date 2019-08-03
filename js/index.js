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
    var s = $("#first").val();
    var f =$("#second").val();
    var c =$("#third").val();
    var t =$("#fourth").val();
    var newPizza = new Pizza(s,f,c,t);
    $("span#first2").text(newPizza.size);
    $("span#second2").text(newPizza.flavour);
    $("span#third2").text(newPizza.crust);
    $("span#fourth2").text(newPizza.topping);
        var sP, cP, fP, tP;
        if(s == 'large' && t == 'Buffalo chicken and blue cheese' && f== 'Brown Butter Lobster and Spinach Pizza with Bacon + Fontina' && c == 'flatbread')
        sP = 4000;
        tP = 5000;
        fP = 3000;
        cP = 3000;
    }
    else if(S == 'medium' && c == 'thick' && f == 'Buffalo Chicken Pizza Sticks' && t =='Gorgonzola, artichoke hearts, prosciutto, red onion, and tomato'){
        sP= 2000;
        cP= 2000;
        tP =4000;
        fP = 4000;
    }
    else if(S == 'small' && c == 'thin' && f == 'Butternut Squash and Crispy Sage Pizza' && t =='Sausage and pineapple' && t=='Figs, prosciutto, and caramelized onions'){
       sP = 1000;
       cP = 500;
       fP = 1000;
       tP =1000;
    }
    else if(c == 'custom' && c == 'focaccia' && f == 'Macaroni And Cheese Pizza' && f=='Butternut Squash and Crispy Sage Pizza' t=='Roasted Brussels sprouts and bacon or pancetta'){
       cP = 5000;
       fP = 2500;
       tP = 1500;

    }
    else{
        alert("PLEASE PLACE THE ORDER");
    }
    P = sP + tP + fP + cP;
    alert(p);
    $("span#price").text();
    $("#size").val("");
    $("#flavour").val("");
    $("#crust").val("");
    $("#top").val("");
});
});