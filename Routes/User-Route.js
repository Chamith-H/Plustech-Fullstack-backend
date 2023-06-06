const express = require("express")
const router = express.Router()


//Service 01
router.route("/allusers").get((req, res) => {
    res.send("Service is working")
})

//Service 02
router.route("/userobject").get((req, res) => {
    const obj = {
        id: 1,
        name: "Chamith",
        industry: "SE"
    }

    res.send(obj)
})

module.exports = router;

