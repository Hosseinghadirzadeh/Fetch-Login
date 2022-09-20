# Fetch-Login
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="Css/style.css">

</head>

<body>

    <section class="login_box">
        <form action="" autocomplete="off">
            <h2>Login</h2>

            <div class="user">
                <input type="text" id="username" name="username">
                <label for="username">Username</label>
            </div>

            <div class="user">
                <input type="password" id="Password" name="Pass">
                <label for="Password">Password</label>
            </div>

            <a href="#" onclick="load()">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                submit
            </a>
        </form>
    </section>
    <div class="hint">
        <div>
            <span>User Name: </span>
            <h3></h3>
            <span>Password: </span>
            <p></p>
        </div>
        <div>
            <span>User Name: </span>
            <h3></h3>
            <span>Password: </span>
            <p></p>
        </div>
        <div>
            <span>User Name: </span>
            <h3></h3>
            <span>Password: </span>
            <p></p>
        </div>
    </div>
    <div class="lock">
        <div class="personal">
            <h1>You're now logged in as: </h1>
            <p>phone number: </p>
            <p>Email: </p>
            <button onclick="_close()">Log Out</button>
        </div>
    </div>
</body>
<script>

    let _name = document.getElementById('username')
    let _pass = document.getElementById('Password')
    let myData;
    let _h3 = document.querySelectorAll('h3');
    let _p = document.querySelectorAll('.hint>div>p');
    let person = document.querySelector('.personal>h1');
    fetch('https://jsonplaceholder.typicode.com/users').then(
        (response) => {
            response.json()
                .then(data => {
                    myData = data;
                    for (let i = 0; i < _h3.length; i++) {
                        let num = parseInt(Math.random() * 10);
                        _h3[i].innerHTML = myData[num].username;
                        _p[i].innerHTML = myData[num].email;
                    }
                })
        }
    )



    _name.addEventListener('change', function () {
        if (this.value != '') {
            this.nextElementSibling.classList.add('moveUp');
        } else {
            this.nextElementSibling.classList.remove('moveUp');
        }
    }
    )
    _pass.addEventListener('change', function () {
        if (this.value != '') {
            this.nextElementSibling.classList.add('moveUp');
        } else {
            this.nextElementSibling.classList.remove('moveUp');
        }
    })


    function load() {
        if (_name.value != '' && _pass.value != '') {
    

          for (let i = 0; i < myData.length; i++) {
                if (myData[i].username == _name.value && myData[i].email == _pass.value) {
                    document.getElementsByClassName('login_box')[0].style.display = 'none';
                    document.getElementsByClassName('hint')[0].style.display = 'none';
                    document.getElementsByClassName('lock')[0].style.height = 100 + 'vh';
                    document.getElementsByClassName('lock')[0].style.display = 'block';
                    person.innerHTML += element.name;
                    person.nextElementSibling.innerHTML += element.phone;
                    person.nextElementSibling.nextElementSibling.innerHTML += element.email;
                } else {
                    alert('Username or password is wrong try to use the Hint bar');
                    break;
                }
            }
        }
        else
            alert('Please Fill the inputs')

    }
    function _close() {
        document.getElementsByClassName('login_box')[0].style.display = 'block';
        document.getElementsByClassName('hint')[0].style.display = 'block';
        document.getElementsByClassName('lock')[0].style.display = 'none';
        document.getElementsByClassName('lock')[0].style.height = 0 + 'vh';
        _name.value = null;
        _pass.value = null
    }

</script>

</html>
