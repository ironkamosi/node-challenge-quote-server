// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const cors = require("cors");
const app = express();
//load the quotes JSON
const quotes = require("./quotes.json");
app.use(express.static("quotes-frontend"));
app.use(cors());
// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)

//START OF YOUR CODE...
app.get("/", function (request, response) {
  try {
  const message = `<h1> Hello welcome to my inspirational quotes api</h1>
  <h2>List of contents</h2>
  <ul>
  <h3>Level 1 access the routes for the quotes<h3/>
  <br>
  <li>/quotes -returns ALL of the quotes, as JSON.</li>
  <li>/quotes/random - returns ONE of the quotes, picked differently at random each time it is requested.</li>
  </ul>
  `;
  response.send(message);  
  } catch (error) {
        console.log(error.message);
  }
  
});
//l
app.get("/quotes", function (request, response) {
  try {
      response.send(quotes);
  } catch (error) {
    console.log(error.message)
  }
});

app.get("/quotes/random", function (request, response) {
  try {
      response.send(pickFromArray(quotes));
  } catch (error) {
    console.log(error.message)
  }
});

app.get("/quotes/search", function (req, res) {
  try {
  let term = req.query.term.toLowerCase();
  res.send(searchQuery(term, quotes)); 
  } catch(error){
    console.log(error.message)
}
});

app.get("/echo", function (req, res) {
  try {
    let term = req.query.term.toLowerCase();
    res.send(`Your term is ${term}`);
  } catch (error) {
    console.log(error.message);
  }
});

function searchQuery(word, quotes) {
  let filteredResult = quotes.filter(function (element) {
    if (
      element.quote.toLowerCase().includes(word) ||
      element.author.toLowerCase().includes(word)
    ) {
      return true;
    }
  });
  return filteredResult;

  //Start our server so that it listens for HTTP requests!
  // const listener = app.listen(process.env.PORT, function () {
}

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromAristening on port " + listener.address().port);
// });

const PORT = 3001;
app.listen(PORT, () => console.log(`Your app is listening ...${PORT}`));
