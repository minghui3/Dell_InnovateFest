const express = require("express");
const sql = require("mssql"); // Assuming you've installed mssql
const bodyParser = require('body-parser');
const dbConfig = require("./dbConfig");

// controllers
const bookingController = require("./controllers/bookingController");
const sessionController = require("./controllers/sessionController")

// middleware
// const validateBooking = require("./middleware/validateBooking")

const app = express();
const staticMiddleware = express.static("public");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(staticMiddleware);

// routes

// booking routes
app.get("/api/bookings/:clientId", bookingController.viewBookingsByClientId)
app.put("/api/booking/cancel/:bookingId", bookingController.cancelBookingByBookingId)
app.post("/api/booking", bookingController.createBooking)

// session routes
app.post("/api/session", sessionController.createSession)


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