const express = require('express')
const app = express()

const port = 5000

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})
})

app.listen(port, () => {console.log("Server started on port " + port)})