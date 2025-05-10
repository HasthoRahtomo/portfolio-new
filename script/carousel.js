// carousel.js
document.addEventListener("DOMContentLoaded", () => {
  const raw = document.getElementById("slideData").textContent;
  const data = JSON.parse(raw);

  const indicators = document.getElementById("carousel-indicators");
  const inner = document.getElementById("carousel-inner");

  data.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("data-bs-target", "#carouselExampleCaptions");
    btn.setAttribute("data-bs-slide-to", index);
    btn.setAttribute("aria-label", `Slide ${index + 1}`);
    if (index === 0) {
      btn.classList.add("active");
      btn.setAttribute("aria-current", "true");
    }
    indicators.appendChild(btn);

    const slide = document.createElement("div");
    slide.className = "carousel-item" + (index === 0 ? " active" : "");
    slide.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; height: 400px;">
          <img src="${item.image}" alt="${item.title}" style="max-height: 100%; max-width: 100%; height: auto; width: auto; display: block; margin: 0 auto;">
        </div>
        <div class="carousel-caption d-none d-md-block sliderDesc">
            <div class="DescBackground">
                <span class="nes-text is-primary">${item.title}</span> <br />
                <span class="nes-text">${item.description}</span>
            </div>
        </div>
      `;
    inner.appendChild(slide);
  });
});
