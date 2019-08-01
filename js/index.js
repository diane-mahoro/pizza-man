$(document).ready(function() {
var Pizza = function(size,topping,crust,flavour){
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.flavour = flavour;
}
$("form#form").submit(function(event){
    event.preventDefault();
    var p=0;
    var s = $("#size").val();
    var f =$("#flavour").val();
    var c =$("#crust").val();
    var t =$("#top").val();
    var newPizza = new Pizza(s,f,c,t);
    if(newPizza.s=="large" && newPizza.f =="Berry, Arugula and Prosciutto Pizza" && newPizza.c =="Thin" && newPizza.t.length =="Berry, Arugula and Prosciutto Pizza"){
        p = 11000;
    }
    else if(newPizza.s=="medium" && newPizza.f =="Berry, Arugula and Prosciutto Pizza" && newPizza.c =="Thin" && newPizza.t.length =="Berry, Arugula and Prosciutto Pizza"){
        p= 8000;
    }
    else{p=6000;}
    return alert(p);
    $("#size").val("");
    $("#flavour").val("");
    $("#crust").val("");
    $("#top").val("");
});
});