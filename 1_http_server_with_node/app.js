const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
  const { url, method } = req;

  // Set response headers
  res.setHeader("Content-Type", "application/json");

  // Routing logic
  if (url === "/" && method === "GET") {
    fs.appendFile("data.txt", "Hello from server\n", (err)=>{
      console.log("/something went wrong!\n")
    });
    res.end(JSON.stringify({ message: "Hello from server" }));
  } else if (url === "/user" && method === "GET") {
    fs.appendFile("data.txt", "Hi new user\n", (err) => {
      console.log("/user/something went wrong!\n");
    });
    res.end(JSON.stringify({ message: "Hi new User" }));

  } else {
    fs.appendFile("data.txt", "Error from server\n", (err) => {
      console.log(url + " something went wrong! 404");
    });
    res.statusCode = 404; // Not Found
    res.end(JSON.stringify({ message: "Something went wrong" }));
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
