<?php
ini_set('display_errors', 0);  // Esto oculta los errores
error_reporting(E_ALL);        // Esto permite el registro de todos los errores


<?php
echo "Formulario recibido.";  // Agrega este mensaje para saber si se recibe la solicitud
?>


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $cv = $_FILES['cv'];

    // Dirección de correo a donde se enviará el formulario
    $to = "sepulvedafabio24@gmail.com";  // Cambia esto a tu correo electrónico
    $subject = "Nuevo CV recibido: $nombre";

    // Validar que el archivo sea PDF o DOCX
    $allowed_extensions = ['pdf', 'docx'];
    $cv_extension = pathinfo($cv['name'], PATHINFO_EXTENSION);

    // Verificar el tipo de archivo
    if (!in_array(strtolower($cv_extension), $allowed_extensions)) {
        echo "<p>Solo se permiten archivos PDF o DOCX. Los archivos permitidos son: PDF, DOCX.</p>";
        exit;
    }

    // Verificar el tamaño del archivo (máximo 2 MB)
    $max_file_size = 2 * 1024 * 1024;  // 2 MB en bytes
    if ($cv['size'] > $max_file_size) {
        echo "<p>El archivo es demasiado grande. El tamaño máximo permitido es 2 MB.</p>";
        exit;
    }

    // Cuerpo del correo
    $message = "Has recibido un nuevo CV.\n\n";
    $message .= "Nombre: $nombre\n";
    $message .= "Correo: $email\n";

    // Cabeceras del correo
    $headers = "From: $email" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"boundary-string\"" . "\r\n";

    // Mensaje de texto
    $body = "--boundary-string\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= $message . "\r\n";

    // Adjuntar el CV
    if (is_uploaded_file($cv['tmp_name'])) {
        $file_content = file_get_contents($cv['tmp_name']);
        $file_content = chunk_split(base64_encode($file_content));

        $body .= "--boundary-string\r\n";
        $body .= "Content-Type: application/octet-stream; name=\"" . $cv['name'] . "\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= "Content-Disposition: attachment; filename=\"" . $cv['name'] . "\"\r\n\r\n";
        $body .= $file_content . "\r\n";
    } else {
        echo "<p>Hubo un error al subir el archivo. Por favor, intenta nuevamente.</p>";
        exit;
    }

    // Finalizar el cuerpo del mensaje
    $body .= "--boundary-string--\r\n";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "<p>¡CV enviado con éxito!</p>";
    } else {
        echo "<p>Hubo un error al enviar el CV. Intenta de nuevo más tarde.</p>";
    }
}
?>
