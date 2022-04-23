const connectToMongo = require("./database");
var cors = require('cors')

const express = require("express");
connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
// app.get('/',(req, res)=>{
//   res.end("this is are home page")
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
