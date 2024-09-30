document.addEventListener('DOMContentLoaded', function() {
    const marqueeText = document.querySelector('.marquee');
    
    marqueeText.addEventListener('animationend', function() {
        marqueeText.style.display = 'none'; // Teks berjalan menghilang setelah selesai
    });

    // Menambahkan fungsionalitas untuk tombol "Akhiri Presentasi"
    const endButton = document.getElementById('end-presentation');
    endButton.addEventListener('click', function() {
        // Menghilangkan konten presentasi
        document.querySelector('.container').style.display = 'none'; // Menyembunyikan konten galeri
        marqueeText.style.display = 'none'; // Menyembunyikan teks berjalan
        endButton.style.display = 'none'; // Menyembunyikan tombol itu sendiri
        alert('Presentasi telah diakhiri. Terima kasih!'); // Menampilkan pesan
    });
});
