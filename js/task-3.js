const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', e => {
  const userName = e.currentTarget.value.trim();
  outputEl.textContent = userName ? userName : 'Anonymous';
});
