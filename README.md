# Express API Demo

This is a demo Express API that was created for the purpose of teaching Software Engineering Club members how APIs work and how to develop one.

## Requirements

You will need to have the following installed to run this app:

1. [NodeJS](https://nodejs.org/en/download/)
2. [Postman](https://www.postman.com/downloads/)
3. Optional [Visual Studio Code](https://code.visualstudio.com/download)

## Running the App

Open the command line or terminal and navigate to the root of this project (where this README is located). Type the following 
to install the various dependencies you need to run the project:

```
$ npm install
```

If you don't have the 'npm' command in your terminal/console, then you have not downloaded and installed NodeJS or there was a problem with your installation.

You can then type the following to start the app from the terminal/console:

```
$ npm start
```

Use Postman to test the various routes that are in the API, the base URL should be [http://localhost:3000](http://localhost:3000)

## Hero Datatype

Field | Type
--- | ---
id | String
name | String
level | Number
class | String


JSON Example:

```
{
    "id": "1",
    "name": "The Black Arrow",
    "level": 20,
    "class": "rogue"
}
```