const express = require('express');
const path =require('path');


const app = express();
app.use(express.urlencoded({extended: true}))


app.use('/user', require('./router/user'));
app.use('/dep', require('./router/dep') );
app.use(express.json());


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'));
// const db = require('./models');
const PORT = process.env.PORT || 3000;
// app.use(express.urlencoded({extended:true}));
// app.use(bodyParser.json());





// db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on: http://localhost:${PORT}`);
    })
// })
