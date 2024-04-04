// JavaScript untuk menangani perpindahan halaman saat tombol ditekan
const navLinks = document.querySelectorAll('.top-navbar nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetPage = this.getAttribute('href');
        window.location.href = targetPage;
    });
});

const bottomNavLinks = document.querySelectorAll('.bottom-navbar a');
bottomNavLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetPage = this.getAttribute('href');
        window.location.href = targetPage;
    });
});
const homeButton = document.querySelector('.top-navbar nav ul li:first-child a');
homeButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'index.html';
});

const bottomNavbar = document.getElementById('bottom-navbar');

// Deteksi scroll
window.addEventListener('scroll', function() {
    // Jika pengguna menggulir ke bawah
    if (window.scrollY > 100) {
        // Tampilkan navbar bawah
        bottomNavbar.style.bottom = '0';
    } else {
        // Sembunyikan navbar bawah
        bottomNavbar.style.bottom = '-60px';
    }
});