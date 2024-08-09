const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectDB } = require("./Database/connectionDB");
const sentimentRouter = require('./routes/sentiment');
const userRouter = require("./routes/userRoutes")
connectDB()
const PORT = 3000
const app = express();
const dotenv = require("dotenv")
app.use(cors());
app.use(bodyParser.json());
dotenv.config()


app.use("/api/sentiment", sentimentRouter)
app.use("/", userRouter)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));