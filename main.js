document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Tambahkan class 'visible' saat elemen masuk viewport
            }
        });
    }, {
        threshold: 0.1 // Sesuaikan threshold sesuai kebutuhan
    });

    elements.forEach(element => {
        observer.observe(element); // Observasi setiap elemen dengan class 'fade-in'
    });
});