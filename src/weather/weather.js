'use strict';

const request = require('request');

exports.getCityWeather = function (url) {
    return new Promise(function (resolve, reject) {
        request(url, function (error, response, body) {
            if (error || response.statusCode != 200) {
                console.log('error:', error);
                return reject(error);
            }

            try {
                let weather = JSON.parse(body)
                let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                resolve(message);
            } catch (e) {
                reject(e);
            }
        })
    })
};