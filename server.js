require ('dotenv').config();
const database = require('./config/database')
const port = process.env.PORT || 3000;
const routes = require('./routes');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

app.use('/api/v1', routes);


async function bootstrap() {
    try {
        await app.listen(port);
        await database();
        console.info(`server running into port: ${port}`)
    }catch (error) {
        throw new error (`server can't run: ${error}`);
        }
}
bootstrap()
    .catch(err => console.error(err));