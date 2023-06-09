const { Router } = require("express")
const router = Router()
const { mailActivateAccount } = require("../../services/mailer")

router.post('/', async (req, res) => {  
    try {

        const { name, email } = req.body   
        res.status(200).json(await mailActivateAccount(name, email))

    } catch (error) {
        res.json(error)
    }   
})

module.exports = router;

