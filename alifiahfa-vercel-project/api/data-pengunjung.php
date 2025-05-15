
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.12.1/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="../style.css">
    <title>Formulir Pengunjung Perpustakaan</title>
</head>
<body class="d-flex flex-column min-vh-100">

    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="/index.html"><img src="/img/books.png" alt="Logo" height="40">Library</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"><a class="nav-link" aria-current="page" href="/index.html"><i class="bi bi-house"></i> Beranda</a></li>
              <li class="nav-item"><a class="nav-link" href="/about.html"><i class="bi bi-info-square"></i> Tentang</a></li>
              <li class="nav-item"> <a class="nav-link" href="/contact.html"><i class="bi bi-envelope"></i> Kontak</a></li>
              <li class="nav-item"><a class="nav-link active" href="/api/index.php"><i class="bi bi-skip-end-btn"></i> Lainnya</a></li>
            </ul>
             <button id="theme-toggle" class="btn btn-link" aria-label="Toggle theme"></button>
          </div>
        </div>
    </nav>

    <header class="hero-section">
        <div class="hero-image-container">
            <img src="/img/visitor.jpg" alt="Gambar Perpustakaan" class="hero-background-image">
        </div>
        <div class="hero-content container">
            <div class="row justify-content-center">
                <div class="col-md-10 col-lg-8 text-center text-white"> <h1 class="display-4 mb-3">Halaman Pengunjung</h1>
                    <p class="lead mb-4 text-white">Harap isi formulir dibawah untuk mendata pengunjung website ini</p>
                <div class="mt-4">
            </div>
        </div>
        </div>
    </header>

<main class="container flex-grow-1 py-5">
    <div class="card shadow">
      <div class="card-body">
        <h2 class="card-title text-center mb-4">Formulir Pengunjung Perpustakaan</h2>
            <!-- <form method="post" class="form-container" action="formulir-pengunjung.php"> -->
        <form action="https://formsubmit.co/jaketmantel@gmail.com" method="POST" class="form-container">
        <table>
            <tr>
                <td>Nama</td>
                <td><input type="text" name="nama" required></td>
            </tr>
            <tr>
                <td>NIP/NIM</td>
                <td><input type="text" name="NIP" required></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input type="email" name="email" required></td>
            </tr>
            <tr>
                <td>Telepon</td>
                <td><input type="tel" name="telepon" required></td>
            </tr>
            <tr>
                <td>Jenis Kelamin</td>
                <td>
                    <select name="jenis_kelamin" required>
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Alamat</td>
                <td><input type="text" name="alamat" required></td>
            </tr>
            <tr>
                <td>Jenis Pengunjung</td>
                <td>
                    <select name="jenis_pengunjung" required>
                        <option value="">Pilih Jenis Pengunjung</option>
                        <option value="Mahasiswa">Mahasiswa</option>
                        <option value="Dosen">Dosen</option>
                        <option value="Tenaga Pendidik">Tenaga Pendidik</option>
                        <option value="Pustakawan">Pustakawan</option>
                        <option value="Staff">Staff</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <input type="submit" value="Kirim Data">
                </td>
            </tr>
        </table>
    </form>
      </div>
    </div>
  </main>
      <footer class="footer">
        <p>&copy; 2025 Arif Ardiansyah</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="/script.js"></script>
</body>
</html>
