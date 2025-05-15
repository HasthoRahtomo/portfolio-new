  let lastScrollY = window.scrollY;
  let scrollDirection = 'down';

  // Perhatikan arah scroll setiap saat
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
    lastScrollY = currentScrollY;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const rect = entry.boundingClientRect;

      if (entry.isIntersecting) {
        // Hanya animasi jika scroll ke bawah dan elemen masuk dari bawah layar
        if (scrollDirection === 'down' && rect.top > 0) {
          entry.target.classList.add('visible');
        }
      } else {
        // Reset agar elemen bisa animasi ulang jika scroll ke bawah lagi
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.component').forEach(el => observer.observe(el));