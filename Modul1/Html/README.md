# Technical Assignment HTML
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <nav>
        <a href="#header">Header</a>
        <a href="#profilku">Profilku</a>
        <a href="#film-favoritku">Film Favoritku</a>
        <a href="#get-in-touch">Get in Touch</a>
    </nav>
    <header>
        <h1>Webiste Pertamaku</h1>
        <p>Ini adalah pertama kali saya membuat sebuah Webiste menggunakan HTML</p>
        <a href="https://www.google.com/" target="_blank">Tekan ini untuk pergi ke google</a>
    </header>

    <br>
    <br>

    <section id="profilku">
        <h1>Profilku</h1>
        <img src="images/diar.png" alt="fotoku" width="200px" height="200px">

        <ul>
            <li>Nama: Diar Ihza Saputra</li>
            <li>Email: diarihza@gmail.com</li>
            <li>Daerah: Bogor</li>
            <li>Hobi:
                <ol>1. Basket</ol>
                <ol>2. Bulutangkis</ol>
                <ol>3. Menonton Film</ol>
            </li>

        </ul>
    </section>

    <br>
    <br>

    <section id="film-favoritku">
        <h1>Film Favoritku</h1>
        <table>
            <tr>
                <th>No.</th>
                <th>Nama</th>
                <th>Produsen</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Fight Club</td>
                <td>Fox 2000 Picture</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Interstellar</td>
                <td>Paramount Pictures Warner Bros</td>
            </tr>
        </table>

    </section>

    <br>
    <br>

    <section id="get-in-touch">
        <h1>Get in Touch</h1>
        <form>
            <label for="nama">Nama:
                <input placeholder="namamu" type="text" id="nama">
                <br>
            </label>

            <label for="email">Email:
                <input placeholder="nama@mail.com" type="email" id="email">
                <br>
                <br>
            </label>

            <button type="submit">Submit</button>
        </form>
    </section>


</body>

</html>
```
Deploy on netlify here: https://ta-html-diar.netlify.app/
