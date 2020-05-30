'use strict'

module.exports = {
    configure: {
        smoke: {
            specs: [
                'src/specs/smoke/login.js',
                'src/specs/smoke/resources.js',
                //'src/specs/smoke/website.js'
            ]
        }
    }
};
