
import { el , all} from './func-var.js';



// ==================================== localStorage
function myLochal() {
  if ('theme' in localStorage) {
    document.body.classList.add(`${localStorage.getItem('theme')}`)
    all('nav i').forEach(icon => {
      if (icon.dataset.theme === localStorage.getItem('theme')) {
        icon.classList.add('active')
      }
    })
  }
}
myLochal()

// ==================================== Add Theme
function  icons() {
  all('nav i').forEach(icon => {
    icon.addEventListener('click', (e) => {
      for (icon of all('nav i')) icon.classList.remove('active')
      e.target.classList.add('active')
      e.target.dataset
      console.log(e.target.dataset.theme)
      localStorage.setItem('theme', e.target.dataset.theme)
      document.body.classList = ''
      document.body.classList.add(`${e.target.dataset.theme}`)
    })
  })
}
icons()



