const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    
    if (!email || !password) {
        alert("Por favor complete todos los campos");
        return;
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = usuarios.find(u => u.email === email && u.password === password);

    if (usuario) {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        window.location.href = "../../index.html";
    } else {
        alert("Usuario no registrado");
    }
});