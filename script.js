document.addEventListener("DOMContentLoaded", function() {
    // Pesan sambutan
    const message = "Selamat datang di Perpustakaan Alifiah Fitri Ariani!";
    const words = message.split(" "); // Memisahkan pesan menjadi kata-kata
    const wordCount = words.length; // Menghitung jumlah kata
    const readingSpeed = 250; // Rata-rata kata per menit
    const duration = (wordCount / readingSpeed) * 60 * 1000; // Durasi dalam milidetik

    // Membuat elemen div untuk pesan sambutan
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = message;
    welcomeMessage.style.position = "fixed";
    welcomeMessage.style.top = "10px"; // Posisi vertikal di atas
    welcomeMessage.style.left = "50%"; // Posisi horizontal di tengah
    welcomeMessage.style.transform = "translateX(-50%)"; // Menggeser elemen ke tengah
    welcomeMessage.style.backgroundColor = "#004d40"; // Warna senada dengan header
    welcomeMessage.style.color = "white";
    welcomeMessage.style.padding = "20px 40px"; // Padding lebih besar
    welcomeMessage.style.borderRadius = "10px"; // Sudut lebih melengkung
    welcomeMessage.style.zIndex = "1000";
    welcomeMessage.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)"; // Bayangan
    welcomeMessage.style.fontSize = "20px"; // Ukuran font lebih besar
    welcomeMessage.style.textAlign = "center"; // Teks rata tengah
    welcomeMessage.style.opacity = "1"; // Awalnya terlihat
    welcomeMessage.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out"; // Transisi untuk opacity dan transform

    // Menambahkan pesan ke body
    document.body.appendChild(welcomeMessage);

    // Menghilangkan pesan setelah durasi yang dihitung
    setTimeout(() => {
        welcomeMessage.style.opacity = "0"; // Mengurangi opacity
        welcomeMessage.style.transform = "translateX(-50%) scale(0.9)"; // Efek mengecil
        setTimeout(() => {
            document.body.removeChild(welcomeMessage); // Menghapus elemen setelah transisi
        }, 500); // Waktu untuk transisi
    }, duration); // Waktu tampil pesan
});

// Data buku
const books = [
    {
        title: "The 5 Second Rule: Transform your Life, Work, and Confidence with Everyday Courage",
        description: "“You often feel tired, not because you've done too much, but because you've done too little of what sparks a light in you. ” ― Anonymous",
        cover: "https://cdn.pdfdrive.com/assets/thumbs/52c/52cd4079b54f1fbcb5d6bc581a73618b.jpg" // Ganti dengan URL cover yang sesuai
    },
    {
        title: "Learning Web Design : A Beginner’s Guide to HTML, CSS, JavaScript, and Web Graphics",
        description: "“ You often feel tired, not because you've done too much, but because you've done too little of what sparks a light in you. ” ― Anonymous",
        cover: "https://cdn.pdfdrive.com/assets/thumbs/033/033ce90f832de5a2bc33e1e25a48a037.jpg" // Ganti dengan URL cover yang sesuai
    },
    {
        title: "Webster's Word Power Better English Grammar. Improve Your Written and Spoken English",
        description: "“ Everything in the universe is within you. Ask all from yourself. ” ― Rumi",
        cover: "https://cdn.pdfdrive.com/assets/thumbs/4a7/4a7bd709db4352edd66565b212d9c5b4.jpg" // Ganti dengan URL cover yang sesuai
    },
    {
        title: "100 Ways to Motivate Others",
        description: "“ In every community, there is work to be done. In every nation, there are wounds to heal. In every heart, there is the power to do it. ” ― Marianne Williamson",
        cover: "https://cdn.pdfdrive.com/assets/thumbs/ff1/ff190e92b1f4baa340fbf15c153cfe8f.jpg" // Ganti dengan URL cover yang sesuai
    },
    {
        title: "Boundaries: When To Say Yes, How to Say No",
        description: "“ Don't watch the clock, do what it does. Keep Going. ” ― Sam Levenson",
        cover: "https://cdn.pdfdrive.com/assets/thumbs/cc2/cc232d97796e0e9ab2e19ea6af584f55.jpg" // Ganti dengan URL cover yang sesuai
    }
];

const searchInput = document.getElementById('search');
const bookList = document.getElementById('bookList');

// Fungsi untuk menampilkan buku
function displayBooks(books) {
    bookList.innerHTML = ''; // Kosongkan daftar buku
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <img src="${book.cover}" alt="${book.title} Cover" style="width: 100px; height: auto; margin-right: 10px;">
            <div>
                <h4>${book.title}</h4>
                <p>${book.description}</p>
            </div>
        `;
        
        // Tambahkan event listener untuk membuka detail buku
        bookItem.addEventListener('click', () => openBookDetail(book));
        
        bookList.appendChild(bookItem);
    });
}

// Tampilkan 3 buku pertama saat halaman dimuat
displayBooks(books.slice(0, 3));

// Event listener untuk pencarian
searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(filter));
    displayBooks(filteredBooks);
});

// Fungsi untuk membuka detail buku
function openBookDetail(book) {
    // Membuat modal untuk menampilkan detail buku
    const modal = document.createElement('div');
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Latar belakang transparan
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "2000"; // Pastikan modal di atas elemen lainnya

    // Konten modal
    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = "white";
    modalContent.style.padding = "20px";
    modalContent.style.borderRadius = "10px";
    modalContent.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
    modalContent.style.maxWidth = "500px";
    modalContent.style.width = "100%";

    // Menambahkan detail buku ke modal
    modalContent.innerHTML = `
        <h2>${book.title}</h2>
        <img src="${book.cover}" alt="${book.title} Cover" style="width: 100px; height: auto; margin-bottom: 10px;">
        <p>${book.description}</p>
        <button id="closeModal" style="padding: 10px 15px; background-color: #00796b; color: white; border: none; border-radius: 5px; cursor: pointer;">Tutup</button>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Event listener untuk menutup modal
    document.getElementById('closeModal').addEventListener('click', () => {
        document.body.removeChild(modal); // Menghapus modal dari body
    });
}
