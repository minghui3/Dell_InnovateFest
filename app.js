const express = require("express");
const mysql = require("mysql2/promise"); // Use mysql2
const dbConfig = require("./dbConfig");
const OpenAI = require('openai');
const bodyParser = require("body-parser");

// controllers
const bookingController = require("./controllers/bookingController");
const sessionController = require("./controllers/sessionController");

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default port
const staticMiddleware = express.static("public");

// Include body-parser middleware to handle JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For form data handling
app.use(staticMiddleware);

// Create a MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Test MySQL connection
app.get("/api/testmysql", (req, res) => {
  pool.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).send("Error executing query");
    }
    res.send(`Database connection successful! Test result: ${results[0].solution}`);
  });
});

// booking routes
app.get("/api/bookings/:clientId", bookingController.viewBookingsByClientId);
app.put("/api/booking/cancel/:bookingId", bookingController.cancelBookingByBookingId);
app.post("/api/booking", bookingController.createBooking);

// session routes
app.post("/api/session", sessionController.createSession);

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: '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',
  baseURL: 'https://integrate.api.nvidia.com/v1',
});

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
      stream: false,
    });

    // Extract and send the response back to frontend
    const responseText = completion.choices[0]?.message?.content || '';
    res.json({ response: responseText });
  } catch (error) {
    console.error('Error during completion:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Initialize Server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);

  // Test database connection
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Database connection failed:", err);
      return;
    }
    console.log("Established connection to Database");
    connection.release();
  });
});

// Close the connection pool on SIGINT signal
process.on("SIGINT", async () => {
  console.log("Server is gracefully shutting down");
  pool.end((err) => {
    if (err) {
      console.error("Error closing MySQL connection pool:", err);
    } else {
      console.log("Database connection pool closed");
    }
    process.exit(0); // Exit with code 0 indicating successful shutdown
  });
});