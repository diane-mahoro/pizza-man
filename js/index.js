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