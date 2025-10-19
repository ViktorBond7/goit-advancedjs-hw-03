// // Описаний у документації
// import iziToast from 'izitoast';
// // Додатковий імпорт стилів
// import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay';
import { createCard } from './js/render-imgs';

const refs = {
  listImg: document.querySelector('.list-img'),
  formSearch: document.querySelector('.form'),
};

const onFormSearchSubmit = e => {
  e.preventDefault();
  const inputValue = e.target.elements.data.value;
  fetchImages(inputValue)
    .then(res => {
      const card = res.hits.map(card => createCard(card)).join('');

      refs.listImg.innerHTML = card;
    })
    .catch(err => console.log(err.status));
};

refs.formSearch.addEventListener('submit', onFormSearchSubmit);
