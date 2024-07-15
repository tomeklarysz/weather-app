import './style.css'
import { getData } from './apifunctions'
import { loadCurrent, loadWeek, loadHour } from './dom'

const searchBar = document.querySelector('input')
const button = document.querySelector('button') 
const currentImg = document.getElementById('current-img')
currentImg.src = '../media/partly-cloudy-day.png'

// initial object with london data
let dataObject = {}
getData('london').then(response => {
  dataObject = response
  console.log(dataObject)
  loadCurrent(dataObject)
  loadWeek(dataObject)
  loadHour(dataObject)
})

button.addEventListener('click', () => {
  let input = searchBar.value
  let data = getData(input)
  data.then(response => {
    data = response
    console.log(data)
    loadCurrent(data)
    loadWeek(data)
    loadHour(data)
  })
})