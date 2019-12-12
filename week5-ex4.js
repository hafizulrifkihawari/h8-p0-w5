function totalDigitRekursif(angka) {
    // you can only write your code here!
    let temp = angka.toString()
    if (temp.length === 1){
        return Number(temp)
    } else {
        num = Number(temp[0])
        angka = temp.slice(1);
        return num + totalDigitRekursif(angka)
    }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5