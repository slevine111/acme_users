const path = require('path')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'))
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
