let option = document.querySelectorAll('.nav-option');
let moveDown = document.querySelectorAll('.move-down');
let companyText = document.querySelector('.company-options');
let teamText = document.querySelector('.team-options');
let servicesText = document.querySelector('.services-options');
let contactText = document.querySelector('.contact-options');
let navText = document.querySelectorAll('#nav-text');

let comLi = document.querySelectorAll('#company');
let teamLi = document.querySelectorAll('#team');
let serLi = document.querySelectorAll('#services');
let conLi = document.querySelectorAll('#contact');

let li_bars = [comLi, teamLi, serLi, conLi];

// for (let i=0; i<li_bars.length;i++) {
//     for (let j=0; j<li_bars[i].length; j++) {
//         li_bars[i][j].style.height = '50' + 'px';
//         // li_bars[i][j].style.height = (100 / li_bars[i].length) + '%';
//     }
// }





// for (let i = 0; i < option.length; i++) {
//     option[i].addEventListener('mouseover', onTrue);
//     function onTrue() {
        
//     }

// }

for (let i = 0; i < moveDown.length; i++) {
    moveDown[i].style.left = (25*i) + '%';
}



for (let i = 0; i < option.length; i++) {
    option[i].addEventListener('mouseover', optClick);
    
    function optClick() {
        for (let j=0; j<li_bars[i].length; j++) {
            li_bars[i][j].style.height = '50' + 'px';
        // li_bars[i][j].style.height = (100 / li_bars[i].length) + '%';
        }
        moveDown[i].addEventListener('mouseover', () => {
            option[i].classList.add('clicked');
            moveDown[i].style.height = (li_bars[i].length * 50) + 'px';
            // moveDown[i].style.height = 300 + 'px';
            navText[i].style.opacity = 1;
            for (let j=0; j<li_bars[i].length; j++) {
                li_bars[i][j].style.height = '50' + 'px';
            // li_bars[i][j].style.height = (100 / li_bars[i].length) + '%';
            }
        });

        option[i].classList.add('clicked');

        moveDown[i].style.height = (li_bars[i].length * 50) + 'px';
        // moveDown[i].style.height = 300 + 'px';

        navText[i].style.opacity = 1;
    }
    option[i].addEventListener('mouseout', optLeave);

    function optLeave() {
        for (let j=0; j<li_bars[i].length; j++) {
            li_bars[i][j].style.height = '0' + 'px';
        // li_bars[i][j].style.height = (100 / li_bars[i].length) + '%';
        }
        moveDown[i].addEventListener('mouseout', () => {
            moveDown[i].style.height = 0 + 'px';
            navText[i].style.opacity = 0;
            option[i].classList.remove('clicked');
            for (let j=0; j<li_bars[i].length; j++) {
                li_bars[i][j].style.height = '0' + 'px';
            // li_bars[i][j].style.height = (100 / li_bars[i].length) + '%';
            }
        });

        option[i].classList.remove('clicked');
        moveDown[i].style.height = 0 + 'px';
        navText[i].style.opacity = 0;
    }
}

