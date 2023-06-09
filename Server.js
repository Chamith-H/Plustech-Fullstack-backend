const express = require("express"); // getting requests | response
const app = express(); // binding express to backend

const cors = require("cors");
const mongoose = require("mongoose"); // database management

//Database connection

app.use(cors());


//Body praser
app.use(express.json())


//Configure Routes
app.use("/user", require("./Routes/User-Route"))
app.use("/category", require("./Routes/Category-Route"))


app.listen(8000, '127.0.0.1', function() {
    console.log("Backend is running")
})
