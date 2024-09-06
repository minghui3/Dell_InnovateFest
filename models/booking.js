const sql = require("mssql");
const dbConfig = require("../dbConfig");

class Booking {
    constructor(bookingId, sessionId, clientId, status) {
        this.bookingId = bookingId;
        this.sessionId = sessionId;
        this.clientId = clientId;
        this.status = status;
    }

    // Helper Function to get New ID -- Referenced From: Ethan Chew Ming Hong, Repurposed By Rafol Emmanuel Legaspi
    static async getNextBookingId(bookingConnection) {
        const query = `SELECT * FROM Booking WHERE BookingId=(SELECT max(BookingId) FROM Booking);`
        const request = bookingConnection.request();

        const result = await request.query(query);

        const incrementString = str => str.replace(/\d+/, num => (Number(num) + 1).toString().padStart(5, "0"));
        return incrementString(result.recordset[0].BookingId);
    }

    static async createBooking(sessionId, clientId) {
        const connection = await sql.connect(dbConfig);
        const newBookingId = await Booking.getNextBookingId(connection);
        const status = "Confirmed";

        /*
        console.log("bookngId: ", newBookingId);
        console.log("length of bookingId: ", newBookingId.length);
        console.log("sessionId: ", sessionId);
        */

        const query = `
            INSERT INTO Booking (BookingId, SessionId, ClientId, BookingStatus) VALUES 
            (@BookingId, @SessionId, @ClientId, @BookingStatus);
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

    static async viewBookingsByClientId(clientId) {
        const connection = await sql.connect(dbConfig);

        const query = `
            SELECT *
            FROM Booking
            WHERE ClientId = @ClientId;
        `;

        console.log("ClientId: ", clientId);

        const request = connection.request();

        request.input('ClientId', clientId);

        const result = await request.query(query);

        connection.close();

        return result.recordset;
    }

    static async getBookingBySessionAndClientIds(sessionId, clientId) {
        const connection = await sql.connect(dbConfig);

        const query = `
            SELECT TOP 1 *
            FROM Booking
            WHERE ClientId = @ClientId AND SessionID = @SessionID;
        `;

        const request = connection.request();

        request.input('ClientId', clientId);
        request.input('SessionId', sessionId);

        const result = await request.query(query);

        connection.close();

        return result.recordset[0];

    }

    static async cancelBookingByBookingId(bookingId) {
        const connection = await sql.connect(dbConfig);
        const status = 'Cancelled';

        const query = `
            UPDATE Booking
            SET BookingStatus = @BookingStatus
            WHERE BookingId = @BookingId;
        `;

        const request = connection.request();

        request.input('BookingStatus', status);
        request.input('BookingId', bookingId);

        const result = await request.query(query);

        connection.close();

        return result.rowsAffected[0] === 1;
    }

}

module.exports = Booking;