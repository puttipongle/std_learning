function appendImageElem(keyword, index) {
    const imgElem = document.createElement('img');
    imgElem.src = `https://source.unsplash.com/400x225/?${keyword}%sig=${index}`;
    const gallaryElem = document.querySelector('.gallary');
    gallaryElem.appendChild(imgElem);
}

function removePhotos(){
    const gallaryElem =document.querySelector('.gallary');
    gallaryElem.innerHTML = '';
}

function searchPhoto(event) {
    const keyword = event.target.value;

    if (event.key === 'Enter' && keyword) {
        removePhotos();
        for (let i = 0; i < 10; i++) {
            appendImageElem(keyword, i);
        }
    }
}

function run() {
    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keydown', searchPhoto);

}

run();