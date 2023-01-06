const express = require ('express');
const dotenv = require ('dotenv').config();
const port = process.env.PORT || 5000;
const path = require('path');
const cors = require('cors');


const app = express();


//enable body paser
app.use(express.json());
app.use(express.urlencoded({extended : false}));



// set static folder

app.use(express.static(path.join(__dirname, 'public')));



app.use(cors({
    origin: ['https://mjdawson821.wixsite.com/my-site'],
    credentials: true,
  }));
  

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`server started on port ${port}`));

