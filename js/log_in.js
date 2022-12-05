// Some weird issues on mobile & safari - damn .. any ideas?
const span = document.querySelector('span');
const button = document.querySelector('button');

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', e => {
      button.classList.add('processing');
      e.preventDefault();
  });
});

document.querySelector('.restart').addEventListener('click', e => {
  document.querySelectorAll('.button').forEach(button => {
      button.classList.remove('processing');
  });
  e.preventDefault();

});

// display none span on click



button.addEventListener('click', () => {
  span.style.display = 'none';
});