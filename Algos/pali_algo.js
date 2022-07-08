// Create a function that returns as boolean of true/false for whether or not an input string is a strict pallindrome. Do not ignore whitespaces, casing matters!!

// Example 1: "racecar" --> true
// Example 2: "Dud" --> false
// Example 3: "oho!" --> false

// pallidrome = reads the same forwards and back!
// loop through our string
// check each element with it's 'sister' element on the other side of the string
// if elements don't match then return false
// if we make it through our loop and never hit false, then return true

function isPallindrome(str) {
    var newstr=""
    for(var i=str.length-1; i>-1; i--){
        newstr+=str[i]
    }
    if(newstr===str){
        return true;
    } else{return false}
}

console.log(isPallindrome("racecar")); // true
console.log(isPallindrome("e tacocat e")); // true
console.log(isPallindrome("Dud")); // false
console.log(isPallindrome("oho!")); // false
console.log(isPallindrome(" to ")); // false

// Given a String, return the longest pallindromic substring. Given "hello dada", return "dad". Given "not much" return "n". Include spaces as well!

// Example 1: "my favorite racecar erupted" --> "e racecar e"
// Example 2: "nada" --> "ada"
// Example 3: "nothing to see" --> "ee"

function longestPallindrome(str) {
    for (var x=0; x<str.length-j;x++){
        console.log(x)
    }
}

console.log(longestPallindrome("my favorite racecar erupted"));
console.log(longestPallindrome("nada"));
console.log(longestPallindrome("nothing to see"));