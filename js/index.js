$(document).ready(function () {
    var Pizza = function (size, topping, crust, flavour) {
        this.size = size;
        this.topping = topping;
        this.crust = crust;
        this.flavour = flavour;
    }
    function resetFields() {
        $("#size").val("");
        $("#flavour").val("");
        $("#crust").val("");
        $("#top").val("");
    }
    $("button#another").click(function (event) {
        event.preventDefault();
        $("#jessy").append(
            ' <label for="size">Size</label><br>' +
            '<select class="select1">' +
            '<option value="none">none</option>' +
            '<option value="Large">Large</option>' +
            '<option value="Medium">Medium</option>' +
            '<option value="Small">Small</option>' +
            '</select>' +
            '<label for="flavour">Flavour</label><br>' +
            '<select id="select2">' +
            '   <option value="none">none</option>' +
            '<option value="Brown Butter Lobster and Spinach Pizza with Bacon + Fontina">Brown Butter Lobster and Spinach Pizza with Bacon + Fontina</option>' +
            '<option value="MBuffalo Chicken Pizza Sticks">MBuffalo Chicken Pizza Sticks</option>' +
            ' <option value="Butternut Squash and Crispy Sage Pizza">Butternut Squash and Crispy Sage Pizza</option>' +
            '<option value="Macaroni And Cheese Pizza">Macaroni And Cheese Pizza</option>' +
            '<option value="Berry, Arugula and Prosciutto Pizza">Berry, Arugula and Prosciutto Pizza</option>' +
            '</select>' +
            ' <label for="crust">Crust</label><br>' +
            '<select id="select3">' +
            '  <option value="none">none</option>' +
            '<option value="Thin">Thin</option>' +
            '<option value="Thick">Thick</option>' +
            '<option value="custom">custom</option>' +
            '<option value="Focaccia">Focaccia</option>' +
            '<option value="Flatbread">Flatbread</option>' +
            '</select>' +
            ' <label for="top">Toppings</label><br>' +
            ' <select id="select4">' +
            '   <option value="none">none</option>' +
            '<option value="Gorgonzola, artichoke hearts, prosciutto, red onion, and tomato">Gorgonzola, artichoke hearts, prosciutto, red onion, and tomato</option>' +
            '<option value="Buffalo chicken and blue cheese">Buffalo chicken and blue cheese</option>' +
            '<option value="Roasted Brussels sprouts and bacon or pancetta">Roasted Brussels sprouts and bacon or pancetta</option>' +
            '<option value="Figs, prosciutto, and caramelized onions">Figs, prosciutto, and caramelized onions</option>' +
            '<option value="Sausage and pineapple">Sausage and pineapple</option>' +
            '</select>'
        );
        // $("div.col-md-4").append(
        //    '<h4>ANOTHER PIZZA ORDER DETAIL:</h4>' +
        //               '<P>Size: <span id="A">' + +'</span></P>' +
        //               '<P>Flavour: <span id="B"></span></P>' +
        //               '<P>Crust: <span id="C"></span></P>' +
        //              '<P>Toppings: <span id="D"></span></P>' +
        //               '<p>Total price: <span id="price1"></span></p>'
        // );
    });
    $("form#form").submit(function (event) {
        event.preventDefault();
        $(".col-md-4").show();
        var p = 0;
        var s = $("select.select1").val().toLowerCase();
        var f = $("#select2").val();
        var c = $("#select3").val();
        var t = $("#select4").val();
        var newPizza = new Pizza(s, f, c, t);
        $("span#first2").text(newPizza.size);
        $("span#second2").text(newPizza.flavour);
        $("span#third2").text(newPizza.crust);
        $("span#fourth2").text(newPizza.topping);
        if (newPizza.size == 'large') {
            p = 15000;
            $("span#price").text(p + 'frw');
        }
        else if (newPizza.size == 'medium') {
            p = 10000;
            $("span#price").text(p + 'frw');
        }
        else if (newPizza.size == 'small') {
            p = 8000;
            $("span#price").text(p + 'frw');
        }

        resetFields();
        //         var arrs =["Small","Medium","Large"];
        //         var arrf =['Brown Butter Lobster and Spinach Pizza with Bacon + Fontina','MBuffalo Chicken Pizza Sticks','Butternut Squash and Crispy Sage Pizza','Macaroni And Cheese Pizza','Berry, Arugula and Prosciutto Pizza'];
        //         var arrc =['Thin','Thick','Custom','Focaccia','Flatbread'];
        //      function calc(ss,ff,cc){
        //          var ps,pf,pc,total;
        //      if(ss == 'Large' && ff=='Brown Butter Lobster and Spinach Pizza with Bacon + Fontina' && cc=='Thin'){
        //       ps = 5000;
        //       pf = 8000;
        //       pc = 500;
        //     }
        //     else if(ss == 'Large' && ff=='Brown Butter Lobster and Spinach Pizza with Bacon + Fontina' && cc=='Thick'){
        //         ps = 5000;
        //         pf = 8000;
        //         pc = 3000;
        //       }
        //       else if(ss == 'Large' && ff=='Brown Butter Lobster and Spinach Pizza with Bacon + Fontina' && cc=='Custom'){
        //         ps = 5000;
        //         pf = 8000;
        //         pc = 1000;
        //       }
        //       else if(ss == 'Large' && ff=='Brown Butter Lobster and Spinach Pizza with Bacon + Fontina' && cc=='Focaccia'){
        //         ps = 5000;
        //         pf = 8000;
        //         pc = 1500;
        //       }
        //       else if(ss == 'Large' && ff=='Brown Butter Lobster and Spinach Pizza with Bacon + Fontina' && cc=='Flatbread'){
        //         ps = 5000;
        //         pf = 8000;
        //         pc = 2000;
        //       }
        //     else if(ss == 'Large' && ff=='MBuffalo Chicken Pizza Sticks' && cc=='Thin'){
        //       ps = 5000;
        //       pf = 6000;
        //       pc = 500;
        //     }
        //     else if(ss == 'Large' && ff=='MBuffalo Chicken Pizza Sticks' && cc=='Thick'){
        //         ps = 5000;
        //         pf = 6000;
        //         pc = 3000;
        //       }
        //       else if(ss == 'Large' && ff=='MBuffalo Chicken Pizza Sticks' && cc=='Custom'){
        //         ps = 5000;
        //         pf = 6000;
        //         pc = 1000;
        //       }
        //       else if(ss == 'Large' && ff=='MBuffalo Chicken Pizza Sticks' && cc=='Focaccia'){
        //         ps = 5000;
        //         pf = 6000;
        //         pc = 1500;
        //       }
        //       else if(ss == 'Large' && ff=='MBuffalo Chicken Pizza Sticks' && cc=='Flatbread'){
        //         ps = 5000;
        //         pf = 6000;
        //         pc = 2000;
        //       }
        //     else if(ss == 'Large' && ff=='Butternut Squash and Crispy Sage Pizza' && cc=='Thin'){
        //     ps = 5000;
        //     pf = 8000;
        //     pc = 500;
        //     }
        //     else if(ss == 'Large' && ff=='Macaroni And Cheese Pizza' && cc=='Thin'){
        //         ps = 5000;
        //         pf = 2000;
        //         pc = 500;
        //         }
        //     else if(ss == 'Large' && ff=='Macaroni And Cheese Pizza' && cc=='Thick'){
        //     ps = 5000;
        //     pf = 2000;
        //     pc = 3000;
        //     }
        //     else if(ss == 'Large' && ff=='Macaroni And Cheese Pizza' && cc=='Custom'){
        //         ps = 5000;
        //         pf = 2000;
        //         pc = 1000;
        //         }
        //     else if(ss == 'Large' && ff=='Macaroni And Cheese Pizza' && cc=='Foccacia'){
        //             ps = 5000;
        //             pf = 2000;
        //             pc = 1500;
        //             }
        //             else if(ss == 'Large' && ff=='Macaroni And Cheese Pizza' && cc=='Flatbread'){
        //                 ps = 5000;
        //                 pf = 2000;
        //                 pc = 2000;
        //                 }        
        //     else  if(ss == 'large' && ff=='Berry, Arugula and Prosciutto Pizza' && cc=='Thin'){
        //     ps = 5000;
        //     pf = 1000;
        //     pc = 500;
        // }
        //     else if(ss == 'Large' && ff=='Berry, Arugula and Prosciutto Pizza' && cc=='Thick'){
        //         ps = 5000;
        //         pf = 1000;
        //         pc = 3000;
        //         }
        //         else if(ss == 'Large' && ff=='Berry, Arugula and Prosciutto Pizza' && cc=='Custom'){
        //             ps = 5000;
        //             pf = 1000;
        //             pc = 1000;
        //             }
        //         else if(ss == 'Large' && ff=='Berry, Arugula and Prosciutto Pizza' && cc=='Foccacia'){
        //                 ps = 5000;
        //                 pf = 1000;
        //                 pc = 1500;
        //                 }
        //                 else if(ss == 'Large' && ff=='Berry, Arugula and Prosciutto Pizza' && cc=='Flatbread'){
        //                     ps = 5000;
        //                     pf = 1000;
        //                     pc = 2000;
        //                     }    
        //     else if(ss == 'Large' && ff=='Butternut Squash and Crispy Sage Pizza' && cc=='Thick'){
        //         ps = 5000;
        //         pf = 8000;
        //         pc = 3000;
        //         }  
        //         else if(ss == 'Large' && ff=='Butternut Squash and Crispy Sage Pizza' && cc=='Custom'){
        //             ps = 5000;
        //             pf = 8000;
        //             pc = 1000;
        //             }
        //         else if(ss == 'Large' && ff=='Butternut Squash and Crispy Sage Pizza' && cc=='Foccacia'){
        //                 ps = 5000;
        //                 pf = 8000;
        //                 pc = 1500
        //                 }
        //                 else if(ss == 'Large' && ff=='Butternut Squash and Crispy Sage Pizza' && cc=='Flatbread'){
        //                     ps = 5000;
        //                     pf = 8000;
        //                     pc = 2000;
        //                     }        
        //     else  if(ss == 'Medium' && ff=='Brown Butter Lobster and Spinach Pizza with Bacon + Fontina' && cc=='Thin'){
        //         ps = 3000;
        //         pf = 8000;
        //         pc = 500;
        //       }
        //       else if(ss == 'Medium' && ff=='Brown Butter Lobster and Spinach Pizza with Bacon + Fontina' && cc=='Thick'){
        //           ps = 3000;
        //           pf = 8000;
        //           pc = 3000;
        //         }
        //         else if(ss == 'Medium' && ff=='Brown Butter Lobster and Spinach Pizza with Bacon + Fontina' && cc=='Custom'){
        //           ps = 3000;
        //           pf = 8000;
        //           pc = 1000;
        //         }
        //         else if(ss == 'Medium' && ff=='Brown Butter Lobster and Spinach Pizza with Bacon + Fontina' && cc=='Focaccia'){
        //           ps = 3000;
        //           pf = 8000;
        //           pc = 1500;
        //         }
        //         else if(ss == 'Medium' && ff=='Brown Butter Lobster and Spinach Pizza with Bacon + Fontina' && cc=='Flatbread'){
        //           ps = 3000;
        //           pf = 8000;
        //           pc = 2000;
        //         }
        //       else if(ss == 'Medium' && ff=='MBuffalo Chicken Pizza Sticks' && cc=='Thin'){
        //         ps = 3000;
        //         pf = 6000;
        //         pc = 500;
        //       }
        //       else if(ss == 'Medium' && ff=='MBuffalo Chicken Pizza Sticks' && cc=='Thick'){
        //           ps = 3000;
        //           pf = 6000;
        //           pc = 3000;
        //         }
        //         else if(ss == 'Medium' && ff=='MBuffalo Chicken Pizza Sticks' && cc=='Custom'){
        //           ps = 3000;
        //           pf = 6000;
        //           pc = 1000;
        //         }
        //         else if(ss == 'Medium' && ff=='MBuffalo Chicken Pizza Sticks' && cc=='Focaccia'){
        //           ps = 3000;
        //           pf = 6000;
        //           pc = 1500;
        //         }
        //         else if(ss == 'Medium' && ff=='MBuffalo Chicken Pizza Sticks' && cc=='Flatbread'){
        //           ps = 3000;
        //           pf = 6000;
        //           pc = 2000;
        //         }
        //       else if(ss == 'Medium' && ff=='Butternut Squash and Crispy Sage Pizza' && cc=='Thin'){
        //       ps = 3000;
        //       pf = 8000;
        //       pc = 500;
        //       }
        //       else if(ss == 'Medium' && ff=='Macaroni And Cheese Pizza' && cc=='Thin'){
        //           ps = 3000;
        //           pf = 2000;
        //           pc = 500;
        //           }
        //       else if(ss == 'Medium' && ff=='Macaroni And Cheese Pizza' && cc=='Thick'){
        //       ps = 3000;
        //       pf = 2000;
        //       pc = 3000;
        //       }
        //       else if(ss == 'Medium' && ff=='Macaroni And Cheese Pizza' && cc=='Custom'){
        //           ps = 3000;
        //           pf = 2000;
        //           pc = 1000;
        //           }
        //       else if(ss == 'Medium' && ff=='Macaroni And Cheese Pizza' && cc=='Foccacia'){
        //               ps = 3000;
        //               pf = 2000;
        //               pc = 1500;
        //               }
        //               else if(ss == 'Medium' && ff=='Macaroni And Cheese Pizza' && cc=='Flatbread'){
        //                   ps = 3000;
        //                   pf = 2000;
        //                   pc = 2000;
        //                   }        
        //       else  if(ss == 'Medium' && ff=='Berry, Arugula and Prosciutto Pizza' && cc=='Thin'){
        //       ps = 3000;
        //       pf = 1000;
        //       pc = 500;
        //     }
        //       else if(ss == 'Medium' && ff=='Berry, Arugula and Prosciutto Pizza' && cc=='Thick'){
        //           ps = 3000;
        //           pf = 1000;
        //           pc = 3000;
        //           }
        //           else if(ss == 'Medium' && ff=='Berry, Arugula and Prosciutto Pizza' && cc=='Custom'){
        //               ps = 3000;
        //               pf = 1000;
        //               pc = 1000;
        //               }
        //           else if(ss == 'Medium' && ff=='Berry, Arugula and Prosciutto Pizza' && cc=='Foccacia'){
        //                   ps = 3000;
        //                   pf = 1000;
        //                   pc = 1500;
        //                   }
        //                   else if(ss == 'Medium' && ff=='Berry, Arugula and Prosciutto Pizza' && cc=='Flatbread'){
        //                       ps = 3000;
        //                       pf = 1000;
        //                       pc = 2000;
        //                       }    
        //       else if(ss == 'Medium' && ff=='Butternut Squash and Crispy Sage Pizza' && cc=='Thick'){
        //           ps = 3000;
        //           pf = 8000;
        //           pc = 3000;
        //           }  
        //           else if(ss == 'Medium' && ff=='Butternut Squash and Crispy Sage Pizza' && cc=='Custom'){
        //               ps = 3000;
        //               pf = 8000;
        //               pc = 1000;
        //               }
        //           else if(ss == 'Medium' && ff=='Butternut Squash and Crispy Sage Pizza' && cc=='Foccacia'){
        //                   ps = 3000;
        //                   pf = 8000;
        //                   pc = 1500;
        //                   }
        //                   else if(ss == 'Medium' && ff=='Butternut Squash and Crispy Sage Pizza' && cc=='Flatbread'){
        //                       ps = 3000;
        //                       pf = 8000;
        //                       pc = 2000;
        //                       } 
        //                       else  if(ss == 'Small' && ff=='Brown Butter Lobster and Spinach Pizza with Bacon + Fontina' && cc=='Thin'){
        //                         ps = 1000;
        //                         pf = 8000;
        //                         pc = 500;
        //                       }
        //                       else if(ss == 'Small' && ff=='Brown Butter Lobster and Spinach Pizza with Bacon + Fontina' && cc=='Thick'){
        //                           ps = 1000;
        //                           pf = 8000;
        //                           pc = 3000;
        //                         }
        //                         else if(ss == 'Small' && ff=='Brown Butter Lobster and Spinach Pizza with Bacon + Fontina' && cc=='Custom'){
        //                           ps = 1000;
        //                           pf = 8000;
        //                           pc = 1000;
        //                         }
        //                         else if(ss == 'Small' && ff=='Brown Butter Lobster and Spinach Pizza with Bacon + Fontina' && cc=='Focaccia'){
        //                           ps = 1000;
        //                           pf = 8000;
        //                           pc = 1500;
        //                         }
        //                         else if(ss === 'Small' && ff=='Brown Butter Lobster and Spinach Pizza with Bacon + Fontina' && cc=='Flatbread'){
        //                           ps = 1000;
        //                           pf = 8000;
        //                           pc = 2000;
        //                         }
        //                       else if(ss === 'Small' && ff==='MBuffalo Chicken Pizza Sticks' && cc==='Thin'){
        //                         ps = 1000;
        //                         pf = 6000;
        //                         pc = 500;
        //                       }
        //                       else if(ss === 'Small' && ff==='MBuffalo Chicken Pizza Sticks' && cc==='Thick'){
        //                           ps = 1000;
        //                           pf = 6000;
        //                           pc = 3000;
        //                         }
        //                         else if(ss === 'Small' && ff==='MBuffalo Chicken Pizza Sticks' && cc==='Custom'){
        //                           ps = 1000;
        //                           pf = 6000;
        //                           pc = 1000;
        //                         }
        //                         else if(ss === 'Small' && ff==='MBuffalo Chicken Pizza Sticks' && cc==='Focaccia'){
        //                           ps = 1000;
        //                           pf = 6000;
        //                           pc = 1500;
        //                         }
        //                         else if(ss ==='Small' && ff==='MBuffalo Chicken Pizza Sticks' && cc==='Flatbread'){
        //                           ps = 1000;
        //                           pf = 6000;
        //                           pc = 2000;
        //                         }
        //                       else if(ss ==='Small' && ff==='Butternut Squash and Crispy Sage Pizza' && cc==='Thin'){
        //                       ps = 1000;
        //                       pf = 8000;
        //                       pc = 500;
        //                       }
        //                       else if(ss === 'Small' && ff==='Macaroni And Cheese Pizza' && cc==='Thin'){
        //                           ps = 1000;
        //                           pf = 2000;
        //                           pc = 500;
        //                           }
        //                       else if(ss === 'Small' && ff==='Macaroni And Cheese Pizza' && cc==='Thick'){
        //                       ps = 1000;
        //                       pf = 2000;
        //                       pc = 3000;
        //                       }
        //                       else if(ss === 'Small' && ff==='Macaroni And Cheese Pizza' && cc==='Custom'){
        //                           ps = 1000;
        //                           pf = 2000;
        //                           pc = 1000;
        //                           }
        //                       else if(ss === 'Small' && ff==='Macaroni And Cheese Pizza' && cc==='Foccacia'){
        //                               ps = 1000;
        //                               pf = 2000;
        //                               pc = 1500;
        //                               }
        //                               else if(ss === 'Small' && ff==='Macaroni And Cheese Pizza' && cc==='Flatbread'){
        //                                   ps = 1000;
        //                                   pf = 2000;
        //                                   pc = 2000;
        //                                   }        
        //                       else  if(ss === 'Small' && ff==='Berry, Arugula and Prosciutto Pizza' && cc==='Thin'){
        //                       ps = 1000;
        //                       pf = 1000;
        //                       pc = 500;
        //                     }
        //                       else if(ss === 'Small' && ff==='Berry, Arugula and Prosciutto Pizza' && cc === 'Thick'){
        //                           ps = 1000;
        //                           pf = 1000;
        //                           pc = 3000;
        //                           }
        //                           else if(ss === 'Small' && ff === 'Berry, Arugula and Prosciutto Pizza' && cc === 'Custom'){
        //                               ps = 1000;
        //                               pf = 1000;
        //                               pc = 1000;
        //                               }
        //                           else if(ss === 'Small' && ff==='Berry, Arugula and Prosciutto Pizza' && cc==='Foccacia'){
        //                                   ps = 1000;
        //                                   pf = 1000;
        //                                   pc = 1500;
        //                                   }
        //                                   else if(ss === 'Small' && ff==='Berry, Arugula and Prosciutto Pizza' && cc==='Flatbread'){
        //                                       ps = 1000;
        //                                       pf = 1000;
        //                                       pc = 2000;
        //                                       }    
        //                       else if(ss === 'Small' && ff==='Butternut Squash and Crispy Sage Pizza' && cc==='Thick'){
        //                           ps = 1000;
        //                           pf = 8000;
        //                           pc = 3000;
        //                           }  
        //                           else if(ss === 'Small' && ff==='Butternut Squash and Crispy Sage Pizza' && cc==='Custom'){
        //                               ps = 1000;
        //                               pf = 8000;
        //                               pc = 1000;
        //                               }
        //                           else if(ss === 'Small' && ff==='Butternut Squash and Crispy Sage Pizza' && cc==='Foccacia'){
        //                                   ps = 1000;
        //                                   pf = 8000;
        //                                   pc = 1500;
        //                                   }
        //                                   else if(ss=== 'Small' && ff==='Butternut Squash and Crispy Sage Pizza' && cc==='Flatbread'){
        //                                       ps = 1000;
        //                                       pf = 8000;
        //                                       pc = 2000;
        //                                       } 
        //                                       else{ }                  

        //       total =ps+pc+pf;
        //       return total;
        //     }
        $("span#price").text(p + ' frw');
    });
    $("button#yes").click(function () {
        prompt("enter your address");
        alert("YOUR PIZZA WILL BE DELIVERD SOON");
    });
    $("button#no").click(function () {
        alert("thank you for choosing our service!");
    });
});