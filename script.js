/* =========  DARK MODE  ========= */
function toggleDarkMode() {
  const body = document.body;
  const icon = document.querySelector('.dark-mode-toggle i');

  // Toggle dark mode class
  body.classList.toggle('dark-mode');

  // Simpan preferensi ke localStorage
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Ganti ikon
  if (isDark) {
    icon.classList.remove('bi-moon-stars-fill');
    icon.classList.add('bi-sun-fill');
  } else {
    icon.classList.remove('bi-sun-fill');
    icon.classList.add('bi-moon-stars-fill');
  }
}


/* =========  SHOW THANK YOU MESSAGE  ========= */
function showThankYouMessage() {
  const txt = 'Terima kasih telah mengunjungi perpustakaan kami!';
  
  // Cegah duplikat
  if (document.getElementById('thankYouMessage')) return;
  
  // Tempel di akhir body
  document.body.appendChild(div);
}

/* =========  ON LOAD  ========= */
window.addEventListener('DOMContentLoaded', () => {
  /* restore theme */
   const icon = document.querySelector('.dark-mode-toggle i');
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (icon) {
      icon.classList.remove('bi-moon-stars-fill');
      icon.classList.add('bi-sun-fill');
    }
  }


  /* bootstrap tooltips */
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(el => new bootstrap.Tooltip(el));

  /* run footer typing effect */
  animateFooter();

  /* show welcome banner once per browser */
  showWelcomeBanner();

  /* show thank you message on all pages */
  showThankYouMessage();

  /* initialise book list (if present) */
  if (document.getElementById('bookList') && document.getElementById('search')) {
    displayBooks(books.slice(0, 3));
  }
});

