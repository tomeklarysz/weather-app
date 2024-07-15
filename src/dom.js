const url = 'https://github.com/tomeklarysz/weather-app/blob/main/src/media/'
// current weather
function loadCurrent(dataObj) {
  const city = document.getElementById('city')
  const description = document.getElementById('description')
  const img = document.getElementById('current-img')
  const temp = document.getElementById('today-temp')
  const humidity = document.getElementById('humidity')
  const wind = document.getElementById('wind')
  const precip = document.getElementById('precip')

  city.textContent = dataObj.resolvedAddress
  description.textContent = dataObj.currentConditions.conditions
  img.src = `${url}${dataObj.currentConditions.icon}.png?raw=true`
  temp.textContent = `${dataObj.currentConditions.temp} °C`
  humidity.textContent = `${dataObj.currentConditions.humidity}%`
  wind.textContent = `${dataObj.currentConditions.windspeed} kph`
  precip.textContent = `${dataObj.currentConditions.precipprob}%`
}

function cleanDiv(div) {
  while (div.firstChild) {
    div.removeChild(div.firstChild)
  }
}

// week forecast
function loadWeek(dataObj) {
  const div = document.getElementById('mid-right')
  cleanDiv(div)
  
  const title = document.createElement('h3')
  title.textContent = 'Week Forecast'
  div.appendChild(title)
  const container = document.createElement('div')
  container.id = 'week-container'

  for (let i=1; i<3; i++) {
    const dayDiv = document.createElement('div')
    dayDiv.classList.add('week')
    dayDiv.classList.add('border')
    
    const date = document.createElement('p')
    const description = document.createElement('p')
    const img = document.createElement('img')
    const temp = document.createElement('h3')
    const rain = document.createElement('p')

    date.textContent = dataObj.days[i].datetime
    description.textContent = dataObj.days[i].conditions
    img.src = `${url}${dataObj.days[i].icon}.png?raw=true`
    temp.textContent = `${dataObj.days[i].temp} °C`
    rain.textContent = `Chance of rain ${dataObj.days[i].precipprob}%`

    dayDiv.appendChild(date)
    dayDiv.appendChild(description)
    dayDiv.appendChild(img)
    dayDiv.appendChild(temp)
    dayDiv.appendChild(rain)

    container.appendChild(dayDiv)
    div.appendChild(container)
  }
} 

// Hourly forecast
function loadHour(dataObj) {
  const container = document.getElementById('hourly')
  cleanDiv(container)

  const currentTime = Number(dataObj.currentConditions.datetime.slice(0, 2))
  const hours = dataObj.days[0].hours

  // if earlier than 18 no more than 6 hours ahead
  const limit = currentTime+1 < 18 ? currentTime+7 : Object.keys(hours).length
  for (let i=currentTime+1; i<limit; i++) {
    const hourDiv = document.createElement('div')
    hourDiv.classList.add('hour-div')
    hourDiv.classList.add('border')

    const time = document.createElement('p')
    const img = document.createElement('img')
    img.classList.add('hour-icon')
    const temp = document.createElement('p')

    time.textContent = hours[i].datetime.slice(0, 5)
  img.src = `${url}${hours[i].icon}.png?raw=true`
    temp.textContent = `${hours[i].temp} °C`

    hourDiv.appendChild(time)
    hourDiv.appendChild(img)
    hourDiv.appendChild(temp)

    container.appendChild(hourDiv)
  }
}

export { loadCurrent, loadWeek, loadHour }

// TODO
// date format