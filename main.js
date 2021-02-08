let header = document.getElementsByClassName('accordion-item-header');

for (i = 0; i < header.length; i++) {
  header[i].addEventListener('click', function () {
    let panel = this.nextElementSibling;
    if (!this.classList.contains('active')) {
      for (j = 0; j < header.length; j++) {
        header[j].classList.remove('active');
        header[j].nextElementSibling.style.display = 'none';
      }
    }

    this.classList.toggle('active');

    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
