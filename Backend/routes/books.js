const {Router} = require('express');
const router = Router();

router.get('/', (req,res) => res.json({Text:'Hello World'}))

module.exports = router;
