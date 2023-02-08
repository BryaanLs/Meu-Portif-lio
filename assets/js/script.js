function seeMore() {
    const seeMoreBtn = document.querySelector('#seeMore');
    const divContent = document.querySelector('.project-container');

    let click = 1;

    seeMoreBtn.addEventListener('click', () => {
        if (click % 2 === 0) {
            divContent.style.display = 'none';
            seeMoreBtn.innerHTML = 'Ver mais';

        } else {
            divContent.style.display = 'grid';
            seeMoreBtn.innerHTML = 'Ver menos';
        }

        click++;

    });
}

function desprendeMenu() {
    const menu = document.querySelector('.menu');

    window.addEventListener('scroll', (e) => {

        scrollY === 0 ? menu.classList.remove('desprender') : menu.classList.add('desprender');

        // menu.style.transition = 'all 500ms ease-in-out' : '';

    });
}



seeMore();
desprendeMenu();


