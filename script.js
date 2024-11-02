// Fungsi untuk menampilkan halaman dengan transisi
function showPage(pageId) {
    const allPages = document.querySelectorAll('.container');
    allPages.forEach(page => {
        page.classList.remove('show-page');
        page.style.display = 'none';
    });

    const page = document.getElementById(pageId);
    page.style.display = 'block';

    // Memberi jeda sebelum menambahkan kelas show-page agar transisi terpicu
    setTimeout(() => {
        page.classList.add('show-page');
    }, 50);
}

// Fungsi untuk menampilkan modal alert
function showModal(message) {
    const modal = document.getElementById('customAlert');
    document.getElementById('alertMessage').innerText = message;
    modal.style.display = 'flex';

    // Tutup modal saat tombol "OK" diklik
    document.getElementById('modalButton').onclick = function() {
        modal.style.display = 'none';
    };
}

// Fungsi untuk proses submit form
function submitForm() {
    const name = document.getElementById('nameInput').value.trim();
    const alphabetRegex = /^[a-zA-Z\s]+$/;

    if (!name) {
        showModal("Kamu harus memasukkan nama terlebih dahulu.");
    } else if (!alphabetRegex.test(name)) {
        showModal("Masukkan nama dengan huruf Alfabet saja!");
    } else {
        showPage('page2'); // Menampilkan halaman kedua
        document.getElementById('namaUser').innerText = name;
        countdown();
    }
}

// Fungsi untuk hitung mundur
function countdown() {
    const targetTime = new Date();
    targetTime.setHours(9, 49, 0, 0); // Sesuaikan waktu

    const interval = setInterval(() => {
        const now = new Date();
        const timeDifference = targetTime - now;

        if (timeDifference <= 0) {
            clearInterval(interval);
            showFinalPage();
        } else {
            const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
            const seconds = Math.floor((timeDifference / 1000) % 60);
            document.getElementById('countdownTime').innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

// Fungsi untuk menampilkan halaman terakhir setelah hitung mundur selesai
function showFinalPage() {
    showPage('page3'); // Menampilkan halaman ketiga
}

// Fungsi untuk redirect ke halaman lain
function redirect() {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeDx2wS1jVX0UVZeCyPG3Bd9hpGmN67p-lbJ1K-h5JCATGfdw/viewform?usp=sf_link"; // Sesuaikan dengan URL tujuan
}

// Inisialisasi dengan menampilkan halaman pertama dengan efek transisi
document.addEventListener('DOMContentLoaded', () => {
    showPage('page1');
});
