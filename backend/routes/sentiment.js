const { analyzeSentiment, deleteHistory } = require("../controllers/analyzeSentiment")

const router = require("express").Router()

router.post("/", analyzeSentiment)
router.delete("/deleteHistory/:id", deleteHistory)

module.exports = router
