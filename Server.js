const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const personRouter = require('./Routes/Person')

const app = express()

const port = 5000

app.use(express.json())
app.use('/api/person',personRouter)
ConnectDB()

app.listen(port, console.log(`app running on ${port}`))