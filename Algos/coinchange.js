// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny

var total;
var quarters=25;
var dimes=10;
var nickles=5;
var pennies=1;
var qrtamnt;
var dimamnt;
var nickamnt;
var penamnt;



function convertToCoinChange(dollars) {
    total=dollars * 100;
    qrtamnt=Math.floor(total/quarters);
    dimamnt=Math.floor((total%quarters)/dimes);
    nickamnt=Math.floor((total%dimes)/nickles);
    penamnt=Math.floor((total%nickles)/pennies);
    return qrtamnt+" quarters, "+ dimamnt+" dimes, "+ nickamnt+" nickles and "+ penamnt+" pennies";
}
console .log(convertToCoinChange(3.21));

// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny

// function convertCoinChange(money) {
//     // declare variables for different denominations (quarter, dime, nickel, penny)
//     q = 0 // each variable holds the count of each coin
//     d = 0
//     n = 0
//     p = 0 

//     // multiply input by 100 : 3.21 == 321
    
//     // take new number (321) and divide by 25 to get the number of quarters
//     // make sure to round down to get a whole number
//     // subtract the (# of quarters * 25) from the overall input # and then check the next denomination
//     // repeat for different denominations
//     // print and then return the data you collected
// }

function generateCoinChange(input) {
    // your code here
}