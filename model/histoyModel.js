const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
      sName:{
          type:String,
          require: true
      },
      sEmail:{
          type:String,
          require: true
      },
      rName:{
          type:String,
          require: true
      },
      rEmail:{
          type:String,
          require: true
      },
      amount:{
          type:Number,
          require: true
      },
      date:{
          type: Date,
          default: Date.now
      }
});

const historyModel = new mongoose.model('history', historySchema);

module.exports = historyModel;