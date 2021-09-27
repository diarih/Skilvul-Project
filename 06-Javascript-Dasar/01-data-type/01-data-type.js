const name = "skilvul"; /// String
const age = 10; /// Number
const isMarried = false; /// Boolean

/// Soal - 01
/// Gunakan built-in function yang dimiliki tipe data String untuk mengubah variable name menjadi huruf besar
const upperCase = name;
console.log(upperCase.toUpperCase()); // output dengan function membuat string menjadi uppercase

/// Soal - 02
/// Gunakan built-in function yang dimiliki oleh Javascript, agar kita mengetahui apa tipe data yang dimiliki oleh variable age
const typeOfAge = age;
console.log(typeof(typeOfAge)) // output dengan function mengetahui tipe data dari variable

/// Soal - 03
/// Gunakan built-in function yang dimiliki tipe data Number untuk mengambil 2 nilai dibelakang koma dari PI
const pi = 3.141592653589793238;
const twoDigitsOfPi = pi;
console.log(twoDigitsOfPi.toFixed(2)); // output dengan function mengatur panjang number berdasarkan titik "."

/// Soal - 04
/// Gunakan built-in function yang dimiliki Javascript untuk mengetahui apakah nilai dibawah ini dapat dikategorikan sebagai Number atau tidak (NaN)
const isNotNumber = "10000";
console.log(isNaN(isNotNumber)); // output dengan function mengetahui tipe data bilangan bukan angka


/// Soal - 05
/// Gunakan built-in function yang dimiliki oleh Javascript untuk mengubah sebuah String menjadi Number
const stringToNumber = "1000";
console.log(typeof(Number(stringToNumber))); // output dengan function mengubah string menjadi number