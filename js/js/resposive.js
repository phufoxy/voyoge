function myHeader() {
    var x = document.getElementById('menu-header');
    if (x.className === 'menu') {
        x.className += ' responsive';
    } else {
        x.className = 'menu'
    }
}

window.onscroll = function () {
    myScrolltop();
}

var header = document.getElementById('menu-header');
var sticky = header.offsetTop;

function myScrolltop() {
    if (window.pageYOffset > sticky + 500) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}
// slide show
var slideIndex = 1;
ShowSlide(ShowSlide);
function nextSlide(n) {
    ShowSlide(slideIndex += n);
}
function ShowSlide(n) {
    var i;
    var x = document.getElementsByClassName('slider-items');
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = 'block';
}

function openTab(evt, tabform) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('btn-tab-link');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabform).style.display = 'block';
    evt.currentTarget.className += ' active';
}
document.getElementById("defaultOpen").click();
