let dropdown = document.getElementById('my-dropdownmenu');
let dropdownpanel = document.getElementById('my-dropdown-panel');
let trigger = document.getElementById('moreButton');
let closeBtn = document.getElementById('closeDropdown');
let myoffcanvas = document.getElementById('my-offcanvas');
let offcanvas = document.getElementById('navbarNav');

let moreNewsBtn = document.getElementById('more-news');
let moreNewsUl = document.getElementById('more-news-ul');
let btnMoreNewsPlus = document.getElementById('btn-more-news-plus');
let btnMoreNewsMinus = document.getElementById('btn-more-news-minus');

let moreSportBtn = document.getElementById('more-sport');
let moreSportUl = document.getElementById('more-sport-ul');
let btnMoreSportPlus = document.getElementById('btn-more-sport-plus');
let btnMoreSportMinus = document.getElementById('btn-more-sport-minus');

let moreTvBtn = document.getElementById('more-tv');
let moreTvUl = document.getElementById('more-tv-ul');
let btnMoreTvPlus = document.getElementById('btn-more-tv-plus');
let btnMoreTvMinus = document.getElementById('btn-more-tv-minus');

let moreGamesBtn = document.getElementById('more-games');
let moreGamesUl = document.getElementById('more-games-ul');
let btnMoreGamesPlus = document.getElementById('btn-more-games-plus');
let btnMoreGamesMinus = document.getElementById('btn-more-games-minus');

let moreLifeBtn = document.getElementById('more-life');
let moreLifeUl = document.getElementById('more-life-ul');
let btnMoreLifePlus = document.getElementById('btn-more-life-plus');
let btnMoreLifeMinus = document.getElementById('btn-more-life-minus');

function openDropdown() {
    dropdown.classList.add('show');
    dropdown.setAttribute('aria-hidden', 'false');
    document.getElementById('arrow').style.transform = 'scaleY(-1)';
    trigger.classList.add('is-open');
}

function closeDropdown() {
    dropdown.classList.remove('show');
    dropdown.setAttribute('aria-hidden', 'true');
    document.getElementById('arrow').style.transform = 'scaleY(1)';
    trigger.classList.remove('is-open');
}

trigger.addEventListener('click', function (event) {
    event.preventDefault();
    if (dropdown.classList.contains('show')) {
        closeDropdown();
    } else {
        openDropdown();
    }
});

closeBtn.addEventListener('click', closeDropdown);


function preventDefault(e) {
  e.preventDefault();
}



// Close clicking outside panel (backdrop)
dropdown.addEventListener('click', function (event) {
    if (event.target.classList.contains('my-dropdown-backdrop')) {
        closeDropdown();
    }
});

// Close with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && dropdown.classList.contains('show')) {
        closeDropdown();
    }
});

// Gestione offcanvas per nascondere sottomenu e parte bianca

offcanvas.addEventListener('show.bs.collapse', function () {
    document.getElementById('sotto-menu').style.display = 'none';
    document.getElementById('white-space').style.display = 'none';
    myoffcanvas.classList.add('bg-white');
    myoffcanvas.classList.remove('d-none');
});
offcanvas.addEventListener('hide.bs.collapse', function () {
    document.getElementById('sotto-menu').style.display = 'block';
    document.getElementById('white-space').style.display = 'block';
    myoffcanvas.classList.remove('bg-white');
});

document.addEventListener('DOMContentLoaded', function () {
    myoffcanvas.classList.add('d-none');
});

// Gestione del menu "more news" (da implementare meglio)
moreNewsBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (moreNewsUl.style.display === 'block') {
        moreNewsUl.style.display = 'none';
        btnMoreNewsPlus.style.display = 'block';
        btnMoreNewsMinus.style.display = 'none';
    } else {
        moreNewsUl.style.display = 'block';
        btnMoreNewsPlus.style.display = 'none';
        btnMoreNewsMinus.style.display = 'block';
    }
});

// Gestione del menu "more sport"
moreSportBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (moreSportUl.style.display === 'block') {
        moreSportUl.style.display = 'none';
        btnMoreSportPlus.style.display = 'block';
        btnMoreSportMinus.style.display = 'none';
    } else {
        moreSportUl.style.display = 'block';
        btnMoreSportPlus.style.display = 'none';
        btnMoreSportMinus.style.display = 'block';
    }
});

// Gestione del menu "more tv"
moreTvBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (moreTvUl.style.display === 'block') {
        moreTvUl.style.display = 'none';
        btnMoreTvPlus.style.display = 'block';
        btnMoreTvMinus.style.display = 'none';
    } else {
        moreTvUl.style.display = 'block';
        btnMoreTvPlus.style.display = 'none';
        btnMoreTvMinus.style.display = 'block';
    }
});

// Gestione del menu "more games"
moreGamesBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (moreGamesUl.style.display === 'block') {
        moreGamesUl.style.display = 'none';
        btnMoreGamesPlus.style.display = 'block';
        btnMoreGamesMinus.style.display = 'none';
    } else {
        moreGamesUl.style.display = 'block';
        btnMoreGamesPlus.style.display = 'none';
        btnMoreGamesMinus.style.display = 'block';
    }
});

// Gestione del menu "more life"
moreLifeBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (moreLifeUl.style.display === 'block') {
        moreLifeUl.style.display = 'none';
        btnMoreLifePlus.style.display = 'block';
        btnMoreLifeMinus.style.display = 'none';
    } else {
        moreLifeUl.style.display = 'block';
        btnMoreLifePlus.style.display = 'none';
        btnMoreLifeMinus.style.display = 'block';
    }
});