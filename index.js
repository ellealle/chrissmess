const button = document.querySelector('button')
const buttonDos = document.querySelector('buttonDos')
const form = document.querySelector('form#flickForm')

const changeHeader = function() {
  const p = document.querySelector('h1#soHandsome')
  p.textContent = 'There\'s too many Chris\''
}

const changeHeaderDos = function() {
    const p = document.querySelector('h2#soMany')
    p.textContent = 'Where did they all even come from'
  }
  
const addChris = function(ev) {
    ev.preventDefault()
    const f = ev.target
  
    const chrisMovie = f.chrisMovie.value
    const item = document.createElement('li')
    item.textContent = chrisMovie
  
    const list = document.querySelector('#chrisn')
    item.classList.add('')
    list.appendChild(item)
  
    f.reset()
  }
button.addEventListener('click', changeHeader)
button.addEventListener('click', changeHeaderDos)

