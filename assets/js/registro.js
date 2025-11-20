const registroForm = document.getElementById("registroForm");

if (registroForm) {
    registroForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        //Validación
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const fecha = document.getElementById("date").value.trim();

        if (!nombre || !apellido || !email || !password || !fecha) {
            alert("Por favor complete todos los campos");
            return;
        }

        // Obtenemos usuarios guardados o un array vacío
        const usuarios = JSON.parse(sessionStorage.getItem("usuarios")) || [];

        // Verificar si ya existe
        const existe = usuarios.find(u => u.email === email);
        if (existe) {
            alert("Ya existe un usuario con ese email");
            return;
        }

        // Guarda el nuevo usuario
        usuarios.push({ nombre, apellido, email, password, fecha });
        sessionStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("¡Registro exitoso! Ya puede iniciar sesión.");
        window.location.href = "./login.html";
    });
}