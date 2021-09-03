const Profile = require('../models/profile');

/** Company Profile CRUD functions */

// create a new profile
function create(req, res) {  
  // identify user creating the profile                           
  req.body.addedBy = req.user._id;                      
  Profile.create(req.body)                              
    .then(profile => {res.json(profile)})              
    .catch(err => {res.json(err)});
    console.log(req.body,'hitting controller')
}

// return all profiles in the database
function index(req, res) {                               
  Profile.find({})                                       
    .populate('addedBy')
    .then(profiles => res.json(profiles))
    .catch(err => {res.json(err)})
}

// return all profiles created by the current user
function indexCurrentUser(req, res) {                   
  Profile.findOne({addedBy: req.params.userid})
    .then(profiles => res.json(profiles))
    .catch(err => {res.json(err)})
}

// return one profile by document id
function getOneAccount(req, res) {                        
  Profile.findById(req.params.id)
    .then(profile => res.json(profile))
    .catch(err => res.json(err))
}

function update(req, res) {                              
  Profile.findByIdAndUpdate(req.params.id, req.body)
    .then(profile => {res.json(profile)})
    .catch(err => res.json(err))
}

function deleteOne(req, res) {
  Profile.findByIdAndDelete(req.params.id)
    .then(profile => res.json(profile))
    .catch(err => res.json(err));
}

module.exports = {
  create,                                                                       
  index,
  indexCurrentUser,
  getOneAccount,     
  update,                                                                      
  delete: deleteOne                                                                     
}