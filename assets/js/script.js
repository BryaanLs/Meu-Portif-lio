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
    window.addEventListener('scroll', () => {
        if (scrollY > 0) {
            menu.classList.add('desprender');
            menu.classList.remove('prender');

        }
        if (scrollY === 0) {
            menu.classList.add('prender');
            menu.classList.remove('desprender');
        }
    });
};

function desprendeMenuMobile() {
    const menuMobile = document.querySelector('.close-menu-label');
    const menu = document.querySelector('.menu');
    let click = 1;
    menuMobile.addEventListener('click', () => {
        click++;
        if (click % 2 === 0) {
            menu.classList.remove('prender');
            menu.classList.add('desprender');

        } else if (click % 2 === 1) {
            menu.classList.add('prender');
            menu.classList.remove('desprender');
            menu.style.display = 'flex';
        }
    });
};

function verificaJanela() {
    window.addEventListener('resize', (e) => {
        let janela = e.target.innerWidth;
        if (janela <= 800 || janela >= 801) {
            setTimeout(() => {
                window.location.reload()
            }, 0.1);
        }
    });
};

function defineMenu() {
    verificaJanela();
    if (window.innerWidth <= 800) {
        desprendeMenuMobile();
    }
    if (window.innerWidth > 800) {
        desprendeMenu();
    }
};


seeMore();
defineMenu();


