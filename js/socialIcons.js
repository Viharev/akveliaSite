const openSocial = document.querySelector('.openSocial');
const socialfixxedIcons = document.querySelector('.socialfixxedIcons');
const closeSocial = document.querySelector('.closeSocial')

openSocial.addEventListener('mouseover', () => {
    socialfixxedIcons.classList.add('activeSocialIcons');
})

closeSocial.addEventListener('click', () => {
    socialfixxedIcons.classList.remove('activeSocialIcons');
})