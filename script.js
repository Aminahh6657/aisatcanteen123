function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;
    let error = document.getElementById("error");

    // Student login
    if(role === "student" && username === "student" && password === "1234"){
        window.location.href = "student.html";
    }

    // Admin login
    else if(role === "admin" && username === "admin" && password === "admin123"){
        window.location.href = "admin.html";
    }

    else{
        error.innerHTML = "Invalid ID or Password";
    }
}