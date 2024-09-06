const Session = require("../models/session");

const createSession = async (req, res) => {
    try {
        const { staffId, date, time, location, slots } = req.body;

        const createSession = await Session.createSession(staffId, date, time, location, slots);

        if (!createSession) {
            res.status(500).json({
                message: `Failed to create booking.`
            });
            return;
        }

        res.status(201).json({
            message: `Session with ID ${createSession.sessionId} has been created successfully`,
            session: createSession
        });

    } catch {

    }

}

module.exports = {
    createSession
}
