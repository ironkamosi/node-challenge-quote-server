// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)

//START OF YOUR CODE...
app.get("/", function (request, response) {
  const message = `<h1> Hello welcome to my quotes api</h1>
  <h2>List of content</h2>
  `;
  response.send(message);
});
//l
app.get("/quotes", function (request, response) {
  response.send(quotes);
});

app.get("/quotes/random", function (request, response) {
  response.send(pickFromArray(quotes));
});

app.get("/quotes/search", function (req, res) {
  let term = req.query.term;
  res.send(searchQuery(term,quotes));
});

function searchQuery(word, quotes) {
  let filteredResult = quotes.filter(function (element) {
    if (element.quote.includes(word)) {
      return true;
    }
  });
  return filteredResult;ray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
// const listener = app.listen(process.env.PORT, function () {
//   console.log("Your app is l
}

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromAristening on port " + listener.address().port);
// });

const PORT = 3001;
app.listen(PORT, () => console.log(`Your app is listening ...${PORT}`));
