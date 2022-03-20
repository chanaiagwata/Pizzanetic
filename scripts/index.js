// business logic
function Purchase(size, flavor, crust, topping) {
    this.size = size;
    this.flavor = flavor;
    this.crust = crust;
    this.topping = topping;
}

// user interface logic
$(document).ready(function () {
    $("form#customerOrder").submit(function (event) {
        event.preventDefault();

        var inputtedSize = $("#sizeInput").val();
        var inputtedFlavor =$("#flavorInput").val();
        var inputtedCrust =$("#crustInput").val();
        var inputtedTopping=$("#topping2").val();



        var newOrder = new Purchase(inputtedSize, inputtedFlavor, inputtedCrust, inputtedTopping);

        $("ul#outputValues").append("<li><span class='contact'>"+newOrder.size+ "</span></li>");
        $("ul#outputValues").append("<li><span class='contact'>"+newOrder.flavor+ "</span></li>");
        $("ul#outputValues").append("<li><span class='contact'>"+newOrder.crust+ "</span></li>");
        $("ul#outputValues").append("<li><span class='contact'>"+newOrder.topping+ "</span></li>");

        


    })





    $(".delivery").click(function () {
        $(".deliveryDetails").toggle();
    });
});
