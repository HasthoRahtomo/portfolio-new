const certificates = [
  { 
    id: 3, 
    image: "./img/certificate/JAYJAY CERTIFICATE.pptx (87).jpg", 
    title: "JayJay - Profession QA Engineer", 
    date: "June 2025" /* [cite: 4] */ 
  },
  { 
    id: 14, 
    image: "./img/certificate/Applications to certificates (71).jpg", 
    title: "JayJay - Profesi QA Engineer (Additional)", 
    date: "June 2025" /* [cite: 18] */ 
  },
  { 
    id: 6, 
    image: "./img/certificate/Hastho Rahtomo Penyegaran Materi BNSP.jpg", 
    title: "CCIT FTUI - Penguatan Kompetensi Pemrograman Java dan C#", 
    date: "July 2024" /* [cite: 7] */ 
  },
  { 
    id: 1, 
    image: "./img/certificate/sertifikat_course_web/0001.jpg", 
    title: "Dicoding - Belajar Dasar Pemrograman Web", 
    date: "November 2023" /* [cite: 1] */ 
  },
  { 
    id: 2, 
    image: "./img/certificate/sertifikat_course_solid/0001.jpg", 
    title: "Dicoding - Belajar Prinsip Pemrograman SOLID", 
    date: "November 2023" /* [cite: 3] */ 
  },
  { 
    id: 4, 
    image: "./img/certificate/sertifikat_course_java/0001.jpg", 
    title: "Dicoding - Memulai Pemrograman Dengan Java", 
    date: "November 2023" /* [cite: 5] */ 
  },
  { 
    id: 5, 
    image: "./img/certificate/sertifikatksninformatika.jpg", 
    title: "KSN Informatika Tingkat Provinsi DKI Jakarta", 
    date: "November 2021" /* [cite: 6] */ 
  },
  { 
    id: 7, 
    image: "./img/certificate/8.jpg", 
    title: "DayaLima - Berkarier Sebagai Tenaga Kesehatan di Timur Tengah", 
    date: "October 2024" /* [cite: 8] */ 
  },
  { 
    id: 8, 
    image: "./img/certificate/certificate.jpg", 
    title: "Codepolitan - Belajar GIT untuk Pemula", 
    date: "March 2024" /* [cite: 9] */ 
  },
  { 
    id: 9, 
    image: "./img/certificate/Sertifikat Ngobar 3.jpg", 
    title: "CCIT FTUI - Exploring Game Dev with C#", 
    date: "May 2024" /* [cite: 11] */ 
  },
  { 
    id: 10, 
    image: "./img/certificate/Sertifikat Hastho Rahtomo.jpg", 
    title: "CCIT FTUI - Seminar Series 2024 #7", 
    date: "May 2024" /* [cite: 12] */ 
  },
  { 
    id: 11, 
    image: "./img/certificate/Sertifikat Staff Komandro 24.jpg", 
    title: "Staff Pendidikan Komandro 2022/2023", 
    date: "October 2023" /* [cite: 13] */ 
  },
  { 
    id: 13, 
    image: "./img/certificate/Sertifikat Laravel Eps. 01.jpg", 
    title: "Pijar Camp - Laravel", 
    date: "March 2024" /* [cite: 17] */ 
  },
  { 
    id: 12, 
    image: "./img/certificate/Sertifikat Kelas Gratis PHP.02.jpg", 
    title: "Pijar Camp - PHP", 
    date: "March 2024" /* [cite: 16] */ 
  },
  { 
    id: 15, 
    image: "./img/certificate/Sertifikat Peserta - Kuliah Umum 8 Desember 2023-92.jpg", 
    title: "CCIT FTUI - Data Analytic Programming", 
    date: "December 2023" /* [cite: 19] */ 
  },
  { 
    id: 16, 
    image: "./img/certificate/Sertifikat Apresiasi Komandro (Hastho Rahtomo).jpg", 
    title: "Staff Divisi Pendidikan Komandro 2023/2024", 
    date: "March 2024" /* [cite: 20] */ 
  },
  { 
    id: 17, 
    image: "./img/certificate/Sertifikat Trilogi Hastho Rahtomo.jpg", 
    title: "Magang Riset Universitas Trilogi", 
    date: "September 2024" /* [cite: 21] */ 
  },
  { 
    id: 18, 
    image: "./img/certificate/Hastho Rahtomo (2).jpg", 
    title: "REQ comm - Freelance Outlook 2024", 
    date: "2024" /* [cite: 22] */ 
  },
  { 
    id: 19, 
    image: "./img/certificate/Sertifikat Hastho Rahtomo IT IOT.jpg", 
    title: "CCIT FTUI - IT & IoT Implementation", 
    date: "March 2024" /* [cite: 23] */ 
  },
  { 
    id: 20, 
    image: "./img/certificate/Hastho Rahtomo Comfis Koman.jpg", 
    title: "Company Visit Komandro CCIT FTUI (MNC Group)", 
    date: "September 2023" /* [cite: 24] */ 
  },
  { 
    id: 21, 
    image: "./img/certificate/SERTIFIKAT PESERTA KULIAH UMUM - 18012024-8.jpg", 
    title: "CCIT FTUI - Socio-Technopreneurship", 
    date: "January 2024" /* [cite: 25] */ 
  },
  { 
    id: 22, 
    image: "./img/certificate/Certificate_Of_Completion-BelajarProgrammingHTMLDariNol-65f98d6a212d56283df02a86.jpg", 
    title: "Zilllearn - Belajar Programming HTML Dari Nol", 
    date: "March 2024" /* [cite: 26] */ 
  },
  { 
    id: 23, 
    image: "./img/certificate/Sertifikat Kulum 30052023-7.jpg", 
    title: "CCIT FTUI - Machine Learning/Deep Learning", 
    date: "May 2023" /* [cite: 27] */ 
  },
  { 
    id: 24, 
    image: "./img/certificate/HASTHO RAHTOMO.jpg", 
    title: "Seeds Finance - Investor Pemula Siap Cuan", 
    date: "October 2024" /* [cite: 28] */ 
  },
  { 
    id: 25, 
    image: "./img/certificate/Penerima Sertifikat Kulum. - 22062023-58.jpg", 
    title: "CCIT FTUI - Identity Hacking", 
    date: "June 2023" /* [cite: 29] */ 
  },
  { 
    id: 26, 
    image: "./img/certificate/Rev01 - Penerima Sertifikat 05072023-86.jpg", 
    title: "CCIT FTUI - Daily Life as A Programmer", 
    date: "July 2023" /* [cite: 30] */ 
  },
  { 
    id: 27, 
    image: "./img/certificate/Certificate_Of_Completion-JagoPublicSpeakingDariNol-65fa08c4212d56283df02cdd.jpg", 
    title: "Zilllearn - Jago Public Speaking Dari Nol", 
    date: "March 2024" /* [cite: 31] */ 
  },
  { 
    id: 28, 
    image: "./img/certificate/sertifikatbeginerlevelcourse.jpg", 
    title: "Timedoor - Programming Beginner Level", 
    date: "June 2021" /* [cite: 33] */ 
  },
  { 
    id: 29, 
    image: "./img/certificate/Sertifikat Code Generation and Optimization - Wave 3.jpg", 
    title: "Hacktiv8 - Code Generations and Optimization", 
    date: "July 2025" /* [cite: 34] */ 
  },
  { 
    id: 30, 
    image: "./img/certificate/Certificate_Of_Completion-1JamHTML-65fa0632212d56283df02cc5.jpg", 
    title: "Zilllearn - 1 Jam HTML", 
    date: "March 2024" /* [cite: 35] */ 
  },
  { 
    id: 31, 
    image: "./img/certificate/sertifikatintermediatelevelcourse.jpg", 
    title: "Timedoor - Game Development Intermediate", 
    date: "December 2021" /* [cite: 36] */ 
  },
  { 
    id: 32, 
    image: "./img/certificate/Certificate_Of_Completion-PublicSpeakingforBeginners-65f98c69212d56283df02a6a.jpg", 
    title: "Zilllearn - Public Speaking for Beginners", 
    date: "March 2024" /* [cite: 37] */ 
  }
];

