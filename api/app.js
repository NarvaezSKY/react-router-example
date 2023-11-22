import  Express  from "express";
import morgan from "morgan";
import cors from 'cors'
import './db.js'
import router from "./routes/user.routes.js";

const app=Express()

//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(Express.json())


const PORT=3000


app.listen(PORT, ()=>{
    console.log('ola')
})

app.use('/api', router)
