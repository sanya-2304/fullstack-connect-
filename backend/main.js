import express from 'express'
import dotenv from 'dotenv';
// import cors from 'cors'
dotenv.config()
const app=express()
// app.use(cors({
//     origin:'http://localhost:5173',
//     methods: 'GET,POST', 
//     credentials: true, 
// }))
const port=process.env.PORT || 2018
app.get('/', (req, res)=>{
    res.send('<h1>server ready to serve</h1>')
})
app.get('/api/deets', (req, res)=>{
    const deets=[
        {
            name:"Sanya",
            age:22
        },
        {
            name:"Anurag",
            age:21
        },
        {
            name:"Kittu",
            age:19
        },
        
        {
            name:"Muma",
            age:47
        },
        {
            name:"Papa",
            age:52
        },
        {
            name:"bhua",
            age:57
        },
        {
            name:"class",
            age:'20'
        },
        {
            name:"class1",
            age:'201'
        },
        {
            name:"class12",
            age:'2018'
        }
    ]
    res.send(deets)
})
app.listen(port, ()=>console.log(`server running fine on ${port}`))