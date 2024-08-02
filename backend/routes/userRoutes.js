const { getHistory } = require("../controllers/analyzeSentiment")
const { getName } = require("../controllers/getName")

const router = require("express").Router()

router.post("/username", getName)
router.get("/history", getHistory)

module.exports = router 