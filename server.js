const express = require("express")
const port = 3000
const app = express()

//Greeting
app.get('/greeting', (req, res) => {
    res.send("Hello Stranger!")
})

//Specific Greeting
app.get('/greeting/:name', (req, res) => {
    res.send(`Wow! Hello there, ${req.params.name}!`)
})

// Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = req.params.tipPercentage * .01
    let finalTip = req.params.total * (1 * tip)
    res.send(`Your tip of ${req.params.tipPercentage}% on a bill of $${req.params.total} is $${finalTip}.`)
})

//Magic 8-Ball
app.get('/magic/:phrase', (req, res) => {
    answerArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    randomAnswer = answerArray[Math.floor(Math.random() * answerArray.length)]
    res.send(`Your Question: ${req.params.phrase}?
    <h1>${randomAnswer}</h1>`)
})

//Fibonacci - Hope this is right
app.get('/fibonacci/:num', (req, res) => {
    const fibSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765,10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155]
    const numInt = Number(req.params.num)
    if (fibSequence.includes(numInt)) {
        res.send("Very good. It is Fibonacci.")
    }else {
        res.send('I can tell this is not a fibonacci number.')
    }
})


app.listen(port, () => {
    console.log(`The Port at ${port} is ready n' waiting...`)
})