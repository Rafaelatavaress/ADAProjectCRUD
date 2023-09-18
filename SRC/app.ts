import express from "express";
import dotenv from "dotenv";
import { requestLoggerMiddleware, errorHandlerMiddleware } from "./middlewares/middlewares";


import cors from "cors";

import employeesRouter from "./routes/employeesRouter";
dotenv.config();


const app = express();

const port = process.env.PORT;

app.use(cors());

app.use(express.urlencoded({extended: false}));

app.use(express.json());


app.use("/employees", employeesRouter);
app.use(errorHandlerMiddleware); // Middleware para registrar as requisições
app.use(requestLoggerMiddleware);

    // Rota de boas-vindas
    app.get("/", (req, res) => {
    res.send("Bem-vindo à aplicação de gerenciamento de funcionários!");
    });

    

    // Inicia o servidor
    app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    });