let bar = document.querySelector('.navbar');
let opt = document.querySelectorAll('.nav-option');
// let comLi = document.querySelectorAll('#company');
// let teamLi = document.querySelectorAll('#team');
// let serLi = document.querySelectorAll('#services');
// let conLi = document.querySelectorAll('#contact');

// let li_bars = [comLi, teamLi, serLi, conLi];

// for (let i=0; i<li_bars.length;i++) {
//     for (let j=0; j<li_bars[i].length; j++) {
//         li_bars[i][j].style.height = '50' + 'px';
//         // li_bars[i][j].style.height = (100 / li_bars[i].length) + '%';
//     }
// }


bar.style.width = window.innerWidth + 'px';

if (window.screen.width >= 1200) {
    // opt.style.width = bar.style.width / 4 + '%';
    
    window.addEventListener('resize', changeSize);
    function changeSize() {
        widthRes = window.innerWidth;
        bar.style.width = widthRes + 'px';
    }
}