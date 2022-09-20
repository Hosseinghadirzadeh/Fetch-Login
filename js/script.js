
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
if (window.innerWidth <= 1000) {alert('Please use a bigger screen to see the hint bar')}



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
                person.innerHTML += myData[i].name;
                person.nextElementSibling.innerHTML += myData[i].phone;
                person.nextElementSibling.nextElementSibling.innerHTML += myData[i].email;
                return;
            }
        }

        alert('Username or password is wrong try to use the Hint bar');

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