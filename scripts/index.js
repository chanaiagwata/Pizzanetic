
// var sizeValue = document.getElementById("#sizeInput").value;
// var crustValue = document.getElementById("#crustInput").value;
// var toppingValue = document.getElementById("#topping2").value;
// var checkout = document.getElementById("#button1")

// function calculate(){
//     if(sizeValue ==""){
//         alert("Ensure you've selected size")
//     }
//     else if (crustValue==""){
//         alert("Ensure you've selected crust")
//     }
//     else if(toppingValue==""){
//         alert("Ensure you've selected topping")
//     }
//     else{
//     document.getElementById("sum").innerHTML= sizeValue+crustValue+toppingValue
//     }
// }
// checkout.addEventListener("click", function (e) {
//     e.preventDefault();
//  calculate()
// });


// business logic
function Purchase(size, flavor, crust, topping, total) {
    this.size = size;
    this.flavor = flavor;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
}

// user interface logic
$(document).ready(function () {
            $("form#customerOrder").submit(function (event) {
                event.preventDefault();

                let inputtedSize = $("#sizeInput").val();
                let inputtedFlavor = $("#flavorInput").val();
                let inputtedCrust = $("#crustInput").val();
                let inputtedTopping = [];

                $.each($("input[name='topping1']:checked"), function () {
                    inputtedTopping.push($(this).val());
                });
                console.log(inputtedTopping.join(","));
                //  use switch statement as control flow for Purchase constructor
                switch (size) {
                    case "0":
                        amount = 0;
                        break;
                    case "Large":
                        amount = 1500;
                        console.log(amount);
                        break;
                    case "Medium":
                        amount = 900;
                        console.log(amount);
                        break;
                    case "Regular":
                        amount = 450;
                        console.log(amount);
                    default:
                        console.log("invalid");
                }
                switch (crust) {
                    case "0":
                        crustPrice = 0;
                        break;
                    case "Flatbread":
                        crustPrice = 50;
                        break;
                    case "Neapolitan pizza":
                        crustPrice = 100;
                        break;
                    case "Stuffed crust":
                        crustPrice = 150;
                        break;
                    case "Glutten-free":
                        crustPrice = 200;
                        break;
                    case "Sicilian":
                        crustPrice = 250;
                        break;
                    case "Deep-dish":
                        crustPrice = 300;
                        break;
                    default:
                        console.log("invalid")
                }
                let toppingCheckedValue = inputtedTopping.length * 30;
                console.log(toppingCheckedValue);
                var totalPrice = amount + crustPrice + inputtedTopping;
                $("#sum").append(totalPrice);
                // if ((size == "0") && (crust == "0")) {
                //     alert("Select appropriate pizza size and crust")
                // } else {
                 
                // };

        // var newOrder = new Purchase(inputtedSize, inputtedFlavor, inputtedCrust, inputtedTopping);

        // $("ul#outputValues").append("<li><span class='contact'>" + newOrder.size + "</span></li>");
        // $("ul#outputValues").append("<li><span class='contact'>" + newOrder.flavor + "</span></li>");
        // $("ul#outputValues").append("<li><span class='contact'>" + newOrder.crust + "</span></li>");
        // $("ul#outputValues").append("<li><span class='contact'>" + newOrder.topping + "</span></li>");





        // $("#sizeInput").val("");
        // $("#flavorInput").val("");
        // $("#crustInput").val("");



    // })
            });
            $(".delivery").click(function () {
                $(".deliveryDetails").toggle();
                
            });
            $(".btn").click(function(){
                alert("Your order has been received and will be delivered shortly")
            })
     });
