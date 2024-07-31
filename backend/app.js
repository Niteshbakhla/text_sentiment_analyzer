const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { connectDB } = require("./Database/connectionDB");
const router = require('./routes/sentiment');
connectDB()
const PORT = 3000
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/sentiment", router)


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));