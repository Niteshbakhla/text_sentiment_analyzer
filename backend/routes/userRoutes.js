const { getHistory } = require("../controllers/analyzeSentiment")
const { getName } = require("../controllers/getName")
const { verifyToken } = require("../controllers/verifyToken")

const router = require("express").Router()

router.post("/username", getName)
router.get("/history", verifyToken, getHistory)

module.exports = router 