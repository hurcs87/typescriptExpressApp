import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.set('view engine', 'ejs')

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

app.get('/example', (req, res) => {
    res.render('example')
})

app.listen(5000, () => {
  console.log('Hello from the server side!')
})
