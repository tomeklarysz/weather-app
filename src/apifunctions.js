async function getData(location) {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=T6MARYHMB96XNGMG8B2K82QYB`, {
      mode: 'cors'
    })
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.error(error.message)
  }
}

export { getData }