const dotenv = require("dotenv");
require("dotenv/config");
const mongoose = require("mongoose");
const app = require("./app");




mongoose.connect(process.env.MONGODB_URL_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(()=>console.log("Connected to mongoDB"))
.catch(err=>console.error("Connection failed"));

const port = process.env.PORT || 3001;

//mongodb://localhost:27017/ecommerce

app.listen(port, ()=> {
    console.log(`Server started at ${port}`);
});