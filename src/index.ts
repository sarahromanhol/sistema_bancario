import express, { Express, Request, Response } from 'express'
import cors from "cors"
import { accounts } from './accounts'

const app: Express = express()

app.use(express.json())
app.use(cors())


app.post("users/create", (req: Request, res: Response) => {
    try {
        // validar as entrtadas da req
        //consultar ou alterar a base de dados

        const { name, CPF, dateOfBirthAsString } = req.body

        // tratando dados de dateOfBirth

        const [day, month, year] = dateOfBirthAsString.split("/")

        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

        accounts.push({
            name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement: []
        })

        // validar os resultados da consulta
        // enviar a resposta
    } catch (error) {

    }
})


app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})