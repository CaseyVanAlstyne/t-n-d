This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

A brief description of each package and the function it serves
--bcryptjs: used to hash passwords before we store them in our database

--body-parser: used to parse incoming request bodies in a middleware

--concurrently: allows us to run our backend and frontend concurrently and on different ports

--express: sits on top of Node to make the routing, request handling, and responding easier to write

--is-empty: global function that will come in handy when we use validator

--jsonwebtoken: used for authorization

--mongoose: used to interact with MongoDB

--passport: used to authenticate requests, which it does through an extensible set of plugins known as strategies

--passport-jwt: passport strategy for authenticating with a JSON Web Token (JWT); lets you authenticate endpoints using a JWT

--validator: used to validate inputs (e.g. check for valid email format, confirming passwords match)