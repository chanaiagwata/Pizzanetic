
function Purchase(size, crust, topping, totalPrice) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.totalPrice = totalPrice;
}

// user interface logic
$(document).ready(function () {
            $("form#customerOrder").submit(function (event) {
                event.preventDefault();

                let inputtedSize = $("#sizeInput").val();
                    let inputtedCrust = $("#crustInput").val();
                let inputtedTopping = [];
                $.each($("input[name='topping1']:checked"), function () {
                    inputtedTopping.push($(this).val()); 
                
                });
                // let numbers = inputtedTopping;
                // let sum1 = numbers.reduce((x,y)=>x+y);
                // console.log(sum1);
                // //  use switch statement as control flow for Purchase constructor
                // switch (size) {
                //     case "0":
                //         amount = 0;
                //         break;
                //     case "Large":
                //         amount = 1500;
                //         console.log(amount);
                //         break;
                //     case "Medium":
                //         amount = 900;
                //         console.log(amount);
                //         break;
                //     case "Regular":
                //         amount = 450;
                //         console.log(amount);
                //     default:
                //         console.log("invalid");
                // }
                // switch (crust) {
                //     case "0":
                //         crustPrice = 0;
                //         break;
                //     case "Flatbread":
                //         crustPrice = 50;
                //         break;
                //     case "Neapolitan pizza":
                //         crustPrice = 100;
                //         break;
                //     case "Stuffed crust":
                //         crustPrice = 150;
                //         break;
                //     case "Glutten-free":
                //         crustPrice = 200;
                //         break;
                //     case "Sicilian":
                //         crustPrice = 250;
                //         break;
                //     case "Deep-dish":
                //         crustPrice = 300;
                //         break;
                //     default:
                //         console.log("invalid")
                // }
                // let toppingCheckedValue = inputtedTopping.length * 30;
                // console.log(toppingCheckedValue);
                // let totalPrice = inputtedSize+ inputtedCrust + inputtedTopping;
                // document.getElementById("#sum").innerHTML = totalPrice;
                // if ((size == "0") && (crust == "0")) {
                //     alert("Select appropriate pizza size and crust")
                // } else {
                 
                // };
        let totalPrice = parseInt(inputtedSize) + parseInt(inputtedCrust) + parseInt(inputtedTopping);
        var newOrder = new Purchase(inputtedSize, inputtedCrust, inputtedTopping, totalPrice);
        $("#outPutValues").append('</td><td id="selectSize">'+ newOrder.size + '</td><td id="selectCrust">'+newOrder.crust + '</td><td id="selectTopping">'+newOrder.topping+'</td><td id="total">'+newOrder.totalPrice+'</td></tr>');
      console.log(newOrder.size);
      console.log(newOrder.crust);
      console.log(newOrder.topping);
      console.log(newOrder.totalPrice)

        // $("ul#outputValues").append("<li><span class='contact'>" + newOrder.size + "</span></li>");
        // $("ul#outputValues").append("<li><span class='contact'>" + newOrder.flavor + "</span></li>");
        // $("ul#outputValues").append("<li><span class='contact'>" + newOrder.crust + "</span></li>");
        // $("ul#outputValues").append("<li><span class='contact'>" + newOrder.topping + "</span></li>");





        $("#sizeInput").val("");
        $("#flavorInput").val("");
        $("#crustInput").val("");
        $("outPutValues").append("")



    // })
            });
            $(".delivery").click(function () {
                $(".deliveryDetails").toggle();
                
            });
            $(".btn").click(function(){
                alert("Your order has been received and will be delivered shortly")
            })
     });
