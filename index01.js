   
/*
      ########## RASCUNHOS ##########

    - Query params => meusite.com/users?name=diogenes&age=34  // Filtros
    - Route params => /users/2  // BUSCAR, DELETAR OU ATUALIZAR ALGO ESPECÍFICO
    - Request Body => { "name": "Diógenes", "age": 34}

    - GET                => Buscar informações no back-end
    - POST               => Criar informações no back-end
    - PUT / PATCH        => Alterar/Atualizar informações no back-end
    - DELETE             => Deletar informações no back-end

    - Middleware => INTERCEPTADOR => Tem o poder de para ou alterar dados da requisição

*/

  // const { id } = request.params
    //  console.log(id)
    // const {name, age, male, cidade, bairro, estado, pais, profissão, salario, time} = request.query // Destructuring assignment
   //return response.json({name, age, male, cidade, bairro, estado, pais, profissão, salario, time})
    
/*

  const express = require('express')

const port = 3000
const app = express()
app.use(express.json())


app.get('/users', (request, response) => {
      
     const { name, age } = request.body


      return response.json({ name, age})
})

app.listen(port, () => {
      console.log(`🚀 Server started on port ${port}`)
})

*/
