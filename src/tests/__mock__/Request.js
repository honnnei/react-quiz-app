const fs = require('fs');

const request = ('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple&encode=base64') = new Promise((resolve, reject) => {
  // Get userID from supplied url string
//   const lastSlash = url.lastIndexOf('/')
//   const userID = url.substring(lastSlash + 1)
  // Load user json data from a file in de subfolder for mock data
  fs.readFile(`./src/tests/__mockData__/__mockData__.json`, 'utf8', (err, data) => {
    if (err) reject(err)
    // Parse the data as JSON and put in the key entity (just like the request library does)
    resolve({ entity: JSON.parse(data) })
  });
});

export default request;