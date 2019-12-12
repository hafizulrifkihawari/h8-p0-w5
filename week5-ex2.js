function changeVocals (str) {
    //code di sini
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let vocal = "aiueoAIUEO"
    let arrStr = str.split("")
    let index = 0;
    let res = ""
    for (var i = 0; i < arrStr.length; i++){
        for (var j = 0; j < vocal.length; j++){
            if (arrStr[i] === vocal[j]) {
                index = letters.indexOf(vocal[j]) + 1
                arrStr[i] = letters[index]
                break;
            }
        }
        res += arrStr[i]
    }
    // console.log(res)
    return res;
}

function reverseWord (str) {
    //code di sini
    let res = ""
    for (var i = str.length - 1 ; i >= 0; i--){
        res += str[i]
    }

    // console.log(res);
    return res;
}

function setLowerUpperCase (str) {
    //code di sini
    let res = ""
    for (var i = 0; i < str.length; i++){
        if (str[i] === str[i].toLowerCase()){
            res += str[i].toUpperCase()
        } else {
            res += str[i].toLowerCase()
        }
    }
    // console.log(res)
    return res;
}

function removeSpaces (str) {
    //code di sini
    let res = ""
    for (var i = 0; i < str.length; i++){
        if (str[i] === " "){
            continue;
        } else {
            res += str[i]
        }
    }
    // console.log(res)
    return res;
}

function passwordGenerator (name) {
    //code di sini

    if (name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }

    let change = changeVocals(name);
    let reverse = reverseWord(change);
    let wordCase = setLowerUpperCase(reverse);
    let space = removeSpaces(wordCase);
    return space;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'