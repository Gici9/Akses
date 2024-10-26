function submitForm() {
    const name = document.getElementById('nameInput').value.trim();
    const alphabetRegex = /^[a-zA-Z\s]+$/;

    if (!name) {
        showModal("Kamu harus memasukkan nama terlebih dahulu.");
    } else if (!alphabetRegex.test(name)) {
        showModal("Masukkan nama dengan huruf Alfabet!");
    } else {
        // Sembunyikan halaman pertama dengan transisi
        document.getElementById('page1').classList.remove('show');
        setTimeout(() => {
            document.getElementById('page1').style.display = 'none';
            document.getElementById('page2').style.display = 'block';
            document.getElementById('page2').classList.add('show');
        }, 600); // Durasi transisi sama dengan yang ada di CSS

        // Tampilkan nama yang dimasukkan di halaman kedua
        document.getElementById('namaUser').innerText = name;

        // Jalankan hitung mundur
        countdown();
    }
}

function countdown() {
    // Waktu tujuan (pukul 13:55 WIB hari ini)
    const targetTime = new Date();
    targetTime.setHours(13, 55, 0, 0); // Set pukul 13:55 WIB

    const interval = setInterval(() => {
        const now = new Date();
        const options = { timeZone: 'Asia/Jakarta' }; // Gunakan timezone Asia/Jakarta (WIB)
        const jakartaTime = new Date(now.toLocaleString('en-US', options));

        const timeDifference = targetTime - jakartaTime;

        // Jika waktu habis, arahkan ke halaman lain
        if (timeDifference <= 0) {
            clearInterval(interval);
            window.location.href = "https://www.youtube.com";
        } else {
            // Hitung jam, menit, dan detik yang tersisa
            const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
            const seconds = Math.floor((timeDifference / 1000) % 60);

            // Tampilkan hitungan mundur
            document.getElementById('countdownTime').innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} `;
        }
    }, 1000); // Perbarui hitungan mundur setiap detik
}

function showModal(message) {
    const modal = document.getElementById('customAlert');
    document.getElementById('alertMessage').innerText = message;
    modal.style.display = 'flex';  // Tampilkan modal

    // Tutup modal saat tombol "Oke" diklik
    document.getElementById('modalButton').onclick = function() {
        modal.style.display = 'none';
    };
}

// Untuk menampilkan halaman pertama dengan animasi
window.onload = function() {
    document.getElementById('page1').classList.add('show');
};