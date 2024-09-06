const sql = require("mssql");
const dbConfig = require("../dbConfig");

class Session {
    constructor(sessionId, staffId, date, time, location, slotsMax) {
        this.sessionId = sessionId;
        this.staffId = staffId;
        this.date = date;
        this.time = time;
        this.location = location;
        this.slotsMax = slotsMax;
    }

    // Helper Function to get New ID -- Referenced From: Ethan Chew Ming Hong, Repurposed By Rafol Emmanuel Legaspi
    static async getNextSessionId(sessionConnection) {
        const query = `SELECT * FROM Booking WHERE BookingId=(SELECT max(BookingId) FROM Booking);`
        const request = sessionConnection.request();

        const result = await request.query(query);

        const incrementString = str => str.replace(/\d+/, num => (Number(num) + 1).toString().padStart(5, "0"));
        return incrementString(result.recordset[0].SessionId);
    }

    static async createSession(staffId, date, time, location, slots) {
        const connection = await sql.connect(dbConfig);
        const newSessionId = await Booking.getNextSessionId(connection);
        const status = "Confirmed";

        /*
        console.log("bookngId: ", newBookingId);
        console.log("length of bookingId: ", newBookingId.length);
        console.log("sessionId: ", sessionId);
        */

        const query = `
            INSERT INTO Session (SessionId, StaffId, SessionDate, SessionTime, SessionLocation, SessionSlotsMax) VALUES 
            (@SessionId, @StaffId, @SessionDate, @SessionTime, @SessionLocation, @SessionSlotsMax);
        `;

        const request = connection.request();

        request.input('SessionId', newSessionId);
        request.input('StaffId', staffId);
        request.input('SessionDate', date);
        request.input('SessionTime', time);
        request.input('SessionLocation', location);
        request.input('SessionSlotsMax', slots);


        await request.query(query);

        connection.close();

        return new Session(newSessionId, staffId, date, time, location, slots);
    }


}

module.exports = Session;