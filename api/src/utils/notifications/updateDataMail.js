const { Router } = require("express")
const router = Router()
const { datos } = require("../../services/mailer")


router.post('/', async (req, res) => {
    try {
        
        const { name, email } = req.body
        res.status(200).json(await datos(name, email))

    } catch (error) {
        res.json(error)
    }
})

module.exports = router;