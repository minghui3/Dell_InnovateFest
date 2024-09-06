const Booking = require("../models/booking");
const Session = require("../models/session");

const createBooking = async (req, res) => {
    try {
        const { sessionId, clientId } = req.body;

        const bookingExist = await Booking.getBookingBySessionAndClientIds(sessionId, clientId);

        if (bookingExist) {
            res.status(405).json({
                message: `Failed to create booking, booking already exists.`
            });
            return;
        }

        const createBooking = await Booking.createBooking(sessionId, clientId);

        if (!createBooking) {
            res.status(500).json({
                message: `Failed to create booking.`
            });
            return;
        }

        res.status(201).json({
            message: `Booking with ID ${createBooking.bookingId} has been created successfully`,
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

const cancelBookingByBookingId = async (req, res) => {
    try {
        const { bookingId } = req.params;

        const cancelBooking = await Booking.cancelBookingByBookingId(bookingId);

        if (!cancelBooking) {
            res.status(405).json({
                message: `Failed to cancel booking, invalid bookingId.`
            });
            return;
        }

        res.status(200).json({
            message: `Booking with ID ${createBooking.bookingId} has been cancelled successfully`,
            booking: cancelBooking
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

const viewBookingsByClientId = async (req, res) => {
    try {
        const { clientId } = req.params;

        const viewBookings = await Booking.viewBookingsByClientId(clientId);

        if (!viewBookings) {
            res.status(500).json({
                message: `Failed to get client's bookings.`
            });
            return;
        }

        res.status(200).json({
            message: `Bookings of client retrieved successfully`,
            bookings: viewBookings
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
    cancelBookingByBookingId,
    viewBookingsByClientId,
}