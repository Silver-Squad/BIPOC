const router = require('express').Router();

/*---------- Public Routes ----------*/




/*---------- Protected Routes ----------*/



/*--- HELPER FUNCTIONS  ---*/
function checkAuth(req, res, next) {
  return req.user ? next() : res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router;