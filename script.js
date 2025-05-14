document.addEventListener("DOMContentLoaded", function() {
    const message = "Selamat datang di Perpustakaan Alifiah Fitri Ariani!";
    const words = message.split(" ");
    const wordCount = words.length;
    const readingSpeed = 250;
    const duration = (wordCount / readingSpeed) * 60 * 1000;

    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = message;
    welcomeMessage.style.position = "fixed";
    welcomeMessage.style.top = "20px";
    welcomeMessage.style.left = "50%";
    welcomeMessage.style.transform = "translateX(-50%)";
    welcomeMessage.style.backgroundColor = "#508C9B";
    welcomeMessage.style.color = "white";
    welcomeMessage.style.padding = "20px 40px";
    welcomeMessage.style.borderRadius = "10px";
    welcomeMessage.style.zIndex = "1000";
    welcomeMessage.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
    welcomeMessage.style.fontSize = "20px";
    welcomeMessage.style.textAlign = "center";
    welcomeMessage.style.opacity = "1";
    welcomeMessage.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";

    document.body.appendChild(welcomeMessage);

    setTimeout(() => {
        welcomeMessage.style.opacity = "0";
        welcomeMessage.style.transform = "translateX(-50%) scale(0.9)";
        setTimeout(() => {
            document.body.removeChild(welcomeMessage);
        }, 500);
    }, duration);
});

const books = [
    { title: "The 5 Second Rule: Transform your Life, Work, and Confidence with Everyday Courage", description: "“You often feel tired, not because you've done too much, but because you've done too little of what sparks a light in you.” ― Alexander Den Heijer", cover: "https://cdn.pdfdrive.com/assets/thumbs/52c/52cd4079b54f1fbcb5d6bc581a73618b.jpg", pdf: "https://drive.google.com/file/d/1QicLo0DnkvhQ3wVkMs0DNnVcp24W9Nv6/view?usp=sharing" },
    { title: "Learning Web Design : A Beginner’s Guide to HTML, CSS, JavaScript, and Web Graphics", description: "“Learn to light a candle in the darkest moments of someone’s life. Be the light that helps others see; it is what gives life its deepest significance.” ― Roy T. Bennett", cover: "https://cdn.pdfdrive.com/assets/thumbs/033/033ce90f832de5a2bc33e1e25a48a037.jpg", pdf: "https://drive.google.com/file/d/14FjiIidHz8bgtevBpgAw14-Csc49LUD9/view?usp=sharing" },
    { title: "Webster's Word Power Better English Grammar. Improve Your Written and Spoken English", description: "“Everything in the universe is within you. Ask all from yourself.” ― Rumi", cover: "https://cdn.pdfdrive.com/assets/thumbs/4a7/4a7bd709db4352edd66565b212d9c5b4.jpg", pdf: "https://drive.google.com/file/d/1mh6kwRXbtiX4vgqYZRDBwUqdhHrqj6AS/view?usp=sharing" },
    { title: "100 Ways to Motivate Yourself: Change Your Life Forever", description: "“You have to expect things of yourself before you can do them.” ― Michael Jordan", cover: "https://cdn.pdfdrive.com/assets/thumbs/703/703b43783687bc4f3540c276dca3819a.jpg", pdf: "https://drive.google.com/file/d/1-1w0V8j5Dox4eOe6PyWWu5kqAtDUaog3/view?usp=sharing" },
    { title: "Boundaries: When To Say Yes, How to Say No", description: "“Don't watch the clock, do what it does. Keep Going.” ― Sam Levenson", cover: "https://cdn.pdfdrive.com/assets/thumbs/cc2/cc232d97796e0e9ab2e19ea6af584f55.jpg", pdf: "https://drive.google.com/file/d/1_0gk2RdjfbjhoUiovgWoS60YOGhocAZj/view?usp=drive_link" }
];

const searchInput = document.getElementById('search');
const bookList = document.getElementById('bookList');

