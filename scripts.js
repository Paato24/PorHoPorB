// Credenciales del administrador
const adminCredentials = {
    username: "PorHoPorB",
    password: "SanJavier4345@",
};

// Función para manejar el login
function handleLogin() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // Verifica si las credenciales son correctas
    if (usernameInput === adminCredentials.username && passwordInput === adminCredentials.password) {
        // Redirige a la página de administrador
        window.location.href = "admin-dashboard.html";
    } else {
        alert("Credenciales incorrectas. Intenta nuevamente.");
    }
}

// Agrega un evento de clic para el botón de login
document.getElementById("login-btn").addEventListener("click", handleLogin);
