/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

/// Pegeluaran
/// gundam = 750000
/// makan = 2000000
/// kost = 1000000
/// subscription = 250000

/// Gaji
/// gajiPokok = 5000000
/// gajiBonus = 10% dari gajiPokok
/// gajiLembur = 5% dari gajiPokok

/// Sisa Gaji
let gundam = 750000, makan = 2000000, kost = 1000000, subscription = 250000; ///Declare Variable and Value of Spent
let gajiPokok = 5000000, gajiBonus, gajiLembur/// Declare Variable or Value of Income

let pengeluaran, pendapatan;// Declare Variable for subtitute

gajiBonus = gajiPokok * (10 / 100); // Calculation of gajiBonus
gajiLembur = gajiPokok * (5 / 100); // Calculation of gajiLembur

pendapatan = gajiPokok + gajiLembur + gajiBonus; // Calculate Revenue
pengeluaran = gundam + makan + kost + subscription; // Calculate Expense

const sisaGaji = pendapatan - pengeluaran // Calculate Resudual Revenue
hasil = new Intl.NumberFormat("ID").format(sisaGaji) //Convert into Currency Numbering

console.log(hasil) // Display result



/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;

if (oneInString == oneInNumber) {  //conditon, is first variabel same as second variabel based on their value

    const isSame = true; // Declare variable with value true
    console.log(isSame) // Display result

}

else { //Condition else

    const isSame = false; // Declare variable with value false
    console.log(isSame) // Display result

}



/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;


if (studentA >= studentB) {  //conditon, is first variabel is higher then second variabel based on their value

    const isHigher = true; // Declare variable with value true
    console.log(isHigher); // Display result

}

else {

    const isHigher = false; // Declare variable with value false
    console.log(isHigher) // Display result

}


/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const oneInString = "1";
const oneInNumber = 1;

if (oneInString === oneInNumber) { //conditon, is first variabel same as second variabel based on their value and data type

    const final = true; // Declare variable with value true
    console.log(final) // Display result

}

else {

    const final = false; // Declare variable with value false
    console.log(final) // Display result

}
