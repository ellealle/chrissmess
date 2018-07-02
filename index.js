class App {
  constructor() {
    this.list = document.querySelector('#movie')

    this.movie = []
    this.load()

    const form = document.querySelector('form#movieForm')
    form.addEventListener('submit', (ev) => {
      ev.preventDefault()
      this.handleSubmit(ev)
    })
  }

  save() {
    localStorage.setItem('movie', JSON.stringify(this.movie))
  }

  load() {
    const movie = JSON.parse(localStorage.getItem('movie'))

    if (movie) {
      movie.forEach(movie => this.addMovie(movie))
    }
  }

  renderProperty(name, value) {
    const span = document.createElement('span')
    span.classList.add(name)
    span.textContent = value
    return span
  }

  renderActionButtons(movie, item) {
    const actions = document.createElement('div')
    actions.classList.add('actions')

  handleSubmit(ev) {
    const f = ev.target

    const movie = {
      name: f.movieName.value,
      chris: f.chrisName.value,
      favorite: false,
    }

    this.addMovie(movie)
    this.save()

    f.reset()
    f.movieName.focus()
  }
}

const app = new App()