const shareBtn = document.querySelector('.icon-share')
const social = document.querySelector('.social')
const removeBtn = document.querySelector('.sec')

shareBtn.addEventListener('click', () => {
    social.classList.toggle('hidden');
})

removeBtn.addEventListener('click', () => {
    social.classList.add('hidden');
})