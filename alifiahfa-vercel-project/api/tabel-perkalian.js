<!DOCTYPE html>
<html lang="id" data-bs-theme="dark">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Tabel perkalian interaktif 10x10 dengan fitur highlight dan tampilan modern">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.12.1/font/bootstrap-icons.min.css">
        <link rel="stylesheet" href="../style.css">
        <title>Tabel Perkalian 10x10</title>
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
            <img src="/img/math.jpg" alt="Gambar Perpustakaan" class="hero-background-image">
        </div>
        <div class="hero-content container">
            <div class="row justify-content-center">
                <div class="col-md-10 col-lg-8 text-center text-white"> <h1 class="display-4 mb-3">Tabel Perkalian</h1>
                    <p class="lead mb-4 text-white">Tabel Perkalian 10x10 Interaktif</p> <div class="mt-4">
                </div>
            </div>
        </div>
    </header>

    <main class="container flex-grow-1 py-5">
        
        <div class="multiplication-table">
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">×</th>
                                                    <th scope="col">1</th>
                                                    <th scope="col">2</th>
                                                    <th scope="col">3</th>
                                                    <th scope="col">4</th>
                                                    <th scope="col">5</th>
                                                    <th scope="col">6</th>
                                                    <th scope="col">7</th>
                                                    <th scope="col">8</th>
                                                    <th scope="col">9</th>
                                                    <th scope="col">10</th>
                                            </tr>
                </thead>
                <tbody>
                                            <tr>
                            <th scope="row">1</th>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="1 kali 1 sama dengan 1"
                                    onclick="highlightCell(this, 1, 1)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 1, 1)">
                                    1                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="1 kali 2 sama dengan 2"
                                    onclick="highlightCell(this, 1, 2)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 1, 2)">
                                    2                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="1 kali 3 sama dengan 3"
                                    onclick="highlightCell(this, 1, 3)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 1, 3)">
                                    3                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="1 kali 4 sama dengan 4"
                                    onclick="highlightCell(this, 1, 4)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 1, 4)">
                                    4                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="1 kali 5 sama dengan 5"
                                    onclick="highlightCell(this, 1, 5)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 1, 5)">
                                    5                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="1 kali 6 sama dengan 6"
                                    onclick="highlightCell(this, 1, 6)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 1, 6)">
                                    6                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="1 kali 7 sama dengan 7"
                                    onclick="highlightCell(this, 1, 7)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 1, 7)">
                                    7                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="1 kali 8 sama dengan 8"
                                    onclick="highlightCell(this, 1, 8)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 1, 8)">
                                    8                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="1 kali 9 sama dengan 9"
                                    onclick="highlightCell(this, 1, 9)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 1, 9)">
                                    9                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="1 kali 10 sama dengan 10"
                                    onclick="highlightCell(this, 1, 10)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 1, 10)">
                                    10                                </td>
                                                    </tr>
                                            <tr>
                            <th scope="row">2</th>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="2 kali 1 sama dengan 2"
                                    onclick="highlightCell(this, 2, 1)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 2, 1)">
                                    2                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="2 kali 2 sama dengan 4"
                                    onclick="highlightCell(this, 2, 2)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 2, 2)">
                                    4                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="2 kali 3 sama dengan 6"
                                    onclick="highlightCell(this, 2, 3)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 2, 3)">
                                    6                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="2 kali 4 sama dengan 8"
                                    onclick="highlightCell(this, 2, 4)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 2, 4)">
                                    8                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="2 kali 5 sama dengan 10"
                                    onclick="highlightCell(this, 2, 5)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 2, 5)">
                                    10                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="2 kali 6 sama dengan 12"
                                    onclick="highlightCell(this, 2, 6)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 2, 6)">
                                    12                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="2 kali 7 sama dengan 14"
                                    onclick="highlightCell(this, 2, 7)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 2, 7)">
                                    14                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="2 kali 8 sama dengan 16"
                                    onclick="highlightCell(this, 2, 8)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 2, 8)">
                                    16                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="2 kali 9 sama dengan 18"
                                    onclick="highlightCell(this, 2, 9)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 2, 9)">
                                    18                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="2 kali 10 sama dengan 20"
                                    onclick="highlightCell(this, 2, 10)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 2, 10)">
                                    20                                </td>
                                                    </tr>
                                            <tr>
                            <th scope="row">3</th>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="3 kali 1 sama dengan 3"
                                    onclick="highlightCell(this, 3, 1)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 3, 1)">
                                    3                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="3 kali 2 sama dengan 6"
                                    onclick="highlightCell(this, 3, 2)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 3, 2)">
                                    6                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="3 kali 3 sama dengan 9"
                                    onclick="highlightCell(this, 3, 3)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 3, 3)">
                                    9                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="3 kali 4 sama dengan 12"
                                    onclick="highlightCell(this, 3, 4)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 3, 4)">
                                    12                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="3 kali 5 sama dengan 15"
                                    onclick="highlightCell(this, 3, 5)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 3, 5)">
                                    15                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="3 kali 6 sama dengan 18"
                                    onclick="highlightCell(this, 3, 6)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 3, 6)">
                                    18                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="3 kali 7 sama dengan 21"
                                    onclick="highlightCell(this, 3, 7)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 3, 7)">
                                    21                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="3 kali 8 sama dengan 24"
                                    onclick="highlightCell(this, 3, 8)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 3, 8)">
                                    24                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="3 kali 9 sama dengan 27"
                                    onclick="highlightCell(this, 3, 9)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 3, 9)">
                                    27                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="3 kali 10 sama dengan 30"
                                    onclick="highlightCell(this, 3, 10)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 3, 10)">
                                    30                                </td>
                                                    </tr>
                                            <tr>
                            <th scope="row">4</th>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="4 kali 1 sama dengan 4"
                                    onclick="highlightCell(this, 4, 1)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 4, 1)">
                                    4                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="4 kali 2 sama dengan 8"
                                    onclick="highlightCell(this, 4, 2)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 4, 2)">
                                    8                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="4 kali 3 sama dengan 12"
                                    onclick="highlightCell(this, 4, 3)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 4, 3)">
                                    12                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="4 kali 4 sama dengan 16"
                                    onclick="highlightCell(this, 4, 4)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 4, 4)">
                                    16                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="4 kali 5 sama dengan 20"
                                    onclick="highlightCell(this, 4, 5)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 4, 5)">
                                    20                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="4 kali 6 sama dengan 24"
                                    onclick="highlightCell(this, 4, 6)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 4, 6)">
                                    24                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="4 kali 7 sama dengan 28"
                                    onclick="highlightCell(this, 4, 7)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 4, 7)">
                                    28                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="4 kali 8 sama dengan 32"
                                    onclick="highlightCell(this, 4, 8)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 4, 8)">
                                    32                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="4 kali 9 sama dengan 36"
                                    onclick="highlightCell(this, 4, 9)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 4, 9)">
                                    36                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="4 kali 10 sama dengan 40"
                                    onclick="highlightCell(this, 4, 10)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 4, 10)">
                                    40                                </td>
                                                    </tr>
                                            <tr>
                            <th scope="row">5</th>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="5 kali 1 sama dengan 5"
                                    onclick="highlightCell(this, 5, 1)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 5, 1)">
                                    5                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="5 kali 2 sama dengan 10"
                                    onclick="highlightCell(this, 5, 2)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 5, 2)">
                                    10                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="5 kali 3 sama dengan 15"
                                    onclick="highlightCell(this, 5, 3)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 5, 3)">
                                    15                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="5 kali 4 sama dengan 20"
                                    onclick="highlightCell(this, 5, 4)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 5, 4)">
                                    20                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="5 kali 5 sama dengan 25"
                                    onclick="highlightCell(this, 5, 5)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 5, 5)">
                                    25                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="5 kali 6 sama dengan 30"
                                    onclick="highlightCell(this, 5, 6)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 5, 6)">
                                    30                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="5 kali 7 sama dengan 35"
                                    onclick="highlightCell(this, 5, 7)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 5, 7)">
                                    35                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="5 kali 8 sama dengan 40"
                                    onclick="highlightCell(this, 5, 8)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 5, 8)">
                                    40                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="5 kali 9 sama dengan 45"
                                    onclick="highlightCell(this, 5, 9)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 5, 9)">
                                    45                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="5 kali 10 sama dengan 50"
                                    onclick="highlightCell(this, 5, 10)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 5, 10)">
                                    50                                </td>
                                                    </tr>
                                            <tr>
                            <th scope="row">6</th>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="6 kali 1 sama dengan 6"
                                    onclick="highlightCell(this, 6, 1)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 6, 1)">
                                    6                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="6 kali 2 sama dengan 12"
                                    onclick="highlightCell(this, 6, 2)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 6, 2)">
                                    12                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="6 kali 3 sama dengan 18"
                                    onclick="highlightCell(this, 6, 3)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 6, 3)">
                                    18                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="6 kali 4 sama dengan 24"
                                    onclick="highlightCell(this, 6, 4)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 6, 4)">
                                    24                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="6 kali 5 sama dengan 30"
                                    onclick="highlightCell(this, 6, 5)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 6, 5)">
                                    30                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="6 kali 6 sama dengan 36"
                                    onclick="highlightCell(this, 6, 6)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 6, 6)">
                                    36                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="6 kali 7 sama dengan 42"
                                    onclick="highlightCell(this, 6, 7)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 6, 7)">
                                    42                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="6 kali 8 sama dengan 48"
                                    onclick="highlightCell(this, 6, 8)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 6, 8)">
                                    48                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="6 kali 9 sama dengan 54"
                                    onclick="highlightCell(this, 6, 9)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 6, 9)">
                                    54                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="6 kali 10 sama dengan 60"
                                    onclick="highlightCell(this, 6, 10)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 6, 10)">
                                    60                                </td>
                                                    </tr>
                                            <tr>
                            <th scope="row">7</th>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="7 kali 1 sama dengan 7"
                                    onclick="highlightCell(this, 7, 1)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 7, 1)">
                                    7                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="7 kali 2 sama dengan 14"
                                    onclick="highlightCell(this, 7, 2)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 7, 2)">
                                    14                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="7 kali 3 sama dengan 21"
                                    onclick="highlightCell(this, 7, 3)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 7, 3)">
                                    21                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="7 kali 4 sama dengan 28"
                                    onclick="highlightCell(this, 7, 4)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 7, 4)">
                                    28                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="7 kali 5 sama dengan 35"
                                    onclick="highlightCell(this, 7, 5)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 7, 5)">
                                    35                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="7 kali 6 sama dengan 42"
                                    onclick="highlightCell(this, 7, 6)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 7, 6)">
                                    42                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="7 kali 7 sama dengan 49"
                                    onclick="highlightCell(this, 7, 7)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 7, 7)">
                                    49                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="7 kali 8 sama dengan 56"
                                    onclick="highlightCell(this, 7, 8)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 7, 8)">
                                    56                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="7 kali 9 sama dengan 63"
                                    onclick="highlightCell(this, 7, 9)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 7, 9)">
                                    63                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="7 kali 10 sama dengan 70"
                                    onclick="highlightCell(this, 7, 10)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 7, 10)">
                                    70                                </td>
                                                    </tr>
                                            <tr>
                            <th scope="row">8</th>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="8 kali 1 sama dengan 8"
                                    onclick="highlightCell(this, 8, 1)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 8, 1)">
                                    8                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="8 kali 2 sama dengan 16"
                                    onclick="highlightCell(this, 8, 2)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 8, 2)">
                                    16                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="8 kali 3 sama dengan 24"
                                    onclick="highlightCell(this, 8, 3)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 8, 3)">
                                    24                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="8 kali 4 sama dengan 32"
                                    onclick="highlightCell(this, 8, 4)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 8, 4)">
                                    32                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="8 kali 5 sama dengan 40"
                                    onclick="highlightCell(this, 8, 5)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 8, 5)">
                                    40                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="8 kali 6 sama dengan 48"
                                    onclick="highlightCell(this, 8, 6)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 8, 6)">
                                    48                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="8 kali 7 sama dengan 56"
                                    onclick="highlightCell(this, 8, 7)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 8, 7)">
                                    56                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="8 kali 8 sama dengan 64"
                                    onclick="highlightCell(this, 8, 8)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 8, 8)">
                                    64                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="8 kali 9 sama dengan 72"
                                    onclick="highlightCell(this, 8, 9)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 8, 9)">
                                    72                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="8 kali 10 sama dengan 80"
                                    onclick="highlightCell(this, 8, 10)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 8, 10)">
                                    80                                </td>
                                                    </tr>
                                            <tr>
                            <th scope="row">9</th>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="9 kali 1 sama dengan 9"
                                    onclick="highlightCell(this, 9, 1)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 9, 1)">
                                    9                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="9 kali 2 sama dengan 18"
                                    onclick="highlightCell(this, 9, 2)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 9, 2)">
                                    18                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="9 kali 3 sama dengan 27"
                                    onclick="highlightCell(this, 9, 3)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 9, 3)">
                                    27                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="9 kali 4 sama dengan 36"
                                    onclick="highlightCell(this, 9, 4)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 9, 4)">
                                    36                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="9 kali 5 sama dengan 45"
                                    onclick="highlightCell(this, 9, 5)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 9, 5)">
                                    45                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="9 kali 6 sama dengan 54"
                                    onclick="highlightCell(this, 9, 6)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 9, 6)">
                                    54                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="9 kali 7 sama dengan 63"
                                    onclick="highlightCell(this, 9, 7)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 9, 7)">
                                    63                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="9 kali 8 sama dengan 72"
                                    onclick="highlightCell(this, 9, 8)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 9, 8)">
                                    72                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="9 kali 9 sama dengan 81"
                                    onclick="highlightCell(this, 9, 9)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 9, 9)">
                                    81                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="9 kali 10 sama dengan 90"
                                    onclick="highlightCell(this, 9, 10)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 9, 10)">
                                    90                                </td>
                                                    </tr>
                                            <tr>
                            <th scope="row">10</th>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="10 kali 1 sama dengan 10"
                                    onclick="highlightCell(this, 10, 1)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 10, 1)">
                                    10                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="10 kali 2 sama dengan 20"
                                    onclick="highlightCell(this, 10, 2)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 10, 2)">
                                    20                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="10 kali 3 sama dengan 30"
                                    onclick="highlightCell(this, 10, 3)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 10, 3)">
                                    30                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="10 kali 4 sama dengan 40"
                                    onclick="highlightCell(this, 10, 4)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 10, 4)">
                                    40                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="10 kali 5 sama dengan 50"
                                    onclick="highlightCell(this, 10, 5)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 10, 5)">
                                    50                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="10 kali 6 sama dengan 60"
                                    onclick="highlightCell(this, 10, 6)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 10, 6)">
                                    60                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="10 kali 7 sama dengan 70"
                                    onclick="highlightCell(this, 10, 7)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 10, 7)">
                                    70                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="10 kali 8 sama dengan 80"
                                    onclick="highlightCell(this, 10, 8)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 10, 8)">
                                    80                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="10 kali 9 sama dengan 90"
                                    onclick="highlightCell(this, 10, 9)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 10, 9)">
                                    90                                </td>
                                                            <td role="button" 
                                    tabindex="0"
                                    aria-label="10 kali 10 sama dengan 100"
                                    onclick="highlightCell(this, 10, 10)"
                                    onkeypress="if(event.key === 'Enter') highlightCell(this, 10, 10)">
                                    100                                </td>
                                                    </tr>
                                    </tbody>
            </table>
        </div>

        <div id="result" class="result-display text-center"></div>
    </main>

    <footer class="footer">
        <p>&copy; 2025 Arif Ardiansyah</p>
    </footer>

    <script>
        function highlightCell(cell, row, col) {
            // Remove previous highlights
            document.querySelectorAll('td').forEach(td => {
                td.classList.remove('highlight');
                td.setAttribute('aria-current', 'false');
            });

            // Add new highlight
            cell.classList.add('highlight');
            cell.setAttribute('aria-current', 'true');
            
            // Update result display
            const result = row * col;
            document.getElementById('result').innerHTML = `
                <span class="fs-4">${row} × ${col} = </span>
                <span class="display-6 fw-bold">${result}</span>
            `;
        }
    </script>
    
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
     <script src="/script.js"></script>
</body>
</html>
