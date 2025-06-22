const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

function validateFields() {
    if (name.value.trim() === "") {
        alert("Name is required");
        return false;
    }
    if (email.value.trim() === "") {
        alert("Email is required");
        return false;
    }
    if (password.value.trim() === "") {
        alert("Password is required");
        return false;
    }
    return true;
}
