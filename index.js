const button = document.querySelector('button')

const changeHeader = function() {
  const p = document.querySelector('p#soMany')
  p.textContent = 'There\'s too many Chris\''
}

const changeHeaderDos = function() {
    const p = document.querySelector('p#Marvel')
    p.textContent = 'Where did they all come from?'
  }
  const changePara = function() {
    const p = document.querySelector('p#soHandsome')
    p.textContent = 'Why are there so many Chris\', there aren\'t that many Matthew\'s or Micheal\'s, how did they tell them all apart for Infinity War'
  }

button.addEventListener('click', changeHeader)
button.addEventListener('click', changeHeaderDos)
button.addEventListener('click', changePara)