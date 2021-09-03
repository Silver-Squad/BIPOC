const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    name: {
      type: String,
      required: true, 
    }, 
    street: String,
    city: String,
    state: String, 
    zip: Number,
    website: String,
    linkedin: String,
    initiativeOne: String, 
    initiativeTwo: String, 
    initiativeThree: String,
    empRatio: {
      type: String, 
      enum: ['0-5%','5-15%','15-25%','+25%',]
    },
    leaderRatio: {
      type: String, 
      enum: ['0-5%','5-15%','15-25%','+25%',]
    },
    score: Number,
    addedBy: [{type: Schema.Types.ObjectId, ref: 'User'}],    
  },{
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);