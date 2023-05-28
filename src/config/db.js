const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost:27017/myfirstapp`,{
    useNewUrlParser:true,useUnifiedTopology:true
});