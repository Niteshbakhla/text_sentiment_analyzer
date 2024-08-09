const jwt = require("jsonwebtoken")

exports.verifyToken = async (req, res, next) => {
            const authHeader = req.headers["authorization"]
            const token = authHeader && authHeader.split(" ")[1]

            if (!token) {
                        return res.status(404).json({ success: false, message: "Enter your name first" })
            }

            const user = await jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
                        if (err) {
                                    return res.statu(500).json({ success: false, message: "forbidden" })
                        }
                        req.id = user._id
                        next()

            })

}

