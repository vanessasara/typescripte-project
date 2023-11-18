var userNames = ['Admin', 'Asma', 'Waqqas', 'Ahmed', 'John', 'Hazel', 'Sarah'];
for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
    var Name = userNames_1[_i];
    if (Name === '') {
        console.log('Hello admin, do you want to review status report?');
    }
    else {
        console.log("Hello ".concat(Name, ", thanks for loggin ."));
    }
}
