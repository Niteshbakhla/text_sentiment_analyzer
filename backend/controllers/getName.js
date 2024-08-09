const userName = require("../models/user")
const SentimentSchema = require("../models/Sentiment")
const jwt = require("jsonwebtoken")

exports.getName = async (req, res) => {
            
            try {
                        const { name, username } = req.body
                        let isExistUser = await userName.findOne({ username })

                        if (name === "") {
                                    return res.status(200).json({ success: false, message: "Enter your name" })
                        }

                        if (!isExistUser) {
                                    isExistUser = new userName({
                                                name,
                                                username
                                    });
                                    await isExistUser.save();
                                    return res.status(200).json({ success: false, message: "user already exist" })
                        }
                        const token = jwt.sign({ _id: isExistUser._id }, process.env.JWT_SECRET, { expiresIn: "30m" })

                        return res.status(200).json({ success: true, data: isExistUser, token })

            } catch (error) {
                        return res.status(500).json({ success: false, message: "Internal Server error" })
                        console.log(error)
            }
}