// npm init: we write this command in the root directory to create a package.json file
// install express, mongoose and dotenv
// package-lock.json file will be created after that and libraries will be installed
// express js is framework of node js that simplifies the process of building apis
const express = require("express");
const app = express();

// importing "cookie-parser"(middleware) to access the cookie value from body
const cookieParser = require("cookie-parser");

// this function is used to set the statuscode and message with the help of class errorHander
const errorMiddleware = require("./middleware/error");

const bodyParser = require("body-parser");

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Route imports
const user = require("./routes/userRoute");
const reports = require("./routes/reportRoute");
const searchArea = require("./routes/searchAreaRotue");
const organization = require("./routes/organizationRouter");
const doghandlers = require("./routes/dogHandlersRouter");

// It acts as a middleware. Middleware is a function having access to request and response and can modify any request or response
// .use is a method to add middlewares
app.use("/api/v1", user);
app.use("/api/v1", reports);
app.use("/api/v1", searchArea);
app.use("/api/v1", organization);
app.use("/api/v1", doghandlers);

// using errorHander Middleware here
app.use(errorMiddleware);

module.exports = app;
