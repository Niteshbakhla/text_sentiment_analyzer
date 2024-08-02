const { getName } = require("../controllers/getName")

const router = require("express").Router()

router.post("/username" ,getName)

module.exports = router 