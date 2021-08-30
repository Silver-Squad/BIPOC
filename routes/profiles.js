const router = require('express').Router();
const profilesCtrl = require('../controllers/profiles');

/*---------- Public Routes ----------*/




/*---------- Protected Routes ----------*/
router.use(require('../config/auth'));
router.post('/', checkAuth, profilesCtrl.create);
router.put('/:id', checkAuth, profilesCtrl.update);
router.delete('/:id', checkAuth, profilesCtrl.delete);


/*--- HELPER FUNCTIONS  ---*/
function checkAuth(req, res, next) {
  return req.user ? next() : res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router;