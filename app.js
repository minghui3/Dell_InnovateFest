const express = require("express");
const sql = require("mssql"); // Assuming you've installed mssql
const dbConfig = require("./dbConfig");

// controllers
const bookingController = require("./controllers/bookingController");

// middleware
// const validateBooking = require("./middleware/validateBooking")

const app = express();
const staticMiddleware = express.static("public");

app.use(staticMiddleware);

// routes
app.post("/api/booking", bookingController.createBooking)

const port = process.env.PORT || 3000; // Use environment variable or default port

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