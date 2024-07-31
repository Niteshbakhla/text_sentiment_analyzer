const { connect } = require("mongoose")

exports.connectDB = async () => {
            try {
                        const connection = await connect("mongodb://127.0.0.1:27017/textSentimentAnalyzer")
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