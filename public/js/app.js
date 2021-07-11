const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')


weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value

    url = '/weather?address=' + location
    message1.textContent = 'Loading...'
    message2.textContent = ''

    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                message1.textContent = data.error
            } else {
                console.log(data)
                message1.textContent = data.location
                message2.textContent = data.forecast.description + '. The current temperature is ' +
                data.forecast.temperature + ' degree celcious, and it feels like ' + data.forecast.feelslike
            }
        })
    })

    console.log(location)
})