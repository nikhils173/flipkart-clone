const express = require('express');
const { signup, signin,signout } = require('../../controller/admin/auth');
const { isRequestValidated, validateSignupRequest, validateSigninRequest } = require('../../validators/auth');
const { requireSignin } = require('../../common-middleware');
const router = express.Router();

router.post('/admin/signin',validateSigninRequest,isRequestValidated,signin);
router.post('/admin/signup',validateSignupRequest, isRequestValidated, signup);
router.post('/admin/signout', requireSignin, signout)

// router.post('/admin/profile', requireSignin, (req,res) =>{
//     res.status(200).json({
//         user:' Admin profile'
//     })
// } )

module.exports = router;