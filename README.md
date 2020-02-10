# typescriptExpressApp

Express App with Typescript

(Using the Traversy Media short youtube tutorial - https://www.youtube.com/watch?v=zRo2tvQpus8)

Typescript docs (https://www.typescriptlang.org/docs/handbook/basic-types.html)

* Install Typescript globally if not already installed.

  npm i -g typescript

* Will give you a tsc (typescript compiler), can check version with:

  tsc -v
  or
  tsc -version

* To create a templated typescript config file (tsconfig.json):

  tsc --init

  (you can do this manually and only add in what you want, but this file with give you everything)

* Go to the config file and change a couple of settings

  target => change to es6 (this will then make any js compiled files use es6 instead of es5 which is currently is set to)

  outDir => output directly - where our compiled javascript will go (add folder name dist)

  rootDir => root directory - where the typescript files will be stored (add folder src)

  moduleResolution => uncomment this as we are using node

* Create folder called src

* Create a package.json
  npm init

* Install express
  npm i express

* Install dev dependancies
  npm i -D typescript ts-node nodemon @types/node @types/express

* In package.json we need to update some of the scripts:
  start: node dist/app.js
  (Will run the actual compiled javascript, so we need to tell it where to find it)
  dev: nodemon src/app.ts
  build: tsc -p .
  (will compile typescript into the dist folder)

* Create an app.ts file in the src folder to create a basic express server :

      import express from 'express'

      const app = express()

      app.get('/', (req, res) => {
        res.send('Hello World')
      })

      app.listen(5000, () => {
        console.log('Hello from the server side!')
      })

* If you do npm run dev, nodemon should be listening for the app.ts file so will start the server. So starting the server and visiting 'http://localhost:5000/' should show 'Hello World'

* You can also add in types from express to the server file:

      import express, { Application, Request, Response } from 'express'

      const app: Application = express()

      app.get('/', (req: Request, res: Response) => {
        res.send('Hello World')
      })

      app.listen(5000, () => {
        console.log('Hello from the server side!')
      })

* Once ready to compile

  npm run build

Which creates the dist filder and app.js file

* Once ready you can do the usual npm start which will now run the compiled app.js file and start the server.


Adding ejs

* npm install ejs

* add to app.ts

  app.set('view engine', 'ejs')

  app.get('/example', (req, res) => {
      res.render('example')
  })

* create views folder

* create example.ejs file and file with html content.

* npm run build to rebuild server file

* npm start to start server.
