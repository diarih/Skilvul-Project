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
let gajiPokok = 5000000, gajiBonus, gajiLembur /// Declare Variable or Value of Income

let pengeluaran, pendapatan; // Declare Variable for subtitute

gajiBonus = gajiPokok * (10 / 100); // Calculation of gajiBonus
gajiLembur = gajiPokok * (5 / 100); // Calculation of gajiLembur

pendapatan = gajiPokok + gajiLembur + gajiBonus; // Calculate Revenue
pengeluaran = gundam + makan + kost + subscription; // Calculate Expense

const sisaGaji = pendapatan - pengeluaran; // Calculate Resudual Revenue
hasil = new Intl.NumberFormat("ID").format(sisaGaji); //Convert into Currency Numbering

console.log(hasil); // Display result "1.750.000"



/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1"; // Declare Variable with value
const oneInNumber = 1; // Declare Variable with value

const isSame = oneInString == oneInNumber; // Comparing value without their data type;

console.log(isSame); // Display result "true"



/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75; // Declare Variable with value
const studentB = 80; // Declare Variable with value

const isHigher = studentA >= studentB; // Comparing their value without their data type

console.log(isHigher); // Display result "false"



/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)

const final = oneInNumber === oneInString;  // Comparing their value with their data type

console.log(final); // Display result "false"