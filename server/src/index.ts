import express from "express"

const app: express.Application = express();

const PORT: number = Number(process.env.PORT) || 3001

app.get("/", (req, res) => {
    res.send("Hello World from TypeScript")
})

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})