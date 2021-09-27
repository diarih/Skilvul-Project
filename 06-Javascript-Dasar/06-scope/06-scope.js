/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE

/// Ada dua jenis variable scope pada javascript, yaitu variable local dan variable global. 
/// Variable local merupakan variable yang hanya bisa dipanggil atau digunakan jika memiliki parent yang sama
/// Variable global merupakan variable yang dapat dipanggil di seluruh statement di luar parent

/// Implementasi Sederhana

const akuTopGlobal = "Turun Rank"; // akuTopGlobal merupakan variable dengan scope global

function iniFunction() {
    const akuTopLocal = akuTopGlobal; // akuTopLocal merupakan variable dengan scope Local
    return akuTopLocal;
}

console.log(iniFunction()); // Memanggil Fungsi

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// console.log menampilkan output "Mariah"
/// console.log tidak menampilkan output dari value variable name karena function printFirstName tidak memiliki variable name hanya parameter yang memiliki nama "name" saja, bukan variable
const name = "John Watson";

function printFirstName(name) {
    return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
