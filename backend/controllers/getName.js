const userName = require("../models/user")
const SentimentSchema = require("../models/Sentiment")
const jwt = require("jsonwebtoken")

exports.getName = async (req, res) => {
            try {
                        const { name } = req.body

                        if (name === "") {
                                    return res.status(404).json({ success: false, message: "Enter your name" })
                        }

                        const userSchema = new userName({
                                    name
                        });
                        await userSchema.save();

                        const token = jwt.sign({ _id: userSchema._id }, process.env.JWT_SECRET)



                        return res.status(200).json({ success: true, data: userSchema, token })

            } catch (error) {
                        return res.status(500).json({ success: false, message: "Internal Server error" })
            }
}