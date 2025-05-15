const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");  // Menambah class .visible saat komponen terlihat
      } else {
        if (entry.boundingClientRect.top > window.innerHeight) {  // Hanya remove jika komponen di bawah layar
          entry.target.classList.remove("visible");
        }
      }
    });
  },
  {
    threshold: 0.1,  // Elemen harus berada 10% terlihat di viewport untuk dihitung
  }
);

document.querySelectorAll(".component-animate").forEach((el) => observer.observe(el));