function displayBooks(books) {
    bookList.innerHTML = '';
    const row = document.createElement('div');
    row.className = 'row';

    books.forEach(book => {
        const col = document.createElement('div');
        col.className = 'col-12 mb-4';

        const card = document.createElement('div');
        card.className = 'card flex-row event-card';
        card.style.cursor = 'pointer';
        card.onclick = () => openBookDetail(book);

        card.innerHTML = `
            <img src="${book.cover}" class="img-fluid" alt="${book.title}" style="width: 150px; object-fit: cover;">
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

displayBooks(books.slice(0, 3));

searchInput.addEventListener('keyup', function() {
    const filter = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(filter));
    displayBooks(filteredBooks);
});

function openBookDetail(book) {
    const modal = document.createElement('div');
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "2000";

    const modalContent = document.createElement('div');
    modalContent.className = 'book-modal card p-4';
    modalContent.style.borderRadius = "10px";
    modalContent.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
    modalContent.style.maxWidth = "500px";
    modalContent.style.width = "100%";
    modalContent.style.textAlign = "center";
// Tambahan class styling tombol
const style = document.createElement('style');
style.textContent = `
  .btn-baca {
  background-color: rgb(34, 97, 149) !important;
  color: white !important;
  text-decoration: none !important;
  border: none !important;
}
  .btn-download {
    background-color: rgb(34, 97, 149);
    color: white;
  }
  .btn-tutup {
    background-color: rgb(34, 97, 149);
    color: white;
  }
  .btn-baca:hover {
    background-color: rgb(119, 225, 123) !important;;
  }
  .btn-download:hover {
    background-color: rgb(31, 112, 234);
  }
  .btn-tutup:hover {
    background-color:rgb(242, 95, 85);
  }

  body.dark-mode .book-modal {
    background-color:rgb(0, 0, 0);
    color: #eee;
  }
  body.dark-mode .book-modal .card-title,
  body.dark-mode .book-modal .card-text {
    color: #eee;
  }
`;
document.head.appendChild(style);

    modalContent.innerHTML = `
    <h2 class="card-title mb-3">${book.title}</h2>
    <img src="${book.cover}" alt="${book.title} Cover" style="width: 120px; height: auto; margin: 0 auto 15px; display: block;">
    <p class="card-text mb-4">${book.description}</p>
    <div class="d-flex justify-content-center gap-2 flex-wrap">
      <button onclick="window.open('${book.pdf}', '_blank')" class="btn btn-baca">Baca PDF</button>
      <button id="downloadButton" class="btn btn-download">Download PDF</button>
      <button id="closeModal" class="btn btn-tutup">Tutup</button>
    </div>
`;


    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    document.getElementById('closeModal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    document.getElementById('downloadButton').addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = book.pdf;
        link.download = '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        alert(`Anda telah mengunduh buku: "${book.title}"`);
    });
}

window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
        footer.classList.add("visible");
    } else {
        footer.classList.remove("visible");
    }
});

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

setTimeout(typeEffect, 500);
document.addEventListener("DOMContentLoaded", function () {
  // Tooltip otomatis untuk elemen .nav-link dan .dropdown-item
  const tooltipElements = document.querySelectorAll('.nav-link, .dropdown-item');

  tooltipElements.forEach(el => {
    // Gunakan teks isi elemen sebagai isi tooltip
    const tooltipText = el.textContent.trim();

    el.addEventListener('mouseenter', function () {
      const tooltip = document.createElement('div');
      tooltip.className = 'custom-tooltip';
      tooltip.textContent = tooltipText;

      document.body.appendChild(tooltip);

      const rect = el.getBoundingClientRect();
      tooltip.style.left = `${rect.left + rect.width / 2}px`;
      tooltip.style.top = `${rect.top - 35}px`;

      el._tooltip = tooltip;
    });

    el.addEventListener('mouseleave', function () {
      if (el._tooltip) {
        document.body.removeChild(el._tooltip);
        delete el._tooltip;
      }
    });
  });

  // Tambahkan style tooltip ke head
  const style = document.createElement('style');
  style.textContent = `
    .custom-tooltip {
      position: fixed;
      transform: translateX(-50%);
      background-color: rgba(34, 97, 149, 0.95);
      color: white;
      padding: 6px 10px;
      border-radius: 4px;
      font-size: 13px;
      z-index: 9999;
      pointer-events: none;
      white-space: nowrap;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }
  `;
  document.head.appendChild(style);
});
if (window.location.href==="https://alifiahfa.github.io/220709061_Alifiah-Fitri-Ariani/") {
    window.location.href = "https://alifiahfa.vercel.app/"; 
}
