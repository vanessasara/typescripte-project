let currentUsers = ['USER1', 'USER2', 'USER3', 'ADMIN', 'USER4'];
let Newuserusers  = ['user5', 'admin', 'user6', 'user7'];
for (let Newuser of Newuserusers ) {
    if (currentUsers.map(u => u.toLowerCase()).indexOf(Newuser.toLowerCase())) {
        console.log(`Pardon, ${Newuser}, this username is not valid.`);
    } else {
        console.log(` ${Newuser} Valid.`);
    }
}