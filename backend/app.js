const express = require("express")
const app = express();
app.use(express.json());
require ("dotenv").config();
require("./conn/conn");
const User = require("./routes/user");
const Books = require("./routes/book");
const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart");
const Order = require("./routes/order");
//routes
app.use("/api/v1", User);
app.use("/api/v1", Books);
app.use("/api/v1", Favourite);
app.use("/api/v1", Cart);
app.use("/api/v1", Order);
// creating port 
app.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.PORT}`);
})