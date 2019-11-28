'use strict';

let API_KEY = '33e92f887f3c3663797c4f3d30dd1e27';
let CITY = 'Budapest';

var weatherApi = require('../weather/weather');

exports.getCityWeather = async function (req, res) {
    let city = req.params.city != null ? req.params.city : CITY;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

    let result;
    result = await weatherApi.getCityWeather(url);

    console.log(result);
    res.send(result)
};

exports.getMailCityWeather = async function (req, res) {
    let city = req.params.city != null ? req.params.city : CITY;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`

    let result;
    result = await weatherApi.getCityWeather(url);

    res.send('Email sent!')
};
