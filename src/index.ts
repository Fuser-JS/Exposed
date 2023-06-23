import express from "express";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Express + Typescript server");
});

app.listen(port, () => {
    console.log(`Server go brrr at http://localhost:${port}`);
});