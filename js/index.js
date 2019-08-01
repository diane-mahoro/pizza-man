$(document).ready(function() {
var Pizza = function(size,topping,crust,flavour){
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.flavour = flavour;
}
$("form#form").submit(function(event){
    event.preventDefault();
    var s = $("#size").val();
    var f =$("#flavour").val();
    var c =$("#crust").val();
    var t =$("#top").val();
    var newPizza = new Pizza(s,f,c,t);
   



    $("#size").val("");
    $("#flavour").val("");
    $("#crust").val("");
    $("#top").val("");
});
});