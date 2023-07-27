const express = require('express');
const app = express();

var helmet = require('helmet')
app.use(helmet({ crossOriginResourcePolicy: false }))

app.use(express.json());  
app.use(express.urlencoded({limit: '5mb', extended: true}));

const cors = require('cors');
app.use(cors());

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('equipment.db');

app.listen(9000, () => {
    console.log('Node running, localhost:9000');
});

app.get('/', (req, res, next) => {
    return res.status(200).json({ error: false, message: 'Working' })
});

app.get('/equipment/all', (req, res, next) => {
	db.all('select * from equipment', function (error, result) {
		if (error) throw error;

		return res.status(200).json(result);
	});
})

app.get('/equipment/one/:id', (req, res, next) => {
	let id = req.params.id;

    db.get('select * from equipment where id = ?', [id], (error, result) => {
		if (error) throw error;

		// Was it empty?
		if (typeof(result) == 'undefined') {
			return res.status(200).json({});
		}

		return res.status(200).json(result);
	});
})

app.post('/equipment/add', (req, res, next) => {
  let equipment = req.body;
  
  db.run('insert into equipment (name, desc) values (?, ?)',
	      [equipment.name, equipment.desc], (error, result) => {
		if (error) throw error;

		return res.status(200).json( {count: 1} );
	});
})

app.get('/equipment/delete/:id', (req, res, next) => {
	let id = req.params.id;

  	db.run('delete from equipment where id = ?', [id], function (error, result) {
		if (error) throw error;

		return res.status(200).json( {count: this.changes} );
	});
})

app.get('*', (req, res, next) => {
    return res.status(404).json({ error: true, message: 'No requested service' })
})
