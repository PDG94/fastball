const { Router } = require("express")
const router = Router()
const { active } = require("../../services/mailer")

router.post('/', async (req, res) => {
    try {

        const { name, email } = req.body
        res.status(200).json(await active(name, email))

    } catch (error) {
        res.json(error)
    }
})

module.exports = router;