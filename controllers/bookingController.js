const Booking = require("../models/booking");
const Session = require("../models/session");

const createBooking = async (req, res) => {
    try {
        const { sessionId, clientId } = req.body;

        const createBooking = await Booking.createBooking(sessionId, clientId);

        if (!createBooking) {
            res.status(500).json({
                message: `Failed to create booking.`
            });
            return;
        }

        res.status(201).json({
            message: `Booking with ID ${createBooking} has been created successfully`,
            booking: createBooking
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: "Error",
            message: "Internal Server Error - Scold Emmanuel",
            error: err
        });
    }
}

module.exports = {
    createBooking,
}