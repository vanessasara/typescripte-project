var currentUsers = ['USER1', 'USER2', 'USER3', 'ADMIN', 'USER4'];
var Newuserusers = ['user5', 'admin', 'user6', 'user7'];
for (var _i = 0, Newuserusers_1 = Newuserusers; _i < Newuserusers_1.length; _i++) {
    var Newuser = Newuserusers_1[_i];
    if (currentUsers.map(function (u) { return u.toLowerCase(); }).indexOf(Newuser.toLowerCase())) {
        console.log("Pardon, ".concat(Newuser, ", this username is not valid."));
    }
    else {
        console.log(" ".concat(Newuser, " Valid."));
    }
}
