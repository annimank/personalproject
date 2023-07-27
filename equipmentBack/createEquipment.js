const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('equipment.db');

db.serialize(() => {

    let sql = 'CREATE TABLE equipment (' +
        'id integer PRIMARY KEY NOT NULL, ' +
        'name text NOT NULL, ' +
        'desc text)';

    db.run(sql, (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log("Table created");
    });


    sql = "INSERT INTO equipment (id, name, desc)" +
        "VALUES( 1, 'Name1', 'desc1')"
    db.run(sql, (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log("Row added")
    });

    sql = "INSERT INTO equipment (id, name, desc)" +
        "VALUES( 2, 'Name2', 'desc2')"
    db.run(sql, (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log("Row added")
    });

    sql = "INSERT INTO equipment (id, name, desc)" +
        "VALUES( 3, 'Name3', 'desc3')"
    db.run(sql, (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log("Row added")
    });

    db.each("SELECT id, name FROM equipment", (err, row) => {
        if (err) {
            return console.log(err.message);
        }
        console.log(row.id + ", " + row.name);
    });

    db.close();
});
