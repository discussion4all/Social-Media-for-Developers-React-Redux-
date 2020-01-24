const express = require("express");

const app = express();

const connectDB = require("./config/db")

const PORT = process.env.PORT || 5000;

//Connect Database
connectDB();
app.use(express.json({ extended: false}))
app.get("/", (req, res)=>res.send("API is running"))

app.use("/api/users", require("./routes/api/users"))
app.use("/api/auth", require("./routes/api/auth"))
app.use("/api/profile", require("./routes/api/profile"))
app.use("/api/posts", require("./routes/api/posts"))


app.listen(5000, ()=>{
    console.log(`Server is started at port ${PORT}`)
});