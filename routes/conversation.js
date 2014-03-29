var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('data/3d0d7e5fb2ce288813306e4d4636395e047a3d28.mdata');

/*
 * GET conversation
 */

exports.show = function(req, res) {
    db.all('select '+
	   '  address, date, text, flags '+
	   'from message '+
	   'where address="'+req.params.id.replace('"', '\\"')+'" '+
	   'order by date desc', function(err, rows) {
	       res.render('conversation', {conversation: rows});
	   });
};
