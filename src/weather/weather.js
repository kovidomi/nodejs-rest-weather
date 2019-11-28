'use strict';

const request = require('request');

exports.getCityWeather = function (url) {
    return new Promise(function (resolve, reject) {
        request(url, function (error, response, body) {
            if (error || response.statusCode != 200) {
                console.log('error:', error);
                return reject(body);
            }

            try {
                let weather = JSON.parse(body)
                resolve({ city: weather.name, temp: weather.main.temp });
            } catch (e) {
                reject(e);
            }
        })
    })
};