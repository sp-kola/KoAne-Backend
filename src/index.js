const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use((req, res, next) => {
   res.status(503).send("Welcome to koAne!")
})

app.use(express.json())

app.listen(port, () => {
    console.log('Server is up on port '+ port)
})