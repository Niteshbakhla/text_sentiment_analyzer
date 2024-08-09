const { analyzeSentiment, deleteHistory } = require("../controllers/analyzeSentiment")
const { verifyToken } = require("../controllers/verifyToken")

const router = require("express").Router()

router.post("/", verifyToken, analyzeSentiment)
router.delete("/deleteHistory/:id", deleteHistory)

module.exports = router
