let bgImg = document.querySelector('.bg-image-container');
let pos = window.pageYOffset;
let move = 80;

window.addEventListener("scroll", () => {
    if (window.pageYOffset % 5 == 0 && window.pageYOffset >= pos) {
        if (move < 98) {
            move += 3;
        }
        pos = window.pageYOffset;
    } else if (window.pageYOffset % 10 == 0 && window.pageYOffset <= pos) {
        if (move > 80) {
            move -= 3;
        } else {
            move = 80;
        }
        pos = window.pageYOffset;
    }
    bgImg.style.backgroundPositionY = move + '%';
    console.log('1 - ' + move);
});