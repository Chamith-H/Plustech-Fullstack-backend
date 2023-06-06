const express = require("express")
const router = express.Router()


//Service 01
router.route("/allcategories").get((req, res) => {
    const all = [
        {
            name:'Category 1',
            id:1
        },

        {
            name:'Category 2',
            id:2
        },

        {
            name:'Category 3',
            id:3
        },
        
        {
            name:'Category 4',
            id:4
        },
    ]

    const calc = all[1].id + all[3].id

    console.log(calc)
})


module.exports = router;
