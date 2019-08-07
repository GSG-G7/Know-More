const search = document.querySelector('.search__input');
const btn = document.querySelector('.search__btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/search', {
    method: 'POST',
    body: JSON.stringify({ name: search.value }),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(res => console.log(res));
});
