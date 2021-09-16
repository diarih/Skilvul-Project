## Technical Assignment Box-model CSS
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="box-model.css">
</head>
<body>
    <div id="daftar-siswa">
        <p class="siswa">
            Samsudin
        </p>
        <p class="siswa">
            Akmal
        </p>
        <p class="siswa">
            Juned
        </p>
        <p class="siswa">
            Mael
        </p>
        <p class="siswa">
            Anton
        </p>
    </div>
</body>
</html>
```
```css
#daftar-siswa {
    background-color: #5f6674;
}

#daftar-siswa > p {
    color: #F3F4F6;
    text-transform: capitalize;
    font-weight: 400;
    font-family: sans-serif;
    margin: 0;
}

.siswa {
    padding: 10px 15px 10px 15px;
}

body {
    margin: 0;
}



#daftar-siswa > p:hover {
    background-color: #E5E7EB;
    color:  #111827;
}
```
# Submitted Images:
![Screenshot (310)](https://user-images.githubusercontent.com/86011284/133558793-65557522-1b5c-494e-ae7f-7ff94cc156b2.png)
