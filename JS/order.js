
  document.querySelectorAll('.view-more-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const grid = btn.previousElementSibling;
      grid.classList.remove('limited');
      btn.style.display = 'none';
    });
  });

