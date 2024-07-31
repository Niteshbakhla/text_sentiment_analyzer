const { analyzeSentiment } = require("../controllers/analyzeSentiment")

const router = require("express").Router()

router.post("/", analyzeSentiment)

module.exports = router
