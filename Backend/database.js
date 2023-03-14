const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/'
console.log('...Connecting to database...')
mongoose.connect(URI)
.then(db => console.log('DB is connected'))
.catch(err=>console.error(err));