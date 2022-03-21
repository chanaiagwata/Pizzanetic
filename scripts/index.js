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
        let totalPrice = parseInt(inputtedSize) + parseInt(inputtedCrust) + parseInt(inputtedTopping);
        var newOrder = new Purchase(inputtedSize, inputtedCrust, inputtedTopping, totalPrice);
        $("#outPutValues").append('</td><td id="selectSize">' + newOrder.size + '</td><td id="selectCrust">' + newOrder.crust + '</td><td id="selectTopping">' + newOrder.topping + '</td><td id="total">' + newOrder.totalPrice + '</td></tr>');
        console.log(newOrder.size);
        console.log(newOrder.crust);
        console.log(newOrder.topping);
        console.log(newOrder.totalPrice)

        $("#sizeInput").val("");
        $("#flavorInput").val("");
        $("#crustInput").val("");
        $("outPutValues").append("")

    });
    $(".delivery").click(function () {
        $(".deliveryDetails").toggle();

    });
    $(".btn").click(function () {
        alert("your order will be delivered to your location, Prepare additional ksh 150 delivery fee")
    })
});
