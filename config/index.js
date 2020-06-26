var configValues = require('./config');
var dbname = "";

module.exports = {
    getDbConnectionString : function(){
        return "mongodb+srv://" + configValues.uname + ":" + configValues.pwd + '@cluster0-ugmpi.mongodb.net/'+  dbname  +'?retryWrites=true&w=majority'
    }
}

