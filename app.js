const express = require("express");
const sql = require("mssql"); // Assuming you've installed mssql
const dbConfig = require("./dbConfig");
const OpenAI = require('openai');
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default port
const staticMiddleware = express.static("public");

// Include body-parser middleware to handle JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For form data handling
app.use(staticMiddleware);


// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: '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',
  baseURL: 'https://integrate.api.nvidia.com/v1',
});

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to handle chat requests
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "meta/llama3-70b-instruct",
      messages: [{ "role": "user", "content": message }],
      temperature: 0.2,
      top_p: 0.7,
      max_tokens: 1024,
      stream: false, // Change to false to get complete response in one go
    });

    // Extract and send the response back to frontend
    const responseText = completion.choices[0]?.message?.content || '';
    res.json({ response: responseText });
  } catch (error) {
    console.error('Error during completion:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

// Close the connection pool on SIGINT signal
process.on("SIGINT", async () => {
  console.log("Server is gracefully shutting down");
  // Perform cleanup tasks (e.g., close database connections)
  await sql.close();
  console.log("Database connection closed");
  process.exit(0); // Exit with code 0 indicating successful shutdown
});