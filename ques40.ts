function order_sandwich(...items)
 {
    console.log('Your order of sandwich contains');
    for (let item of items) {
        console.log(`- ${item}`);
    }
}
order_sandwich('Onion', 'Cheese', 'Tomato');
order_sandwich('Mutton kabab', 'Egg');
order_sandwich('Veggies');