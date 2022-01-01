// WebSocket connection
console.log('Javascript running.');
const connection = new WebSocket('wss://attendance.place:8080');

function login() {
    let link = document.getElementById('link').value
    connection.send("login" + link);
}

function register() {
    let link = document.getElementById('link').value
    let mail = document.getElementById('mail').value
    connection.send("register" + link + " " + mail)
}

connection.onmessage = (event) => {

    console.log(event.data)

    if (event.data == "new user") {
        document.getElementById("mail").style.display = "block";
        document.getElementById("registerButton").style.display = "block";
        document.getElementById("loginButton").style.display = "none";
    }
    if (event.data == "logged in") {
        window.location.href = window.location.href + 'account?id=' + document.getElementById('link').value.substring(
            document.getElementById('link').value.lastIndexOf("CGC_") + 4, document.getElementById('link').value.lastIndexOf("&Q")
        );
    }
};

function hide() {
    document.getElementById("mail").style.display = "none";
    document.getElementById("registerButton").style.display = "none";
}