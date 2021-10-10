// SOAL NOMOR 1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];


function reverse(arr) {

    // memisahkan asal array lalu direverse
    return arr.slice().reverse();  

}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);


// SOAL NOMOR 2
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
    
    // memilah array berdasarkan rata-rata
    let avg = arr.reduce((a, b) => a + b, 0) / arr.length; 

    // memilah array berdasarkan rata-rata
    const result = arr.filter(arr => arr > avg);

    return result.length

}

console.log(getAverage(arr1))
console.log(getAverage(arr2))


// SOAL NOMOR 3
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
];

function searchInArray(arr, num) {

    // menggabungkan arrays ke dalam array
    let merged = [].concat.apply([], arr);

    // mencari num berdasarkan index
    let result = merged.indexOf(num)

    if (result > 0) {
        return result;
    }

    else {
        return null
    }



}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));