const certContainer = document.getElementById("certificate-container");
const certPagination = document.getElementById("cert-pagination"); // ID baru untuk pagination sertifikat

// Pagination Config
const CERTS_PER_PAGE = 3;
let currentCertPage = 1;

// Render certificates with pagination
function renderCertificates() {
  certContainer.innerHTML = "";

  const startIndex = (currentCertPage - 1) * CERTS_PER_PAGE;
  const endIndex = startIndex + CERTS_PER_PAGE;

  certificates.slice(startIndex, endIndex).forEach((item) => {
    const div = document.createElement("div");
    div.className = "nes-container is-rounded with-title is-dark is-centered mt-2";
    div.style = "width: 320px; background-color: rgba(0, 0, 0, 0.4);";
    
    div.innerHTML = `
      <div style="height: 350px">    
        <div class="img-box" style="padding-top: 5px; margin-bottom: 10px">
            <img src="${item.image}" alt="${item.title}" width="250" style="object-fit: contain; max-height: 200px;">
        </div>
        <p style="color: rgb(255, 255, 255); font-size: 0.9em;">${item.title}</p>
      </div>
      <div>
        <span class="date" style="color: rgb(255, 255, 255)">${item.date}</span>
      </div>
    `;
    
    certContainer.appendChild(div);
  });

  updateCertPagination();
}

// Update pagination controls with Bootstrap styling
function updateCertPagination() {
  if (!certPagination) return; // Mencegah error jika elemen belum ada
  
  const totalPages = Math.ceil(certificates.length / CERTS_PER_PAGE);
  certPagination.innerHTML = "";

  // Jika total sertifikat <= 6, tidak perlu munculkan tombol pagination
  if (totalPages <= 1) return;

  // Previous Button
  const prevLi = document.createElement("li");
  prevLi.className = `page-item ${currentCertPage === 1 ? "disabled" : ""}`;
  prevLi.innerHTML = `
    <a class="page-link" href="#" aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
    </a>
  `;
  prevLi.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentCertPage > 1) changeCertPage(currentCertPage - 1);
  });
  certPagination.appendChild(prevLi);

  // Page Numbers
  const startPage = Math.max(1, currentCertPage - 2);
  const endPage = Math.min(totalPages, currentCertPage + 2);

  for (let i = startPage; i <= endPage; i++) {
    const li = document.createElement("li");
    li.className = `page-item ${i === currentCertPage ? "active" : ""}`;
    li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
    li.addEventListener("click", (e) => {
      e.preventDefault();
      changeCertPage(i);
    });
    certPagination.appendChild(li);
  }

  // Next Button
  const nextLi = document.createElement("li");
  nextLi.className = `page-item ${currentCertPage === totalPages ? "disabled" : ""}`;
  nextLi.innerHTML = `
    <a class="page-link" href="#" aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
    </a>
  `;
  nextLi.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentCertPage < totalPages) changeCertPage(currentCertPage + 1);
  });
  certPagination.appendChild(nextLi);
}

// Change page function
function changeCertPage(page) {
  currentCertPage = page;
  renderCertificates();
}

// Initialize
renderCertificates();