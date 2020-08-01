function getDb(searchCountry){
    
    const url = `https://restcountries.eu/rest/v2/name/${searchCountry}`;

    return fetch(url)
            .then(res => res.json())
            .catch(error => console.log(error));
}

export default getDb;