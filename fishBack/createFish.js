const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('fish.db');

db.serialize(() => {

    let sql = 'CREATE TABLE fish (' +
        'id integer PRIMARY KEY NOT NULL, ' +
        'species text NOT NULL, ' +
        'pic text, ' +
        'desc text)';

    db.run(sql, (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log("Table created");
    });


    sql = "INSERT INTO fish (id, species, pic, desc)" +
        "VALUES( 1, 'Pike', 'fish.png', 'This is a Pike')"
    db.run(sql, (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log("Row added")
    });

    sql = "INSERT INTO fish (id, species, pic, desc)" +
        "VALUES( 2, 'Perch', 'fish.png', 'This is a Perch')"
    db.run(sql, (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log("Row added")
    });

    sql = "INSERT INTO fish (id, species, pic, desc)" +
        "VALUES( 3, 'Pike-perch', 'fish.png', 'This is a Pike-perch')"
    db.run(sql, (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log("Row added")
    });

    sql = "INSERT INTO fish (id, species, pic, desc)" +
        "VALUES( 4, 'Rainbow trout', 'fish.png', 'This is a Rainbow trout')"
    db.run(sql, (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log("Row added")
    });

    sql = "INSERT INTO fish (id, species, pic, desc)" +
        "VALUES( 5, 'European whitefish', 'fish.png', 'This is an European whitefish')"
    db.run(sql, (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log("Row added")
    });

    db.each("SELECT id, species FROM fish", (err, row) => {
        if (err) {
            return console.log(err.message);
        }
        console.log(row.id + ", " + row.species);
    });

    db.close();
});
