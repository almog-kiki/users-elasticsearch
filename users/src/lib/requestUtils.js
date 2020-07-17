const Utils = require('./utils');

module.exports = {
    failureResponse(res, error, logMsg) {
        Utils.log("failureResponse: " + logMsg + " error.stack: " + error.stack);
        return res.json({ success: false, error: error.toString() });
    },

    successResponse(res, data, logMsg) {
        Utils.log("successResponse: " + logMsg + " data: " + JSON.stringify(data));
        return res.json({ success: true, data: data });
    }
}