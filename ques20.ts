let aray = [1, 2, 3];
try {
    console.log(aray[3]); 
    // Erros intentional 
} catch (error) {
    console.error('Error:', error.message);
}