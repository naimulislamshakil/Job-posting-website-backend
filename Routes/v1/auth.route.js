const router = require('express').Router();
const AuthCollaction = require('../../Collaction/auth.collaction');

router.route('/singup').post(AuthCollaction.singupCollaction);

module.exports = router;
