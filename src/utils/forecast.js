const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7a232548618291883a5351cd75c21190&query=' + encodeURIComponent(latitude) +
    ',' + encodeURIComponent(longitude) + '&unit=m'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Connection Fail', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                temperature: body.current.temperature,
                description: body.current.weather_descriptions[0],
                feelslike: body.current.feelslike
            })
        }
    })
}

module.exports = forecast