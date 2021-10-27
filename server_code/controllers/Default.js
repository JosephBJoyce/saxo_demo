'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.updateAccount = function updateAccount (req, res, next) {
  Default.updateAccount()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
