var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('data/3d0d7e5fb2ce288813306e4d4636395e047a3d28.mdata');

/*
 * GET home page.
 */

exports.index = function(req, res) {
    db.all('select '+
	   '  m.ROWID, mg.type, mg.unread_count, m.date, m.address, m.text '+
	   'from msg_group mg '+
	   '  left join message m on mg.newest_message = m.ROWID '+
	   'order by m.date desc', function(err, rows) {
	    res.render('index', {conversations: rows});
	});
};
