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

app.get('/magic/:phrase', (req, res) => {
    answerArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    randomAnswer = answerArray[Math.floor(Math.random() * answerArray.length)]
    res.send(`Your Question: ${req.params.phrase}?
    <h1>${randomAnswer}</h1>`)
})


app.listen(port, () => {
    console.log(`The Port at ${port} is ready n' waiting...`)
})