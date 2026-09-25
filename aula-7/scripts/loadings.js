const loadNavbar = () => {
    fetch('./navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-mainpage').innerHTML = data
        });
}

const loadCarousel = () => {
    fetch('./carousel.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('carousel-mainpage').innerHTML = data
        });
}

const loadMinicards = () => {
    fetch('./minicards.html')
        .then(response => response.text())
        .then(data => {
            let allMinicards = '';
            for(let i = 0; i < 5; i++) {
                allMinicards += data;
            }
            document.getElementById('minicards-mainpage').innerHTML = allMinicards
        });
}

const loadBigcards = () => {
    fetch('./bigcards.html')
        .then(response => response.text())
        .then(data => {
            let allBigcards = '';
            for(let i = 0; i < 6; i++) {
                allBigcards += data;
            }
            document.getElementById('bigcards-mainpage').innerHTML = allBigcards
        });
}

document.addEventListener('DOMContentLoaded', loadNavbar);
document.addEventListener('DOMContentLoaded', loadCarousel);
document.addEventListener('DOMContentLoaded', loadMinicards);
document.addEventListener('DOMContentLoaded', loadBigcards);