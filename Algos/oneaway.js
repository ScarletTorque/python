// There are 3 edits that can be done on a string: add a acharacter, remove a character, 
// or replace a character. Given 2 strings, write a function that checks if they are 
// one edit or fewer away from eachother (see samples below)
function oneAway(str1, str2) {
    var changes = 0
    var shift = 0
    if (str1 == str2) {
        return true
    }
    if (Math.abs(str1.length - str2.length) > 1){
        return false
    }
    if (Math.abs(str1.length - str2.length) == 1){
        changes+=1
        shift = 1
    }
    for(var i = 0; i < str1.length; i++){
        if (str1[i] != str2[i +- shift]){
            changes ++
        }
    }
    return changes
}

console.log(oneAway("hello", "eello")) // true
console.log(oneAway("hello", "eelloo")) // false 
console.log(oneAway("ello", "hello")) // true
console.log(oneAway("helllo", "hello")) // true
console.log(oneAway("hello", "helo")) // true
console.log(oneAway("hello", "hell")) // true
console.log(oneAway("hjllo", "helo")) // false

// =============================================================================
// Mapping Itineraries
// =============================================================================
// Given a list of itineraries, find the proper path of the trip. 
// A list of itineraries will be an array of arrays, where the inner array will always be length two. 
// For example, here is an example list of itineraries: [ ['LAX', 'SFO'], ['ICN', 'LAX'], ['SJC', 'ICN'] ].

// The first element in each inner array is the "from" airport, and the latter is the "to" airport. 
// So, ['LAX', 'SFO'] means "from LAX to SFO." Running with this example, given this list of itineraries,
// your code should then print out 'SJC -> ICN -> LAX -> SFO', or you can just comma-separate 
// those airports if you don't like the arrows. Whatever method you choose, 
// you should produce the proper route of the trip. It's guaranteed that the itineraries 
// have exactly one start airport, and exactly one end airport, and that there aren't any loops. 

// return a single string of the mapped itineraries

function mappingItineraries(arr) {
    // your code here
}

console.log(mappingItineraries( [  ['ICN', 'LAX'], ['LAX', 'SFO'], ['SJC', 'ICN'], ['NYU', 'SJC'], ['AMS', 'NYU'] ]));
// AMS -> NYU -> SJC -> ICN -> LAX -> SFO