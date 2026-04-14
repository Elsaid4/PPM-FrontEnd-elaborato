var dropdown = document.getElementById('my-dropdownmenu');
var dropdownpanel = document.getElementById('my-dropdown-panel');
var trigger = document.getElementById('moreButton');
var closeBtn = document.getElementById('closeDropdown');

function openDropdown() {
    dropdown.classList.add('show');
    dropdown.setAttribute('aria-hidden', 'false');
    // Focus first item for accessibility
    // var firstItem = dropdown.querySelector('.dropdown-item');
    // if (firstItem) {
    //     firstItem.focus();
    // }
     

    // window.addEventListener('wheel', preventDefault, { passive: false });
    // window.addEventListener('touchmove', preventDefault, { passive: false });

    document.getElementById('arrow').style.transform = 'scaleY(-1)';

}

function closeDropdown() {
    dropdown.classList.remove('show');
    dropdown.setAttribute('aria-hidden', 'true');

    // Restore main page scroll
    // window.removeEventListener('wheel', preventDefault);
    // window.removeEventListener('touchmove', preventDefault);

    document.getElementById('arrow').style.transform = 'scaleY(1)';
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