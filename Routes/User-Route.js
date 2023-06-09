const express = require("express")
const router = express.Router()


//Service 01
router.route("/allusers").get((req, res) => {
    res.send("Service is working")
})

//Service 02
router.route("/userobject").get((req, res) => {
    console.log("Route called")
    const obj = {
        id: 1,
        name: "Chamith",
        industry: "SE"
    }

    res.send(obj)
})

router.route("/posting").post((req, res) => {
    console.log(req.body)
    console.log(req.body.industry)
    res.send("Received to backend")
})

module.exports = router;