/* =========  WELCOME BANNER  ========= */
function showWelcomeBanner() {
  if (localStorage.getItem('welcomeShown') === 'true') return;

  const message = 'Selamat datang di Perpustakaan Alifiah Fitri Ariani!';
  const banner = document.createElement('div');
  banner.textContent = message;
  banner.className = 'welcome-message';
  banner.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #508C9B;
    color: #fff;
    padding: 20px 40px;
    border-radius: 10px;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(0,0,0,.3);
    font-size: 20px;
    text-align: center;
    opacity: 1;
    transition: opacity .5s, transform .5s;
  `;
  document.body.appendChild(banner);

  setTimeout(() => {
    banner.style.opacity = '0';
    banner.style.transform = 'translateX(-50%) scale(0.9)';
    setTimeout(() => banner.remove(), 500);
  }, 3000);

  localStorage.setItem('welcomeShown', 'true');
}

/* =========  FOOTER TYPING TEXT  ========= */
function animateFooter() {
  const footerSpan = document.getElementById('footerText');
  if (!footerSpan) return;

  const txt = 'Terima kasih telah mengunjungi perpustakaan kami!';
  let i = 0;
  footerSpan.textContent = '';
  const speed = 80;

  (function type() {
    if (i < txt.length) {
      footerSpan.textContent += txt.charAt(i++);
      setTimeout(type, speed);
    }
  })();
}

/* =========  BOOK DATA  ========= */
const books = [
  {
    title: 'The 5 Second Rule: Transform your Life, Work, and Confidence with Everyday Courage',
    description: '“You often feel tired, not because you\'ve done too much, but because you\'ve done too little of what sparks a light in you.” — Alexander Den Heijer',
    cover: 'https://cdn.pdfdrive.com/assets/thumbs/52c/52cd4079b54f1fbcb5d6bc581a73618b.jpg',
    pdf: 'https://drive.google.com/file/d/1QicLo0DnkvhQ3wVkMs0DNnVcp24W9Nv6/view?usp=sharing'
  },
  {
    title: 'Learning Web Design: A Beginner’s Guide to HTML, CSS, JavaScript, and Web Graphics',
    description: '“Learn to light a candle in the darkest moments of someone’s life. Be the light that helps others see; it is what gives life its deepest significance.” — Roy T. Bennett',
    cover: 'https://cdn.pdfdrive.com/assets/thumbs/033/033ce90f832de5a2bc33e1e25a48a037.jpg',
    pdf: 'https://drive.google.com/file/d/14FjiIidHz8bgtevBpgAw14-Csc49LUD9/view?usp=sharing'
  },
  {
    title: 'Webster\'s Word Power Better English Grammar. Improve Your Written and Spoken English',
    description: '“Everything in the universe is within you. Ask all from yourself.” — Rumi',
    cover: 'https://cdn.pdfdrive.com/assets/thumbs/4a7/4a7bd709db4352edd66565b212d9c5b4.jpg',
    pdf: 'https://drive.google.com/file/d/1mh6kwRXbtiX4vgqYZRDBwUqdhHrqj6AS/view?usp=sharing'
  },
  {
    title: '100 Ways to Motivate Yourself: Change Your Life Forever',
    description: '“You have to expect things of yourself before you can do them.” — Michael Jordan',
    cover: 'https://cdn.pdfdrive.com/assets/thumbs/703/703b43783687bc4f3540c276dca3819a.jpg',
    pdf: 'https://drive.google.com/file/d/1-1w0V8j5Dox4eOe6PyWWu5kqAtDUaog3/view?usp=sharing'
  },
  {
    title: 'Boundaries: When To Say Yes, How to Say No',
    description: '“Don\'t watch the clock, do what it does. Keep Going.” — Sam Levenson',
    cover: 'https://cdn.pdfdrive.com/assets/thumbs/cc2/cc232d97796e0e9ab2e19ea6af584f55.jpg',
    pdf: 'https://drive.google.com/file/d/1_0gk2RdjfbjhoUiovgWoS60YOGhocAZj/view?usp=drive_link'
  }
];

/* =========  BOOK LISTING & SEARCH  ========= */
const searchInput = document.getElementById('search');
const bookList = document.getElementById('bookList');

if (searchInput) {
  searchInput.addEventListener('keyup', () => {
    const filter = searchInput.value.toLowerCase();
    const filtered = books.filter(b => b.title.toLowerCase().includes(filter));
    displayBooks(filtered);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('bookList') && document.getElementById('search')) {
    displayBooks(books.slice(0, 3));  // tampilkan 3 buku pertama
  }
});


function displayBooks(bookArray) {
  if (!bookList) return;
  bookList.innerHTML = '';
  const row = document.createElement('div');
  row.className = 'row';

  bookArray.forEach(book => {
    const col = document.createElement('div');
    col.className = 'col-12 mb-4';

    const card = document.createElement('div');
    card.className = 'card flex-row event-card';
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => openBookDetail(book));

    card.innerHTML = `
      <img src="${book.cover}" alt="${book.title}" class="img-fluid" style="width:150px;object-fit:cover;">
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">${book.description}</p>
      </div>
    `;
    col.appendChild(card);
    row.appendChild(col);
  });

  bookList.appendChild(row);
}

/* =========  BOOK MODAL  ========= */
function openBookDetail(book) {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(0,0,0,.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
  `;

  const modalContent = document.createElement('div');
  modalContent.className = 'book-modal card p-4';
  modalContent.style.cssText = `
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0,0,0,.3);
    max-width: 500px;
    width: 100%;
    text-align: center;
  `;

  modalContent.innerHTML = `
    <h2 class="card-title mb-3">${book.title}</h2>
    <img src="${book.cover}" alt="${book.title} Cover" style="width: 120px; margin: 0 auto 15px;">
    <p class="card-text mb-4">${book.description}</p>
    <div class="d-flex justify-content-center gap-2 flex-wrap">
      <button class="btn btn-primary" id="readPdf">Baca PDF</button>
      <button class="btn btn-success" id="downloadPdf">Download PDF</button>
      <button class="btn btn-danger" id="closeModal">Tutup</button>
    </div>
  `;

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  modalContent.querySelector('#closeModal').addEventListener('click', () => {
    modal.remove();
  });

  modalContent.querySelector('#readPdf').addEventListener('click', () => {
    window.open(book.pdf, '_blank');
  });

  modalContent.querySelector('#downloadPdf').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = book.pdf;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}


// Tombol scroll to top
// Ambil elemen tombol scroll to top
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Tampilkan tombol saat user scroll ke bawah 200px
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = 'flex'; // tampilkan tombol
  } else {
    scrollToTopBtn.style.display = 'none'; // sembunyikan tombol
  }
});

// Fungsi klik tombol scroll ke atas
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



/* =========   TABEL PERKALIAN  ========= */
document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('.perkalian-table');
  const output = document.getElementById('hasilTeks');

  if (!table || !output) return;

  table.addEventListener('click', e => {
    const cell = e.target.closest('td');
    if (!cell) return;

    const row = cell.parentElement;
    const rowIndex = row.rowIndex;        // baris index
    const colIndex = cell.cellIndex;      // kolom index

    // Hindari klik di luar area angka (kolom header)
    if (rowIndex === 0 || colIndex === 0) return;

    // Ambil label dari header kolom dan baris kiri
    const kolLabel = table.rows[0].cells[colIndex].textContent;
    const barisLabel = table.rows[rowIndex].cells[0].textContent;

    // Hitung hasil
    const hasil = parseInt(kolLabel) * parseInt(barisLabel);

    // Reset pilihan sebelumnya
    table.querySelectorAll('td.selected').forEach(td => td.classList.remove('selected'));

    // Tandai sel yang diklik
    cell.classList.add('selected');

    // Tampilkan hasil
    output.textContent = `${barisLabel} × ${kolLabel} = ${hasil}`;
  });
});
