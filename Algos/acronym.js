var acr = ""
function acronym(str) {
    words=str.split(" ")
    console.log(words)
    for (i =0;i<words.length; i++) {
        acr += (words[i][0])
    }
    return acr.toUpperCase()
}
console.log(acronym("there's no free lunch - gotta pay yer way"));
