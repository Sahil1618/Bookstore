const express = require("express")
const app = express();
app.use(express.json());
require ("dotenv").config();
require("./conn/conn");
const User = require("./routes/user");
const Books = require("./routes/book");

//routes
app.use("/api/v1", User);
app.use("/api/v1", Books);
// creating port 
app.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.PORT}`);
})