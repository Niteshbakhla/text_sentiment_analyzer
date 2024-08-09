const Sentiment = require('sentiment');
const SentimentSchema = require("../models/Sentiment")
const sentiment = new Sentiment();
const userName = require("../models/user")

const analyzeSentiment = async (req, res) => {
            const { text } = req.body;

            try {

                        if (!text) {
                                    return res.status(400).json({ message: 'Text is required' });
                        }
                        const result = sentiment.analyze(text);
                        const { score, comparative, tokens, positive, negative } = result
                        const sentimentPost = new SentimentSchema({
                                    score,
                                    comparative,
                                    tokens,
                                    positive,
                                    negative,
                                    text
                        });
                        await sentimentPost.save();

                        await userName.findByIdAndUpdate(req.id, {
                                    $push: { history: sentimentPost._id }
                        })

                        return res.status(200).json({ success: true, result: sentimentPost })
            } catch (error) {
                        return res.status(500).json({ success: false, message: error.message })
            }
};



getHistory = async (req, res) => {
            try {
                        const history = await Sentiment.find().sort({ date: -1 }).limit(10);
                        return res.status(200).json({ success: true, history })
            } catch (error) {

                        return res.status(500).json({ success: false, message: error.message })

            }
}

deleteHistory = async (req, res) => {
            try {
                        const { id } = req.params;

                        await Sentiment.findByIdAndDelete(id);

                        if (!post) return res.status(404).json({ success: false, message: "post not found" })

                        return res.status(200).json({ success: true, message: "Successfully Deleted" })


            } catch (error) {
                        return res.status(500).json({ success: false, message: error.message })
            }
}

module.exports = { analyzeSentiment, getHistory, deleteHistory };
