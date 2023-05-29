const express = require("express")
const port = 3000
const app = express()

app.get('/greeting', (req, res) => {
    res.send("Hello Stranger")
})

app.get('/greeting/:name', (req, res) => {
    res.send(`Wow! Hello there, ${req.params.name}!`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = req.params.tipPercentage * .01
    let finalTip = req.params.total * (1 * tip)
    res.send(`Your tip of ${req.params.tipPercentage}% on a bill of $${req.params.total} is $${finalTip}.`)
})


app.listen(port, () => {
    console.log(`The Port at ${port} is ready n' waiting...`)
})