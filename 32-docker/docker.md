### Jawablah pertanyaan di bawah ini:
1. Jelaskan apa yang dimaksud dengan **container** pada docker !
2. Jelaskan apa perbedaan antara konsep **container** dengan **virtual machine** !
3. Apa yang dimaksud dengan **docker file** ?
4. Apa yang dimaksud dengan **docker registery** ?
5. Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !

### Jawab
1. Container merupakan sebuah wadah atau container yang mengangkut atau berisi library dan dependency atau resource code pada tumpukan layer image. Guna, mempermudah didevelop di OS atau komputer yang berbeda tanpa harus menginstall aplikasi atau set konfigurasi tertentu.
2. Terletaknya terdapat pada resource yang dipakai. Vm banyak menggunakan resource untuk virtualisasi OS yang secara langsung menargetkan hardwarenya dan menyebabkan booting yang lama, sedangkan Container hanya memakan sedikit resource virtualisasi karena berjalan pada host-os.
3. Dockerfile merupakan code file yang berisi perintah yang dapat di run untuk membuat image docker.
4. Docker registry memungkinkan kita menyimpan image pada registry docker hub.
5. Untuk membuat image multi-container kita dapat menggunakan docker compose dengan format file docker-compose.yml yang menggabungkan beberapa dockerfile. dengan ini kita dapat menjalankan image hanya dengan satu localhost.
