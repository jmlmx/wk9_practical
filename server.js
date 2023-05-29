const express = require("express")
const port = 3000
const app = express()

app.get('/greeting', (req, res) => {
    res.send("Hello Stranger")
})

app.get('/greeting/:name', (req, res) => {
    res.send(`Wow! Hello there, ${req.params.name}!`)
})


app.listen(port, () => {
    console.log(`The Port at ${port} is ready n' waiting...`)
})