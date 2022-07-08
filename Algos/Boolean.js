// // parensValid(str) - takes in one argument, a string. returns true if the
// // parentheses in the string are valid and false otherwise.
// // "a(z)g" - true
// // ")sadf(" - false
// // what's valid?
// // - no more opening than closing parens and vice versa
// // - every opening paren has a matching properly located closing paren
// // - we can ignore all non-paren characters

// // don't split the string
// // return early if possible

// function parensValid(str) {
//     var opencounter = 0
//     var closecounter = 0
//     for(var i = 0; i < str.length; i++){
//         if(str[i] == "("){
//             opencounter++
//         }
//         if(str[i] == ")"){
//             closecounter++
//         }
//         if(closecounter>opencounter){
//             return false;
//         }
//     }
//     if(opencounter == closecounter){
//         return true;
//     }
//     else return false;
// }

// console.log(parensValid("hello!") === true);
// console.log(parensValid("a(z)g") === true);
// console.log(parensValid("12;(d-[)](qwg)a") === true);
// console.log(parensValid(")sadf(") === false);
// console.log(parensValid("addToFront(7, [1, 6, 2, 9']") === false);
// console.log(parensValid("(()())(()()()))") === false);

// console.log(parensValid("(5T5ecTajZ2Wv)ytn4zd8B2ydWb3pvvbBvJQ4Bwjqp)8pJct7b2mXRZCARPmFKiHLP9ezyLU8nZ6vqhCfkD2Y4UEqxQM4Tuy6QtZcXENEQKdfCC5VjiY7rdav69fbtrYKhEGqEAy6i65cKKMaZSyEzXvBnvrfM7w8rVFeiudyQcSrxQzfNBUiYRwNnHZEPD7bJqKeHV2NHiuX6hSW79SajgKaj4k5y88LzYNrqbrWYucTATwfHGTaGpPDDPnjK5jC9bkzBTniFupkYN2pgAiGGw3pY6YyFPVRA7PNegDAcAyQBQbHgHwuDvDDSmJ6rZKwdWHWdf2RqpT56Lf77WgQvJkjeyrXFxDKSDQkwhQBxDZScxv82YAwpZAhzzuaD4yHWmPcNf4Be3TbfnAwm4QJPeEgjU4gyDHCBkdHZYKg5ndJ8V2H5rk4u4uZikBpHw5qTTnrYTtyanwPZnXLM7mtmYgaaL33p4Cea6dz4hALhtvpPAbjSGZVc6wa9wdYtxL2qZdV9H7JUtRFAkdLunFvHnZEbqwuDctxNFu4mJZ6fDDgqiqJTYvr5igLPtEuwaCdkMSYSE57Gh5UukTR8aQ9ba7wSywR2TYL5ku9fZJY4qdXngZMMTKbgnQ5CBp4WRThR5LCneZTxTtayuuZimnBpCJvnYdQeRxEvytKtbMZaZz2PQgpujrJXvY43zmh3GrMJU2gJNSwaEmKPNdABCaPmGrSJnnYMiXNYh7gZhfmykwULEMHUc8AUfNfyJyY6FMVBidVeqG33rG4BTuL38VpRE84WT96j65jdcvZzzYwfMRkzak7UdTEG96jGSkpCT9HQgyKZn6nZR5kT7eZeCV2KJDUPC7vCS3dvzcBwbzePYDi4DDFBx4ejpRkiM3rf6bm2Agw7yqvApHTnA5v9K8aGpfMkYpBGaCQE4g8iTwFpYw59C62TjTZ3qXK82rDRHqxrVCxacr7qYU8QgcjzQewUramdavti3S38KpyyQ97tpeNxHNVVjBQknwSgpA3gAHUHL3uU67xA5VUZZqkhmj6BK9tGik2NUyGvrqbvHTk7VmkHNjWPUTjeB7TNUjC9k2ftR6F555chKgZLXFTVQpHQ53ezbFJGRaV8texU5tQ8JuFLRp5ZgTycA8SYHuDcUP3YuMSQ5LT8ShGian83jnmFK44b2BF5tB4GG9HP3KM8H4La9USNyWyqDZmqfBwMMiwmNX2by62arCftpNjiySket4SzgBKrgwER8DePR9S8xpcjZy9mdJ9AkPXX3vfRVmVS74Vadak2Anvi7xaBgXrrzmhbpPKfLmAyC5t2ZDn5gz7BEpt9GkEE4LgaMr74u24nHjnJJddypnPDY2Uyw7pDi3ZUMrp332kVvnBSHZh2UNMbfgvvF6gSdiAqXHdBeCDxcmmDYbfMapdLjGGwSA3jKHDTRzUJWTBFtZkfeJEUAekHtbrRU2JHudCvfixgFP2cRDCcnJSecccLj7q35fYexAZZ4TZkzpJb5QjeZ4vzCrKLdRWXVejzcpp8zKYcEXrtjK2hdygSLnR95WvCe9E9PYQqyNghMpShhVGLnJUjiVSuKZ2TWfFuPDd9GKDcuLK3yHLLirYXE5VGqLfpa4mt7QeztdFqigwTf2wnxyxEXp5zrCXLnicudkuvJNLrxGbpz2tCWQ7jxz6qGLNGypL2Jt3x4mNeYVMBCi42WDc9MjHNDxKg7SuLwW8jKjaExJfAx5qCSXPmzNnaHBMfAQ4dUCy6B5qhSTeNP7YeHUGPYd3W4AdLtHrCrLytfZjKSY827g7phnYQ3uVmxyEmmnjGLnVfqtVHfFdJLkkmBQRkA2BVd4rvecbwQzmGNZ8xewm7wYiVJbFbcVru4xgiKKAT8cbrzg2ui9bWwvafdyNBQdWftKEfuMpMUBkCzqbQhTUxw8NMCS6jRmhVXx3A2grM285yGuNabRTDuPALhr5tzyt66Vu3WjfFWbEUzRUzDv25vyFKAZrTfrfvYUkV2") === false);

