module.exports = {
  user: "Scooby_User", // Replace with your SQL Server login username
  password: "DoobyDo", // Replace with your SQL Server login password
  server: "localhost",
  database: "Scooby",
  trustServerCertificate: true,
  options: {
    port: 1433, // Default SQL Server port
    connectionTimeout: 60000, // Connection timeout in milliseconds
  },
};