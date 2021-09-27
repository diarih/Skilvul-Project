/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
let str = ""; // string kosong untuk mengubah number ke string
let spr; // variabel untuk separate string
let isPrime; // variabel untuk pengkondisian bilangan prima

// looping cek sampai ke-100
for (let i = 2; i < 100; i++) {
    isPrime = true; //set default true

    // cek apakah bilangan i lebih dari dua dan dapat dibagi dua
    if (i != 2 && i % 2 == 0) {
        isPrime = false;
    }

    // cek apakah bilangan i dapat dibagi dua atau tiga
    for (let j = 2; j < i; j++) {

        if (i % j == 0) {

            isPrime = false;
        }
    
    // kondisi jika isPrime true
    }
    if (isPrime) {
        str += i + " "

    }
}

// memisahkan string dengan koma
spr = str.split(" ").join(", ")

// cetak bilangan prima
console.log(spr);

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
fiftiethPrime = 2; // set bilangan prima pertama
let n = 2; // variabel pengecek bilangan prima

// perulangan bilangan prima sampai ke-50
while (primeCounter < 50) {
    isPrime = true; //set default true

    // cek apakah bilangan n dapat dibagi dua atau tiga
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
        }
    }

    // kondisi jika isPrime true
    if (isPrime == true) {
        fiftiethPrime = n // store value variable fiftiethPrime dengan value n jika isPrime true
        primeCounter++ // menambahkan perulangan ke- untuk bilangan prima
    }

    n++ // tambahkan n untuk cek setiap bilagan

}

console.log(fiftiethPrime); // cetak output


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
let l = 1 // set awal value ganjil
do {

    // kondisi jika bilangan ganjil
    if (l % 2 !== 0) {
        fiftiethOdd = l; // store value l ke fiftiethOdd
        oddCounter++ // tambahkan counter perhitungan bilangan ganjil
    }
    l++ // Tambahkan value l

}

// kondisi jika oddCounter kurang dari 50
while (oddCounter < 50)

console.log(fiftiethOdd) // cetak output