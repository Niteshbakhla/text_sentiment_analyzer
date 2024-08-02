const userName = require("../models/user")

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
                        return res.status(200).json({ success: true, data: userSchema })

            } catch (error) {
                        return res.status(500).json({ success: false, message: "Internal Server error" })
            }
}