// longestPalindrome(str) -> input is a string
// output is the longest palindrome contained within that string
// if you find multiple palindromes of the same length, return the first one
// that you find
// "ehjgkkgeh" -> "gkkg"
// "ehjg kkgeh" -> "kk"
// "qwertttreqwerewy" -> "ertttre"
// "qwerttttttreqwerewy" -> "erttttttre"
// "abacabd" -> "bacab"
// "abacaed" -> "aba"
// "abcde" -> "a" (every character is effectively its own palindrome)
// "a" -> "a" (lol)
// "I like to drive the racecar extremely fast" -> "e racecar e"
// "racecar" -> "racecar" (no need to use the previous function if you don't want to)

function isPallindrome(str) {
    var newstr=""
    for(var i=str.length-1; i>-1; i--){
        newstr+=str[i]
    }
    if(newstr===str){
        return true;
    } else{return false}
}

// for (var x=str.length-counter; x>(-1+i); x--){
//     newstr+=str[i];
//     if(isPallindrome(newstr)){
//         console.log(newstr)
//         if(longest<newstr){
//             longest=newstr
//         }
//     }
// }

// function longestPalindrome(str) {
//     var newstr=""
//     var longest=""
//     for (var j=str.length-1; j>-1; j--) {
//         for (var i=str.length-1; i>(-1+j); i--) {
//             var counter=1
//             for (var x=str.length-counter; x>(-1+i); x--){
//                 newstr+=str[x];
//                 counter++
//                 if(isPallindrome(newstr)){
//                     console.log(newstr)
//                     if(longest<newstr){
//                         longest=newstr
//                     }
//                 }
//             }
//         }
//     }
//     console.log(newstr)
// }

function longestPalindrome(str) {
    var longest=""
    for (var j=str.length-1; j>-1; j--) {
        var newstr=""
        newstr+=str[j];
        for (var i=j+1; i<str.length; i++) {
            newstr+=str[i];
            if(isPallindrome(newstr)){
                console.log(newstr)
                if(longest.length<newstr.length){
                    longest=newstr
                }
            }
        }
    }
}

console.log(longestPalindrome("I like to drive the racecar extremely fast"))