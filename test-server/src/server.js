const express = require('express');
const port = process.env.PORT || 5002;
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

const auth = require('../src/middleware/auth');

const { postRouter } = require('./routes/index');

app.get('/', (req,res) => {
    res.status(200).json({"message": "working on the app"});
})

// app.get('/test',auth,(req,res) => {
//     return res.status(200).json({"message":"working","user":req.user});
// })

app.use('/',postRouter);


app.listen(port, () => {
   console.log(`test server started on port ${port}`) 
})