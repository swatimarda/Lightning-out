var express = require('express'),
	http = require('http'),
	app = express();

app.use(express.static(__dirname + '/public')); 
app.set('port', process.env.PORT || 8080);
app.get('/Main*' ,   function(req,res,next) {
    res.sendfile('views/Main.html');
} );
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