// console.log(parensValid("'(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())(()()())(()())'") === true);


// parensValid(input)
// input is a string
// return true if the input has a valid configuration of parentheses and false
// otherwise. by "return true/false" I mean the boolean value, not a string
// what's valid?
// - no more open parens than close parens or vice versa
// - no close parens that appear before a valid open paren
// - ignore all other characters that are not ( and )
// - () -> true
// - )( -> false
// - hello! -> true (???)
// - (()) -> true
// - (q(a)(x)(!(7(xx)(34)(2, 7, 11)))) -> true
// - (() -> false
// - hello!() -> true
// suggestion - don't bother trying to split the string...
// it won't do us any good and just makes things more complicated
// suggestion again - do we have to check every single character in the input?
// hypothetical input: ) followed by one billion characters
// or: a) followed by one billion characters
// or: a37()) followed by one billion characters

function parensValid(str) {
    var opencounter = 0
    var closecounter = 0
    for(var i = 0; i < str.length; i++){
        if(str[i] == "("){
            opencounter++
        }
        if(str[i] == ")"){
            closecounter++
        }
        if(closecounter>opencounter){
            return false;
        }
    }
    if(opencounter == closecounter){
        return true;
    }
    else return false;
}

console.log(parensValid('()'));
console.log(parensValid('(())'));
console.log(parensValid('(q(a)(x)(!(7(xx)(34)(2, 7, 11))))'));
console.log(parensValid(')('));
console.log(parensValid('(()'));
console.log(parensValid('hello!'));
// make your own test cases too!

// bracesValid(input)
// as above, but for parentheses, curly brackets (or curly braces) and square
// brackets - with the caveat that we can't have two sets of braces
// interleaved, or our function should return false, as follows:
// ([)] -> false
// the parentheses close before the square brackets do, which is Bad
// ()[]{} -> true
// (] -> false
// x(37[q{3, 7, 9}{22, 6, 91}])(32q) -> true
// ()]... -> false

function bracesValid(input){
    var stack = []

    for (let i = 0; i < input.length; i++) {
        console.log('Stack contains: ${stack}');
        if (input[i] == '(' || input[i] )
        
    }
}

console.log(bracesValid('x(37[q{3, 7, 9}{22, 6, 91}])(32q)[]')); // should return true 
console.log(bracesValid('([{}{}])()')); // should return true
console.log(bracesValid('([{}{]})()')); // should return false
console.log(bracesValid('this is valid!')); // should return true


// bonus: what if we also want to check angle brackets (< and >)? what if
// sometimes we care about curly braces but sometimes we don't?