const btnOuvrir = document.querySelector('#ouvrir')
const btnFermer = document.querySelector('#fermer')
const discussionBox = document.querySelector('#discussion-box')

btnOuvrir.addEventListener('click', ()=>{
    discussionBox.classList.remove('-translate-x-[100%]');
})
btnFermer.addEventListener('click', ()=>{
    discussionBox.classList.add('-translate-x-[100%]');
})