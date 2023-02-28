function seeMore() {
    const seeMoreBtn = document.querySelector('#seeMore');
    const divContent = document.querySelector('.project-container');

    let click = 1;

    seeMoreBtn.addEventListener('click', () => {
        if (click % 2 === 0) {
            divContent.classList.add('removeSeeMore');
            setTimeout(() => {
                divContent.style.display = 'none';
            }, 400);

            seeMoreBtn.innerHTML = 'Ver mais';


        } else {
            divContent.classList.remove('removeSeeMore');
            divContent.style.display = 'grid';
            seeMoreBtn.innerHTML = 'Ver menos';
        }

        click++;

    });
};

function desprendeMenu() {
    const menu = document.querySelector('.menu');
    if (window.innerWidth <= 800) {
        verificaClique(menu);
    }
    window.addEventListener('scroll', () => {

        if (scrollY > 0 && window.innerWidth > 800) {
            menu.classList.add('desprender');
            menu.classList.remove('prender');
        }
        if (scrollY === 0 && window.innerWidth > 800) {
            menu.classList.add('prender');
            menu.classList.remove('desprender');
        }
    });
};

function verificaClique(menu) {
    const menuContent = document.querySelector('.menu-content');
    const menuMobile = document.querySelector('.close-menu-label');
    let click = 0;
    menuMobile.addEventListener('click', () => {
        click++;
        if (click % 2 === 1) {

            menu.classList.remove('prender');
            menuContent.classList.remove('prenderText');
            menu.classList.add('desprender');
            menuContent.classList.add('desprenderText');
        }
        if (click % 2 === 0) {
            menu.style.display = 'block';
            menu.classList.remove('desprender');
            menuContent.classList.remove('desprenderText');
            menu.classList.add('prender');
            menuContent.classList.add('prenderText');

        }
    })


}

seeMore();
desprendeMenu();




