function kaliTerusRekursif(angka) {
    // you can only write your code here!
    let temp = angka.toString();
    if (temp.length === 1){
        return Number(temp) 
    } else {
        let num = 1;
        for (var i = 0; i < temp.length; i++){
            num *= Number(temp[i])
        }
        angka = num;
        return kaliTerusRekursif(angka)
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6