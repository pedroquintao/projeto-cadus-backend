import express from 'express';
import connectOnDatabase from './config/dbConect.js';
import routes from "./routes/index.js"
import cors from "cors"

const connection = await connectOnDatabase();

connection.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

connection.once("open", () => {
    console.log("Conexão com o banco realizada com sucesso!")
})

const app = express();

app.use(cors());

routes(app);

export default app;