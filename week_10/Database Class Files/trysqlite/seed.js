const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('example.sqlite3');

db.serialize(() => {
    db.run('DROP TABLE IF EXISTS cheeses');
    db.run("CREATE TABLE cheeses (name TEXT)");

    const stmt = db.prepare("INSERT INTO Cheeses VALUES (?)");
    
    stmt.run("cheddar");
    stmt.run("Yarg");
    stmt.run("Brie");
    stmt.run("Motzarella");

    stmt.finalize();

    db.each('SELECT rowid AS id, name FROM cheeses', (err, row) => {
        console.log(`${row.id}: ${row.name}`);
    });
});
    
db.close;