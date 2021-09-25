const navHome = document.querySelector('#nav-home');
const navProjects = document.querySelector('#nav-projects');
const navAbout = document.querySelector('#nav-about');
const vHome = document.querySelector('main#Home');
const vProjects = document.querySelector('main#Projects');
const vAbout = document.querySelector('main#About');

$(document).ready(function () {
    
    // navHome.addEventListener('click', function () {
        //     this.classList.add('active');
        // })
        
        navHome.onclick = activeHome;
        navProjects.onclick = activeProjects;
        navAbout.onclick = activeAbout;
});

function resetActive() {
    navHome.classList.remove('active');
    navProjects.classList.remove('active');
    navAbout.classList.remove('active');
}
    
function activeNav() {
    resetActive();
    this.classList.add('active');
}

function activeHome() {
    resetActive();
    vHome.style.display = 'block';
    vAbout.style.display = 'none';
    vProjects.style.display = 'none';
}

function activeProjects() {
    resetActive();
    vHome.style.display = 'none';
    vAbout.style.display = 'none';
    vProjects.style.display = 'block';
}

function activeAbout() {
    resetActive();
    vHome.style.display = 'none';
    vAbout.style.display = 'block';
    vProjects.style.display = 'none';
}