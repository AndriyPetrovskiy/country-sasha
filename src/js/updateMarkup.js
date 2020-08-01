import list from'../templates/list.hbs';
import country from'../templates/country.hbs';
const listRef = document.querySelector('.list');

function updateMarkup(dataCountry) {
    console.log(dataCountry);
    if(dataCountry.length === 1) {
        const markup = country(dataCountry);
        listRef.insertAdjacentHTML('beforeend', markup);
    } else if(dataCountry.length > 1 && dataCountry.length < 5) {
        const markup = list(dataCountry);
        listRef.insertAdjacentHTML('beforeend', markup);
        const a = dataCountry.filter(obj => obj.name);
        console.log(...a)
        if(listRef.addEventListener('click', (event) => {
            console.log(event.currentTarget.value)

    })){
        if(event.currentTarget.value === a.name) {
            const markup = country(dataCountry);
            listRef.insertAdjacentHTML('beforeend', markup);
        }
    } else {
        console.log('ERROR')
    }
}

export default updateMarkup;