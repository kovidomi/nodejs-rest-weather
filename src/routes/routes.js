'use strict';

module.exports = function (app) {
    var weatherController = require('../controller/controller');

    app.route('/weather')
        .get(weatherController.getCityWeather);

    app.route('/weather/:city')
        .get(weatherController.getCityWeather);

    app.route('/weather/mail/:city')
        .get(weatherController.getMailCityWeather);
};