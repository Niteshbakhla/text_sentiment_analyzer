const mongoose = require('mongoose');

const sentimentSchema = new mongoose.Schema({
            text: { type: String, required: true },
            score: { type: Number, required: true },
            comparative: { type: Number, required: true },
            tokens: { type: Array, required: true },
            positive: { type: Array, required: true },
            negative: { type: Array, required: true },
}, { timestamps: true });



const SentimentSchema = mongoose.model('Sentiment', sentimentSchema);

module.exports = SentimentSchema
