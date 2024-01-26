const express = require('express');
const sequelize = require('./db/sequelize');
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


sequelize.sync({alter:true}).then(connection => {
    console.log("database connected success");
    app.listen(port, () => {
        console.log(`Server Started on port ${port}`);
    })
}).catch(err => {
    console.log("unable to conncect database ");
    console.log("Can't Start Server ");
    console.log(err);
})

