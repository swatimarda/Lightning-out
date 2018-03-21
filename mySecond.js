var express = require('express'),
	http = require('http'),
	app = express();

app.use(express.static(__dirname + '/public')); 
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('Main.html');
});

/*Allow CORS*/
app.use(function(req, res, next) {
     
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization,X-Authorization'); 
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time');
    res.setHeader('Access-Control-Max-Age', '1000');
      
    next();
});

app.get('/Main*' ,   function(req,res,next) {
    res.sendfile('views/Main.html');
} );
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
