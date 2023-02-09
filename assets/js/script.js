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
        // console.log('Mobile' + window.innerWidth);
    }
    window.addEventListener('scroll', (e) => {
        if (scrollY > 0 && window.innerWidth > 800) {
            menu.classList.add('desprender');
            menu.classList.remove('prender');
            // console.log('Desktop desprender' + window.innerWidth);

        }
        if (scrollY === 0) {
            menu.classList.add('prender');
            menu.classList.remove('desprender');
            // console.log('Desktop prender' + window.innerWidth);

        }
    });
};

function removeClasse() {
    const menu = document.querySelector('.menu');
    menu.classList.remove('prender');
    menu.classList.remove('desprender');
}

function verificaClique(menu) {
    const menuMobile = document.querySelector('.close-menu-label');
    let click = 0;
    menuMobile.addEventListener('click', () => {
        click++;
        if (click % 2 === 1) {
            menu.classList.remove('prender');
            menu.classList.add('desprender');
        }
        if (click % 2 === 0) {
            menu.style.display = 'block'
            menu.classList.remove('desprender');
            menu.classList.add('prender');
        }
    })


}

seeMore();
desprendeMenu();




