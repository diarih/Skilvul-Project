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

let pengeluaran, pendapatan;

gajiBonus = gajiPokok * (10 / 100);
gajiLembur = gajiPokok * (5 / 100);

pendapatan = gajiPokok + gajiLembur + gajiBonus;
pengeluaran = gundam + makan + kost + subscription;

const sisaGaji = pendapatan - pengeluaran
hasil = new Intl.NumberFormat("ID").format(sisaGaji)
console.log(hasil)



/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;

if (oneInString == oneInNumber) {

    const isSame = true;
    console.log(isSame)

}

else {

    const isSame = false;
    console.log(isSame)

}



/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;


if (studentA >= studentB) {

    const isHigher = true;
    console.log(isHigher);

}

else {

    const isHigher = false;
    console.log(isHigher)

}


/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const oneInString = "1";
const oneInNumber = 1;

if (oneInString === oneInNumber) {

    const final = true;
    console.log(final)

}

else {

    const final = false;
    console.log(final)

}
