const input = document.querySelector('.search__input');
const btn = document.querySelector('.search__btn');
console.log('input');
input.addEventListener('keyup', (e) => {
    if (input.value.trim().length===0) {
        console.log(input.value.trim()==='');
    btn.disabled = true;
    btn.style.backgroundColor = 'red';
  }
  else if (Number(input.value)) {
    btn.disabled = true;
    btn.style.backgroundColor = 'red';
  } else if (!Number(input.value)) {
    btn.disabled = false;
    btn.style.backgroundColor = 'green';
  }
});
