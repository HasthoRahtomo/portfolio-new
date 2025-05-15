  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('[data-bs-toggle="dropdown"]');
    const menu = dropdown.querySelector('.dropdown-menu');

    const bsDropdown = bootstrap.Dropdown.getOrCreateInstance(toggle);

    dropdown.addEventListener('hide.bs.dropdown', function (e) {
      // Cegah Bootstrap menyembunyikan dropdown langsung
      e.preventDefault();

      // Tambahkan class animasi keluar
      menu.classList.remove('show');
      menu.classList.add('animate-out');

      // Setelah animasi selesai, baru hapus class "show" dan "animate-out"
      setTimeout(() => {
        menu.classList.remove('animate-out');
        dropdown.classList.remove('show');
      }, 300); // durasi harus sama dengan CSS transition
    });

    dropdown.addEventListener('show.bs.dropdown', function () {
      // Saat dibuka, pastikan class "animate-out" dihapus agar tidak mengganggu animasi masuk
      menu.classList.remove('animate-out');
    });
  });