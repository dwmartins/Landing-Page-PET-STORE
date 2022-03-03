const effectMenuOpen = document.querySelector('.menu');

const openNave = document.querySelector('.navigation');

effectMenuOpen.addEventListener('click', function(){
    openNave.classList.toggle('activeMenu')
})