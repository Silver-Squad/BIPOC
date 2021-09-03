const router = require('express').Router();
const profilesCtrl = require('../controllers/profiles');

/*---------- Public Routes ----------*/
router.get('/', profilesCtrl.index);
router.get('/:id', profilesCtrl.getOneAccount);
router.get('/user/:userid', profilesCtrl.indexCurrentUser)

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