const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/notifications", (req, res) => {
    res.send({
        network: parseInt(Math.random() * 100),
        messages: parseInt(Math.random() * 100),
        notifications: parseInt(Math.random() * 100)
    })
})

app.listen(port, () => {
    console.log(`App is Listening on port http://localhost:${port}`)
})