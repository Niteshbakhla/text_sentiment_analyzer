const { connect } = require("mongoose")

exports.connectDB = async () => {
            try {
                        const connection = await connect(process.env.MONGODB_URI)
                        if (connection.STATES.connected) {
                                    console.log("mongodb is connected")
                        }
                        if (connection.STATES.disconnected) {
                                    console.log("mongodb is disconnected")
                        }
            } catch (error) {
                        console.log(error.message);
            }
}