const button = document.querySelector('button')

const changeHeader = function() {
  const p = document.querySelector('h1#soHandsome')
  p.textContent = 'why are there so many there arent that many matts or micheals'
}

button.addEventListener('click', changeHeader)