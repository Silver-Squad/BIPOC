const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema (
  {
    quizscore: Number, 
  }, {
    timestamps: true
});

const profileSchema = new Schema(
  {
    name: {
      type: String,
      required: true, 
    }, 
    street: String,
    city: String,
    state: String, 
    zip: Number,
    website: String,
    initiativeOne: String, 
    initiativeTwo: String, 
    empRatio: {
      type: String, 
      enum: ['0-5%','5-15%','15-25%','25+%',]
    },
    leadershipRatio: {
      type: String, 
      enum: ['0-5%','5-15%','15-25%','25+%',]
    },
    quizscores: [scoreSchema],
    owner: [{type: Schema.Types.ObjectId, ref: 'User'}],    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Company", profileSchema);