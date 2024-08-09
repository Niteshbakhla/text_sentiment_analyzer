const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    history: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Sentiment"
        }
    ]
});


module.exports = mongoose.model("User", userSchema);
