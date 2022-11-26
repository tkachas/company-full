let bar = document.querySelector('.navbar');

bar.style.width = window.innerWidth + 'px';

if (window.screen.width >= 1200) {
    window.addEventListener('resize', changeSize);
    function changeSize() {
        widthRes = window.innerWidth;
        bar.style.width = widthRes + 'px';
    }
}