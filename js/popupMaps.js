const openPopup = document.querySelector('.btContacts');
const closePopup = document.querySelector('.popupClosed');
const popUp = document.querySelector('.popups');

openPopup.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
    document.body.style.overflow = "hidden";
});

closePopup.addEventListener('click', () => {
    popUp.classList.remove('active');
    document.body.style.overflow = "";  
});