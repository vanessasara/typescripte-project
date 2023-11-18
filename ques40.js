function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Your order of sandwich contains');
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
}
order_sandwich('Onion', 'Cheese', 'Tomato');
order_sandwich('Mutton kabab', 'Egg');
order_sandwich('Veggies');
