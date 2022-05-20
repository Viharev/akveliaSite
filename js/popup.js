const btn = document.querySelector('.btnBlockForm');
const popupActive = document.querySelector('.popupGalery');
const popupClose = document.querySelector('.popupClose');

btn.addEventListener('click', () => {
            popupActive.classList.add('popupActive');
            document.body.style.overflow = "hidden";
            
})


popupClose.addEventListener('click', () => {
    popupActive.classList.remove('popupActive');
    document.body.style.overflow = "";
});
