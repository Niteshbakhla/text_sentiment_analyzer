const Sentiment = require('sentiment');
const sentiment = new Sentiment();

const analyzeSentiment = (req, res) => {
            const { text } = req.body;
            if (!text) {
                        return res.status(400).json({ message: 'Text is required' });
            }
            const result = sentiment.analyze(text);
            return res.status(200).json({ success: true, result })
};

module.exports = { analyzeSentiment };
