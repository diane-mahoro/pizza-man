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
        var sP, cP, fP, tP;
        var siz =['large', 'medium', 'small'];
        var cru =['thin', 'thick', 'focaccia', 'custom', 'flatbread'];
        var top =['Buffalo chicken and blue cheese','Gorgonzola, artichoke hearts, prosciutto, red onion, and tomato','Sausage and pineapple','Figs, prosciutto, and caramelized onions','Roasted Brussels sprouts and bacon or pancetta'];
        var fla = ['Brown Butter Lobster and Spinach Pizza with Bacon + Fontina','Butternut Squash and Crispy Sage Pizza','Butternut Squash and Crispy Sage Pizza','Macaroni And Cheese Pizza','Butternut Squash and Crispy Sage Pizza'];
        var calcPrice = function(s,t,c,f){}
        if(s === siz[0]){
            sP = 4000;
            if(t === top[0]){
                tP = 5000;
                if(c === cru[0]){
                    tP = 8000
                    if(f === fla[0]){
                        fP = 8000;
                    }
                    else if(f === fla[1]){
                        fP = 6000;
                    }
                    else if(f === fla[2]){
                        fP = 4000;
                    }
                    else if(f === fla[3]){
                        fP = 2000;
                    }
                    else if(f === fla[4]){
                        fP = 1000;
                    }
                    else if(c === cru[1]){
                        tP = 6000
                    }
                    else if(c === cru[2]){
                        tP = 4000
                    }
                    else if(c === cru[3]){
                        tP = 2000
                    }
                    else if(c === cru[4]){
                        tP = 1000
                    }
               }
               else if(t === top[1]){
                tP = 4000;``
            }
            else if(t === top[2]){
                tP = 3000;
            }
            else if(t === top[3]){
                tP = 2000;
            }
            else if(t === top[4]){
                tP = 1000;
            }
        }
        else if(s === siz[1]){
            sP = 2000;
        }
        else if(s === siz[1]){
            sP = 1000;
        }
     var totalPrice = sP + cP + tP + f;
     return totalPrice;
    };
    $("span#price").text(calcPrice(s,p,c,f));
    $("#size").val("");
    $("#flavour").val("");
    $("#crust").val("");
    $("#top").val("");
});
});