let userNames = ['Admin', 'Asma', 'Waqqas', 'Ahmed', 'John', 'Hazel','Sarah'];
for (let Name of userNames) {
    if (Name === 'Admin') {
        console.log('Hello admin, do you want to review status report?');
    } else {
        console.log(`Hello ${Name}, thanks for loggin .`);
    }
}