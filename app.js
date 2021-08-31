require('dotenv').config()

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({
    origin: [process.env.CORS_ORIGIN || null],
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public'));

app.get(
    "/", (req, res) => {
      res.status(200).json({
          test: true
      })
    }
);

app.listen(process.env.PORT || 3131, () => {
    console.log("Servidor escutando na porta 3131...")
});

