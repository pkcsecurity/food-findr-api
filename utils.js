//////////
// utils.js
//////////

module.exports = {
    generateShortId: function() {
        return randomHex(SHORT_ID_LENGTH);
    },
    generateLongId: function() {
        return randomHex(LONG_ID_LENGTH);
    },
    generateUuid: function() {
        return generateUuid(UUID_LENGTH);
    }
};

const crypto = require('crypto');

const SHORT_ID_LENGTH = 8;
const LONG_ID_LENGTH = 64;
const UUID_LENGTH = 6;

var randomBuffer = function(bytes) {
    return crypto.randomBytes(bytes);
};

var randomHex = function(bytes) {
    return randomBuffer(bytes).toString('hex');
};

var generateUuid = function(arrayLength) {
    const uuidArray = new Array(arrayLength);
    for (i = 0; i < arrayLength; ++i) {
        uuidArray.push(randomHex(4));
    }
    return uuidArray.join('-');
};
