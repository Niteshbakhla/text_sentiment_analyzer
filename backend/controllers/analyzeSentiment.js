const Sentiment = require('sentiment');
const sentimentSchema = require("../models/Sentiment")
const sentiment = new Sentiment();

const analyzeSentiment = async (req, res) => {
            const { text } = req.body;
            try {
                        if (!text) {
                                    return res.status(400).json({ message: 'Text is required' });
                        }
                        const result = sentiment.analyze(text);
                        const { score, comparative, tokens, positive, negative } = result
                        const sentimentPost = new sentimentSchema({
                                    score,
                                    comparative,
                                    tokens,
                                    positive,
                                    negative,
                                    text
                        });
                        await sentimentPost.save();

                        return res.status(200).json({ success: true, result: sentimentPost })
            } catch (error) {
                        return res.status(500).json({ success: false, message: error.message })
            }
};


getHistory = async (req, res) => {
            try {
                        const history = await sentimentSchema.find().sort({ date: -1 }).limit(10);
                        return res.status(200).json({ success: true, history })
            } catch (error) {

                        return res.status(500).json({ success: false, message: error.message })

            }
}

module.exports = { analyzeSentiment, getHistory };
