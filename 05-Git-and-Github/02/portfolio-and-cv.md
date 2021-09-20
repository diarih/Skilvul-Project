## Portfolio and CV

1. membuat sebuah folder kosong dengan namamu sendiri **mkdir diar**
2. membuat sebuah file dengan nama `README.md`, isi file tersebut dengan kalimat<br>`"Halo perkenalkan aku halaman utama"` **touch README.md**, **echo "Halo perkenalkan aku halaman utama" < README.md**
3. insialisasi folder tersebut dengan Git, kemudian dokumentasikan menggunakan `commit` dengan pesan<br>`"Inisialisasi Git Repository"` **git init diar**, **commit -m "Inisialisasi Git Repository"**
4. buat `branch` baru dengan nama `cv`, hal ini berguna agar histori kita tidak tercampur **git branch cv**
5. pindah `branch` kedalam `cv`, kemudian buat file dengan nama `cv.txt` dan isi file tersebut dengan kalimat:<br>`"Ini adalah file CV"` **git checkout cv**,  **touch cv.txt**, **echo "Ini adalah file CV" >> cv.txt**
6. kemudian dokumentasikan menggunakan `commit` dengan pesan<br>`"Inisialisasi CV"` **commit -m "Inisialisasi CV"**
7. tambahkan 3 perusahaan yang akan kamu lamar, dan setiap menuliskan 1 nama perusahaan kamu harus melakukan dokumentasi menggunakan `commit` **echo "Danone" >> cv.txt**,  **commit -m "Danone"** **echo "GOOGLE" >> cv.txt**,  **commit -m "GOOGLE"** **echo "AMAZONE" >> cv.txt**,  **commit -m "AMAZONE"**
8. kembali ke `branch master` **branch checkout master**
9. ubah file `README.md` menjadi
    ```
    Halo perkenalkan aku halaman utama

    Ini adalah update pertama pada branch master
    ```
    jangan lupa untuk mendokumentasikannya menggunakan `commit` dengan pesan<br>`"update master pertama"` **echo "Ini adalah update pertama pada branch master" >>README.md**
10. gabungkan `branch cv` kedalam `branch master` menggunakan perintah `git merge` **git merge cv**
11. unggah Git Repository tersebut kedalam GitHub **git add . , git commit -m "upload" , git push origin master**