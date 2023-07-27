//for the pic
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './pics')
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({storage: storage});
//pic ends

const express = require('express');
const app = express();

var helmet = require('helmet')
app.use(helmet({ crossOriginResourcePolicy: false }))

app.use(express.json());  
app.use(express.urlencoded({limit: '5mb', extended: true}));

const cors = require('cors');
app.use(cors());

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('fish.db');

app.listen(8080, () => {
    console.log('Node running, localhost:8080');
});

app.get('/', (req, res, next) => {
    return res.status(200).json({ error: false, message: 'Working' })
});

app.get('/download/:name', (req, res, next) => {
    var file = './pics/' + req.params.name;
    res.download(file);
});

app.get('/fish/all', (req, res, next) => {
	db.all('select * from fish', function (error, result) {
		if (error) throw error;

		return res.status(200).json(result);
	});
})

app.get('/fish/one/:id', (req, res, next) => {
	let id = req.params.id;

    db.get('select * from fish where id = ?', [id], (error, result) => {
		if (error) throw error;

		// Was it empty?
		if (typeof(result) == 'undefined') {
			return res.status(200).json({});
		}

		return res.status(200).json(result);
	});
})

app.post('/fish/add', upload.single('pic'), (req, res, next) => {
  let fish = req.body;
  let picName = null;
  if(req.file) {
    picName = req.file.originalname;
  }
 
  db.run('insert into fish (species, pic, desc) values (?, ?, ?)',
	      [fish.species, picName, fish.desc], (error, result) => {
		if (error) throw error;

		return res.status(200).json( {count: 1} );
	});
})

app.get('/fish/delete/:id', (req, res, next) => {
	let id = req.params.id;

  	db.run('delete from fish where id = ?', [id], function (error, result) {
		if (error) throw error;

		return res.status(200).json( {count: this.changes} );
	});
})

app.get('*', (req, res, next) => {
    return res.status(404).json({ error: true, message: 'No requested service' })
})
