import './style.css'
import { getData } from './apifunctions'
import { loadCurrent } from './dom'

const searchBar = document.querySelector('input')
const button = document.querySelector('button') 
const currentImg = document.getElementById('current-img')
currentImg.src = '../media/partly-cloudy-day.png'

// initial london to display
let dataObject = {}
getData('london').then(response => {
  dataObject = response
  console.log(dataObject)
})

button.addEventListener('click', () => {
  let input = searchBar.value
  let data = getData(input)
  data.then(response => {
    data = response
    console.log(data)
    loadCurrent(data)
  })
})