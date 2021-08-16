const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema (
  {
    quizscore: Number, 
  }, {
    timestamps: true
});

const companySchema = new Schema(
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
    google: String, 
    quizscores: [scoreSchema],
    owner: [{type: Schema.Types.ObjectId, ref: 'User'}],    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Company", companySchema);