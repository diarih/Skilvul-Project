/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE

// Type Error terjadi ketika kita membuat value yang tidak sesuai dengan tipenya
// Reference Error terjadi ketika kita membuat value pada variable yang tidak ada
// Range Error terjadi ketika valeu tidak sesuai dengan jenis function
// Syntax Error terjadi ketika kita membuat code dengan sintaks yang salah


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE

/// Code di bawah mengalami error dan muncul sebuah reference yang mangandung arti bahwa variable "salaryWithConst" dicetak sebelum diinisialisasi

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;