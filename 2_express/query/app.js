const express = require("express");

const PORT = 3000;

const app = express();

app.get("/", (req, res)=>{
  res.json({message: "hello from server!"})
})

app.get("/search", (req, res) => {
  console.log("post req")
  const { name, age } = req.query; // Extract 'name' and 'age' from the query string

  // Log the parameters to verify they are being parsed
  console.log(`Name: ${name}, Age: ${age}`);

  // Respond with a JSON object
  if (!name || !age) {
    return res
      .status(400)
      .json({ error: "Both 'name' and 'age' are required" });
  }

  res.json({
    message: `Hello ${name}, your age is ${age}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
