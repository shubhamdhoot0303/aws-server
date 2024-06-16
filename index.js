import Routes from "./routes/routes.js";
import  express  from "express";
import Connection from "./database/db.js";
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

const PORT = 8000;
//use for same port in browser
app.use(cors());
app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: false } ));

app.use('/',Routes);



  // Connection();
  
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })


  