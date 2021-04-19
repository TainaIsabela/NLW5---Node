const express = require("express");
const app = express();

app.get("/", (request, response) => {
    return response.send("olá NLW 05")
})
app.post("/users", (request,response)=>{
    return response.json({message: "Usuário salvo com sucesso!"})
})

app.listen(3333, () => console.log("Rodando na porta 3333"));
