const form = document.querySelector('#searchForm');
const imgDiv = document.querySelector('#images');
form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = this.elements.query.value
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const frag = document.createDocumentFragment();
    for (let element of response.data) {
        if(element.show.image){
            const img = document.createElement('IMG');
            img.src = element.show.image.medium;
            frag.append(img)
        }
    }
    imgDiv.innerHTML = "";
    imgDiv.append(frag);
});