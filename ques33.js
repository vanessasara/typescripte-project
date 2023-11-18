function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love coding'; }
    console.log("Shirt size: ".concat(size, ", Message: ").concat(message));
}
make_shirt();
make_shirt('Medium');
make_shirt('Small', 'BONJOUR');
