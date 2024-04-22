const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClaases();
    panel.classList.add('active');
  });
});

function removeActiveClaases() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
