const sql = require("mssql");
const dbConfig = require("../dbConfig");

class Booking {
    constructor(bookingId, sessionId, clientId, status) {
        this.bookingId = bookingId;
        this.sessionId = sessionId;
        this.clientId = clientId;
        this.status = status;
    }

    // Helper Function to get New ID -- Created by: Ethan Chew Ming Hong, Repurposed By Rafol Emmanuel Legaspi
    static async getNextBookingId(accountConnection) {
        const query = `SELECT * FROM Account WHERE AccountId=(SELECT max(AccountId) FROM Account);`
        const request = accountConnection.request();

        const result = await request.query(query);

        const incrementString = str => str.replace(/\d+/, num => (Number(num) + 1).toString().padStart(4, "0"));
        return incrementString(result.recordset[0].AccountId);
    }

    static async createBooking(sessionId, clientId) {
        const connection = await sql.connect(dbConfig);
        const newBookingId = await Booking.getNextBookingId(connection);
        const insertUnixTime = Math.floor(Date.now() / 1000);
        const status = "Confirmed";

        const query = `
            INSERT INTO Booking (BookingId, SessionId, ClientId, BookingStatus) VALUES 
            ('@BookingId', '@SessionId', '@ClientId', '@BookingStatus');
        `;

        const request = connection.request();

        request.input('BookingId', newBookingId);
        request.input('SessionId', sessionId);
        request.input('ClientId', clientId);
        request.input('BookingStatus', status);


        await request.query(query);

        connection.close();

        return new Booking(newBookingId, sessionId, clientId, status);
    }

}

module.exports = Booking;