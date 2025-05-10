const container = document.getElementById("project-container");
const modal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDesc1 = document.getElementById("modal-desc1");
const modalDesc2 = document.getElementById("modal-desc2");
const modalLinks = document.getElementById("modal-links");
const modalLanguage = document.getElementById("language");

// Pagination Config
const PROJECTS_PER_PAGE = 3;
let currentPage = 1;

// Render projects with pagination
function renderProjects() {
  container.innerHTML = "";

  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;

  projects.slice(startIndex, endIndex).forEach((project) => {
    const { id, image, title, description, language } = project;

    const div = document.createElement("div");
    div.className =
      "nes-container is-rounded with-title is-dark project is-centered";
    div.style = "background-color: rgba(0, 0, 0, 0.4)";
    div.onclick = () => showProjectDetail(id);
    div.innerHTML = `
        <p class="title" style="background-color: black">${title}</p>
        <img src="${image}" alt="${title}" />
        <p style="color: rgb(255, 255, 255)">${language}</p>
        <p style="color: rgb(255, 255, 255)">${description}</p>
    `;
    container.appendChild(div);
  });

  updatePagination();
}

// Update pagination controls with Bootstrap styling
function updatePagination() {
  const pagination = document.getElementById("pagination");
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  pagination.innerHTML = "";

  // Previous Button
  const prevLi = document.createElement("li");
  prevLi.className = `page-item ${currentPage === 1 ? "disabled" : ""}`;
  prevLi.innerHTML = `
    <a class="page-link" href="#" aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
    </a>
  `;
  prevLi.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage > 1) changePage(currentPage - 1);
  });
  pagination.appendChild(prevLi);

  // Page Numbers
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  for (let i = startPage; i <= endPage; i++) {
    const li = document.createElement("li");
    li.className = `page-item ${i === currentPage ? "active" : ""}`;
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.addEventListener("click", (e) => {
      e.preventDefault();
      changePage(i);
    });
    pagination.appendChild(li);
  }

  // Next Button
  const nextLi = document.createElement("li");
  nextLi.className = `page-item ${
    currentPage === totalPages ? "disabled" : ""
  }`;
  nextLi.innerHTML = `
    <a class="page-link" href="#" aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
    </a>
  `;
  nextLi.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage < totalPages) changePage(currentPage + 1);
  });
  pagination.appendChild(nextLi);
}

// Change page function
function changePage(page) {
  currentPage = page;
  renderProjects();
}

// Modal functions (unchanged from your original code)
function showProjectDetail(id) {
  const project = projects.find((p) => p.id === id);
  if (!project) return;

  modalTitle.textContent = project.title;
  modalImage.src = project.image;
  modalLanguage.textContent = project.language || "";
  modalDesc1.textContent = project.descriptionDetail || "";
  modalDesc2.textContent = project.descriptionDetail2 || "";

  modalLinks.innerHTML = "";

    if (project.pptLink && project.pptLink.endsWith(".pdf")) {
    const iframe = document.createElement("iframe");
    iframe.src = project.pptLink;
    iframe.width = "100%";
    iframe.height = "500px";
    iframe.style.marginTop = "15px";
    iframe.style.border = "1px solid #ccc";
    modalLinks.appendChild(iframe);
  }

  if (project.githubLink) {
    const github = document.createElement("a");
    github.href = project.githubLink;
    github.target = "_blank";
    github.innerHTML = "💻 View GitHub Repository";
    modalLinks.appendChild(github);
  }

  modal.style.display = "block";
}

modalClose.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// Initialize
renderProjects();
