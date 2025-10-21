
document.addEventListener('DOMContentLoaded', function () {
  
  document.querySelectorAll('.more').forEach(function (el) {
    el.style.display = 'none';
  });

  
  document.querySelectorAll('.readmore').forEach(function (button) {
    button.addEventListener('click', function () {
      var container = button.closest('.zoom');
      if (!container) return;

      var dots = container.querySelector('.dots');
      var more = container.querySelector('.more');

      if (more && more.style.display !== 'inline') {
        if (dots) dots.style.display = 'none';
        more.style.display = 'inline';
        button.textContent = 'Läs mindre';
        container.classList.add('expanded');
      } else {
        if (dots) dots.style.display = 'inline';
        if (more) more.style.display = 'none';
        button.textContent = 'Läs Mer';
        container.classList.remove('expanded');
      }
    });
  });
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.style.cursor = 'pointer';
  });
});
