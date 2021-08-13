const express = require("express");
const compression = require("compression");
const cors = require("cors");
const morgan = require("morgan");


module.exports = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use(compression());

    if (process.env.NODE_ENV === "production") {
        app.use(morgan("pro"));
    }
}