/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
const format = x => new Intl.NumberFormat("ID").format(x) // format currency

// function cek pajak
function taxCalc(salary) {

    // kondisi jika gaji lebih besar dari 20 juta
    if (20000000 <= salary) {
        return "total pajak yang harus kamu bayarkan " + format((20 / 100) * salary)
    }

    // kondisi jika gaji lebih besar dari 10 juta
    else if (10000000 <= salary) {
        return "total pajak yang harus kamu bayarkan " + format((10 / 100) * salary)
    }

    // kondisi jika gaji lebih besar dari 5 juta
    else if (5000000 <= salary) {
        return "total pajak yang harus kamu bayarkan " + format((5 / 100) * salary)
    }

    // kondisi jika gaji lebih kecil dari 5 juta
    else {
        return "total pajak yang harus kamu bayarkan " + format((0 / 100) * salary)
    }
}

console.log(taxCalc(20000000));
console.log(taxCalc(5000000));
console.log(taxCalc(4500000));



/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE

// fungsi cek bmi berdasarkan tinggi dan berat
function checkBMI(weight, height) {

    // menghitung bmi
    BMI = (weight / (height ** 2)) * 10000;
    console.log(BMI)

    // kondisi jika bmi lebih dari 35
    if (35 < BMI) {
        return "extremely obese"
    }

    // kondisi jika bmi lebih dari 30
    else if (30 < BMI) {
        return "obese"
    }

    // kondisi jika bmi lebih dari 25
    else if (25 < BMI) {
        return "over weight"
    }

    // kondisi jika bmi lebih dari 18.5
    else if (18.5 < BMI) {
        return "normal"
    }

    // kondisi jika bmi kecil dari 18.5
    else {
        return "under weight"
    }
}

console.log(checkBMI(80, 170))
console.log(checkBMI(80, 160))


/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE

// function mengubah huruf pertama menjadi uppercase
const convToUpperCase = sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1);

console.log(convToUpperCase("hello bandung"))
console.log(convToUpperCase("helloworldwide"))



/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
function firstNonRepeatedChar(word) {

    let a = word.split(" ").length
    if (a > 0) {
        return "Kata tidak boleh dipisah"
    }




}

console.log(firstNonRepeatedChar("Diar Ihza"))
