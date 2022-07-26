// import Express and route
import express from 'express';
import routes from './source/routes/route.js';


const app = express();
const PORT = 8000;
const HOST = '127.0.0.1';


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


routes(app);

// listen at port 8000
app.listen(PORT, HOST, function () {
    console.log(`Server started on http://${HOST}:${PORT}`);
});
