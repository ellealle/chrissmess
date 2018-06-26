const button = document.querySelector('button')

const changeHeader = function() {
  const p = document.querySelector('h1#soHandsome')
  p.textContent = 'There\'s too many Chris\''
}

const changeHeaderDos = function() {
    const p = document.querySelector('h2#soMany')
    p.textContent = 'Where did they all even come from'
  }
  
button.addEventListener('click', changeHeader)
button.addEventListener('click', changeHeaderDos)