const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectDB } = require("./Database/connectionDB");
const sentimentRouter = require('./routes/sentiment');
const userRouter = require("./routes/userRoutes")
require("dotenv").config()
connectDB()
const PORT = process.env.PORT || 3000
const app = express();
app.use(cors(
            {
                        origin: process.env.CLIENT_URL
            }
));
app.use(bodyParser.json());



app.use("/api/sentiment", sentimentRouter)
app.use("/", userRouter)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));