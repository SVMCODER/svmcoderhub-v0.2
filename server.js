function login() {
    uname = document.getElementById('uname').value;
    pass = document.getElementById('pass').value;
    if (uname == '' || pass == '' || pass < 1 || uname <1) {
        alert('⚠ Error while logging-in!\n1. Must Fill the required inputs\n2. Username & Password must contain atleast 1 word.')
    }
    else if (uname == 'Laxmi' && pass == 'svmtchr1') {
        localStorage.setItem('name','Laxmi')
        localStorage.setItem('role','Teacher')
        localStorage.setItem('badge','Admin')
        localStorage.setItem('loggedin',true)
        window.location.replace('home.html')
    }
    else if (uname == 'Yashraj' && pass == 'Yash@bestfriend') {
        localStorage.setItem('name','Yash Raj')
        localStorage.setItem('role','Friend')
        localStorage.setItem('badge','Admin')
        localStorage.setItem('loggedin',true)
        window.location.replace('home.html')
    }
    else if (uname == 'Shaurya' && pass == 'uioplol!') {
        localStorage.setItem('name','Shaurya Tripathi')
        localStorage.setItem('role','Developer')
        localStorage.setItem('badge','Owner')
        localStorage.setItem('loggedin',true)
        window.location.replace('home.html')
    }
    else if (uname == 'Rohit' && pass == '81155679') {
        localStorage.setItem('name','Rohit Srivastava')
        localStorage.setItem('role','Friend')
        localStorage.setItem('badge','Owner')
        localStorage.setItem('loggedin',true)
        window.location.replace('home.html')
    }
    else if (uname == uname && pass == pass) {
        localStorage.setItem('name',uname)
        localStorage.setItem('role','Student')
        localStorage.setItem('badge','User')
        localStorage.setItem('loggedin',true)
        window.location.replace('home.html')
    }
}
function project() {
    window.location.replace('projects.html')
}
function profile() {
    window.location.replace('profile.html')
}
function learn() {
    window.location.replace('learn-to-code.html')
}
function code() {
    window.location.replace('code.html')
}
function home() {
    window.location.replace('home.html')
}
if (localStorage.getItem('loggedin')==true) {
    window.location.replace('home.html')
}
function logout() {
    localStorage.setItem('loggedin',false)
    window.location.replace('index.html')
}
document.getElementById('name').innerHTML = localStorage.getItem('name');
document.getElementById('role').innerHTML = localStorage.getItem('role');
document.getElementById('badge').innerHTML = localStorage.getItem('badge');