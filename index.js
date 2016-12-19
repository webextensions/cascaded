/*eslint-env node*/
'use strict';

var oconf = require('oconf');

var cascaded = function (cjsonFile, silent) {
    if (cjsonFile) {
        if (!silent) {
            console.log('Loaded JSON object from file: ' + cjsonFile);
        }
        return oconf.load(cjsonFile);
    } else {
        return null;
    }
};

module.exports = cascaded;
