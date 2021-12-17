
// Variaveis
const left = document.querySelector('.left')
const rigth = document.querySelector('.rigth')
const container = document.querySelector('.container')


left.addEventListener('mousenter', () => container.classList.add('houver-left'))
left.addEventListener('mouseleave', () => container.classList.remove ('houver-left'))

rigth.addEventListener('mouseenter', () => container.classList.add('houver-rigth'))
rigth.addEventListener('mouseleave', () => container.classList.remove('houver-rigth'))