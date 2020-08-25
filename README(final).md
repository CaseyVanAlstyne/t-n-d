
# t-n-d

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description
  
This is gameified version of a classic to-do application, which rewards users based on getting stuff done.

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
  
* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation 

To install necessary dependencies, run the following command: 

```

npm install

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

```

## Usage

Once downloaded, in the project directory, you can run:
### `npm start`

The user will create a profile and log into the application. The user will entereveryday tasks as dailies and one-time to-do's as quests.  As tasks are completed, the user will click the complete button, which will add experience points to the user or the user can delete tasks as necessary. Quests and dailies that are not completed by the due date will reduce the user's health. As the user accumulates experience points, the user can read higher levels, otherwise if the user does not complete tasks, the user can die.

## License

This project is licensed under the MIT license.

## Contributing 

To contribute the repo, the user forks the repo, makes changes, pushes changes and creates a pull request to the main repo.

## Tests 

To run tests, run the following command:

```

npm test

```

## Questions

If you have any questions about the repo, contact Julia Hopkins, Casey VanAlstyne, William VanHook, or Sean Walmer directly at jlhopkins18@gmail.com, caseywvanalstyne@gmail.com, wmvanhook@gmail.com or sean.walmer@outlook.com.

