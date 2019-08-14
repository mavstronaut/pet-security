var path = require('path');

module.exports = function(app) {
    // console.log('__ENTER htmlRoutes.js__');
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // app.get('/survey', function(req, res) {
    //     res.sendFile(path.join(__dirname, '../public/survey.html'));
    // });
};