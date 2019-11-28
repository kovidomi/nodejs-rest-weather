'use strict';

var settings = require('../../settings.json');
var weatherApi = require('../weather/weather');

exports.getCityWeather = async function (req, res) {
    let city = req.params.city != null ? req.params.city : settings.default_city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${settings.api_key}`

    let result;
    result = await weatherApi.getCityWeather(url);

    console.log(result);
    res.send(result)
};

exports.getMailCityWeather = async function (req, res) {
    let city = req.params.city != null ? req.params.city : settings.default_city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${settings.api_key}`

    let cityWeather;
    cityWeather = await weatherApi.getCityWeather(url);

    const mailer = require('../mail/mail')
    let subject = 'City temperature'
    let text = `It's ${cityWeather.temp} degrees in ${cityWeather.city}!`
    mailer.sendMail(subject, text, settings.email_receiver)

    let result = {
        email_receiver: settings.email_receiver,
        subject: subject,
        text: text
    }

    res.send(result)
};
