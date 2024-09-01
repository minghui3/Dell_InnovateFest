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


}

module.exports = Session;