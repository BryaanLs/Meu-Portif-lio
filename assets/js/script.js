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
}

function desprendeMenu() {
    const menu = document.querySelector('.menu');

    window.addEventListener('scroll', (e) => {
        scrollY === 0 ? menu.classList.remove('desprender') : menu.classList.add('desprender');
    });


}

function desprendeMenuMobile() {

    const menu = document.querySelector('.menu');
    let tamanho = document.body.clientWidth;
    if (tamanho > 1000) {
        desprendeMenu();
    }

    if (tamanho < 800) {
        menu.classList.add('desprender');
    }

}


seeMore();
desprendeMenuMobile();


