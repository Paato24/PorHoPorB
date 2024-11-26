
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sube tu CV</title>
    <link rel="stylesheet" href="styles.css"> <!-- Estilos -->
</head>
<body>
    <div class="form-container">
        <h1>Sube tu CV y Únete al Equipo</h1>
        <form action="procesar.php" method="POST" enctype="multipart/form-data">
            <label for="nombre">Nombre Completo:</label>
            <input type="text" id="nombre" name="nombre" required>

            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required>

            <label for="cv">Cargar CV (PDF, DOCX):</label>
            <input type="file" id="cv" name="cv" accept=".pdf,.docx" required>

            <input type="submit" value="Enviar CV">
        </form>
        <a href="inicio.html">Volver al inicio</a>
    </div>
</body>
</html>
