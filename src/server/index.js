const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

app.get('/test', (req,res) => {
    res.json({'message': "API back is linked to front successfully !"})    
});

app.listen(8080, () => {
    console.log('server is on')
})