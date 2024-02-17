const express = require('express');
const { imageRouter, videoRouter } = require('./routes/index');
const port = process.env.PORT || 5001;
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.status(200).send("well , it has started ")
});


app.use('/',imageRouter);
app.use('/',videoRouter);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})