var engine = require('ejs-locals');
var fs = require('fs');

var viewPath =  __dirname + '/views';
var staticPath = __dirname + '/static';

function dumpHTML(page, dest) {
    engine(viewPath + '/' + page, {settings: {'view engine': 'html', 'views': __dirname + '/views'}}, function(err, template) {
        fs.writeFileSync(staticPath + '/' + dest, template);
    });
}

dumpHTML('simulator.html', 'index.html');
dumpHTML('about.html', 'about.html');