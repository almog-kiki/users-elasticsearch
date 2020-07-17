
module.exports = {
    requireDependencies() {
        mainModule.mongo = require('mongodb');

        mainModule.mongoose     = require('mongoose');
        mainModule.mongoosastic = require('mongoosastic');
        mainModule.errorhandler = require('errorhandler');
        mainModule.express      = require('express');
        mainModule.cors         = require('cors');
        mainModule.utils        = require('./utils');
        mainModule.requestUtils = require('./requestUtils');
        mainModule.constants    = require('./constants');
       
        mainModule.app          = mainModule.express();
    }
};