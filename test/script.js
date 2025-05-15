const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      const bounding = target.getBoundingClientRect();

      if (entry.isIntersecting) {
        target.classList.add("visible");
      } else {
        const isBelowViewport = bounding.top > window.innerHeight;
        if (isBelowViewport) {
          target.classList.remove("visible");
        }
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll(".component").forEach((el) => observer.observe(el));
