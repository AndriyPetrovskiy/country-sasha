import './styles.css';
import debounce from 'lodash.debounce';
import country from './templates/country.hbs'
import getDb from './js/get-db.js';
import updateMarkup from './js/updateMarkup.js';


// const formRef = document.querySelector('form');
const inputRef = document.querySelector('input');
const listRef = document.querySelector('.list');


// listRef.addEventListener('click', (event) => {
//     console.dir(event.target)
    
//     listRef.innerHTML = '';
//     getDb(searchCountry).then(updateMarkup);
// })

inputRef.addEventListener('input', debounce(() => {
    const searchCountry = inputRef.value;
    listRef.innerHTML = '';

    getDb(searchCountry).then(updateMarkup);
}, 500))





