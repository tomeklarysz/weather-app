function loadCurrent(dataObj) {
  const city = document.getElementById('city')
  const description = document.getElementById('description')
  // loadImg()
  const temp = document.getElementById('today-temp')
  const humidity = document.getElementById('humidity')
  const wind = document.getElementById('wind')
  const precip = document.getElementById('precip')

  city.textContent = dataObj.resolvedAddress
  description.textContent = dataObj.currentConditions.conditions
  
  temp.textContent = `${dataObj.currentConditions.temp}°C`
  humidity.textContent = `${dataObj.currentConditions.humidity}%`
  wind.textContent = `${dataObj.currentConditions.windspeed} kph`
  precip.textContent = `${dataObj.currentConditions.precipprob}%`
}

function cleanDiv(div) {
  while (div.firstChild) {
    div.removeChild(div.firstChild)
  }
}

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
    
    const date = document.createElement('p')
    const description = document.createElement('p')
    // const img = document.createElement('img')
    const temp = document.createElement('h3')
    const rain = document.createElement('p')

    date.textContent = dataObj.days[i].datetime
    description.textContent = dataObj.days[i].conditions
    temp.textContent = dataObj.days[i].temp
    rain.textContent = dataObj.days[i].precipprob

    dayDiv.appendChild(date)
    dayDiv.appendChild(description)
    // dayDiv.appendChild(img)
    dayDiv.appendChild(temp)
    dayDiv.appendChild(rain)

    container.appendChild(dayDiv)
    div.appendChild(container)
  }
} 

export { loadCurrent, loadWeek }