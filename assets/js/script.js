const onInit = () => {

}

const onScroll = () => {
    let wrapper = document.querySelector('.wrapper');
    let infocontainer = document.querySelector('.info-container');
    let header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (pageYOffset > header.clientHeight) {
            infocontainer.classList.add('show');
            infocontainer.hidden = false;
        } else {
            infocontainer.classList.remove('show');
            infocontainer.hidden = true;
        }
    });
}

window.onload = () => {
    onInit();
    onScroll();
}