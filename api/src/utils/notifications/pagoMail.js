const { Router } = require("express")
const router = Router()
const { pago } = require("../../services/mailer")


router.post('/', async (req, res) => {  
    try {
         const { name, email, amount, items } = req.body       
                
        res.status(200).json(await pago(name, email, amount, items))

    } catch (error) {
        res.json(error)
    }   
})




module.exports = router;