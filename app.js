//IMport the express module
import express from 'express';

//create an instance of an Express application
const app = express();

// Define the port number where our server will listen
const PORT = 3000;

// define the root path ('/')
app.get('/', (req, res) => {
    //send text response to the client
    res.send('Hola, Mundo!');
});

//start the server and tell it listen on the port
//specified above. note the backticks!
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
