async function getCurrentTemp(location) {
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=T6MARYHMB96XNGMG8B2K82QYB&contentType=json`, {
    mode: 'cors'
  })
  const data = await response.json()
  console.log(data.days[0].temp)
}

export { getCurrentTemp }