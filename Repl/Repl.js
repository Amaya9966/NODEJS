const crypto = require('crypto');

 const randomID = crypto.randomBytes(8).toString('hex');
randomID