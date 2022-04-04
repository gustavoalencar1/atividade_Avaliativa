const express = require('express')
const app = express()
const port = 8000;
// ROTA 

app.get('/', (req , res) =>{
    res.send('ROTA ACESSADA COM SUCESSO!!!')
})

app.listen(port , () =>{
    console.log('SERVIDOR RODANDO!')

})
