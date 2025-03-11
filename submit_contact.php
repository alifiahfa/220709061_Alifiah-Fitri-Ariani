<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];

        // Mengatur alamat email tujuan
        $to = "alifiahmaru@gmail.com"; // Ganti dengan alamat email Anda
        $subject = "New Contact Form Message";
        $body = "Email: $email\nNo. HP: $phone\nPesan: $message";
        $headers = "From: $email";

        // Mengirim email
        if (mail($to, $subject, $body, $headers)) {
            echo "Pesan Anda telah dikirim!";
        } else {
            echo "Terjadi kesalahan, silakan coba lagi.";
        }
    } else {
        echo "Invalid request.";
    }
?>