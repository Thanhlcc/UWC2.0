const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const connection = require('./config/database');
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require('cors');

/*
*-------------General Setup--------------------------------------
*/
app.use(cors({
  origin: ['http://localhost:3001'],
  credentials: true
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/*
*-------------Authentication Setup--------------------------------------
*/
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);
app.get('/', (req, res) => {
  return res.json({message: "Welcome to UWC2.0"});
})
/*
*-------------Route Setup--------------------------------------
*/



/*
*---------------Server-------------------------------------------------
*/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
