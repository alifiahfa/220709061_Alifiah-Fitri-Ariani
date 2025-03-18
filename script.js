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
        description: "“You often feel tired, not because you've done too much, but because you've done too little of what sparks a light in you. ” ― Alexander Den Heijer",
        cover: "https://cdn.pdfdrive.com/assets/thumbs/52c/52cd4079b54f1fbcb5d6bc581a73618b.jpg",
        pdf: "https://drive.google.com/file/d/1QicLo0DnkvhQ3wVkMs0DNnVcp24W9Nv6/view?usp=sharing" // Ganti dengan path ke file PDF yang benar
    },
    {
        title: "Learning Web Design : A Beginner’s Guide to HTML, CSS, JavaScript, and Web Graphics",
        description: "“ Learn to light a candle in the darkest moments of someone’s life. Be the light that helps others see; it is what gives life its deepest significance. ” ― Roy T. Bennett",
        cover: "https://cdn.pdfdrive.com/assets/thumbs/033/033ce90f832de5a2bc33e1e25a48a037.jpg",
        pdf: "https://drive.google.com/file/d/14FjiIidHz8bgtevBpgAw14-Csc49LUD9/view?usp=sharing" // Ganti dengan path ke file PDF
    },
    {
        title: "Webster's Word Power Better English Grammar. Improve Your Written and Spoken English",
        description: "“ Everything in the universe is within you. Ask all from yourself. ” ― Rumi",
        cover: "https://cdn.pdfdrive.com/assets/thumbs/4a7/4a7bd709db4352edd66565b212d9c5b4.jpg",
        pdf: "https://drive.google.com/file/d/1mh6kwRXbtiX4vgqYZRDBwUqdhHrqj6AS/view?usp=sharing" // Ganti dengan path ke file PDF
    },
    {
        title: "100 Ways to Motivate Yourself: Change Your Life Forever",
        description: "“ You have to expect things of yourself before you can do them. ” ― Michael Jordan",
        cover: "https://cdn.pdfdrive.com/assets/thumbs/703/703b43783687bc4f3540c276dca3819a.jpg",
        pdf: "https://drive.google.com/file/d/1-1w0V8j5Dox4eOe6PyWWu5kqAtDUaog3/view?usp=sharing" // Ganti dengan path ke file PDF
    },
    {
        title: "Boundaries: When To Say Yes, How to Say No",
        description: "“ Don't watch the clock, do what it does. Keep Going. ” ― Sam Levenson",
        cover: "https://cdn.pdfdrive.com/assets/thumbs/cc2/cc232d97796e0e9ab2e19ea6af584f55.jpg",
        pdf: "https://drive.google.com/file/d/1_0gk2RdjfbjhoUiovgWoS60YOGhocAZj/view?usp=drive_link" // Ganti dengan path ke file PDF
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
        <a href="${book.pdf}" target="_blank" style="display: inline-block; margin-bottom: 10px; padding: 10px 15px; background-color: #00796b; color: white; text-decoration: none; border-radius: 5px;">Baca PDF</a>
        <button id="downloadButton" style="padding: 10px 15px; background-color: #00796b; color: white; border: none; border-radius: 5px; cursor: pointer;">Download PDF</button>
        <button id="closeModal" style="padding: 10px 15px; background-color: #00796b; color: white; border: none; border-radius: 5px; cursor: pointer;">Tutup</button>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Event listener untuk menutup modal
    document.getElementById('closeModal').addEventListener('click', () => {
        document.body.removeChild(modal); // Menghapus modal dari body
    });

    // Event listener untuk tombol download
    document.getElementById('downloadButton').addEventListener('click', () => {
        const link = document.createElement('a'); // Membuat elemen <a> baru
        link.href = book.pdf; // Mengatur href ke URL PDF
        link.download = ''; // Mengatur atribut download
        document.body.appendChild(link); // Menambahkan link ke body
        link.click(); // Mengklik link untuk memulai unduhan
        document.body.removeChild(link); // Menghapus link dari body
        alert(`Anda telah mengunduh buku: "${book.title}"`); // Tampilkan pesan konfirmasi
    });
}
const flower = document.getElementById('flower');

// Fungsi untuk menggerakkan bunga
function animateFlower() {
    let position = 0; // Posisi awal
    const maxHeight = 20; // Jarak maksimum bunga bergerak ke atas
    const speed = 0.5; // Kecepatan gerakan

    // Mengubah posisi bunga secara berkala
    setInterval(() => {
        // Mengubah posisi bunga
        position += speed;
        
        // Jika bunga sudah mencapai batas maksimum, ubah arah
        if (position > maxHeight || position < 0) {
            speed *= -1; // Ubah arah
        }

        // Mengatur posisi bunga
        flower.style.transform = `translate(-50%, -${position}px)`;
    }, 20); // Interval waktu dalam milidetik
}

// Memulai animasi bunga
animateFlower();
document.addEventListener("DOMContentLoaded", function() {
    let footer = document.querySelector("footer");

    // Efek muncul saat scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) { // Muncul setelah scroll 100px
            footer.classList.add("visible");
        } else {
            footer.classList.remove("visible");
        }
    });

    // Efek teks animasi
    let textElement = document.createElement("p");
    textElement.classList.add("animated-text");
    footer.appendChild(textElement);

    let text = "Terima kasih telah mengunjungi perpustakaan kami!";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    setTimeout(typeEffect, 500); // Delay sebelum animasi dimulai
});
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function initParticles() {
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let particle of particles) {
        particle.update();
        particle.draw();
    }

    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
