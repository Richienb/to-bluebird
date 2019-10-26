"use strict"

const convertPromise = require("convert-promise")
const BBPromise = require("bluebird")

module.exports = (promise) => convertPromise(promise, BBPromise)
