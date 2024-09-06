const authorisedRoles = {
    // booking routes
    "/api/bookings/:clientId": ["client"],
    "/api/booking/cancel/:bookingId": ["client"],
    "/api/booking": ["client"],

    // session routes
    "/api/session": ["staff"],
}

module.exports = authorisedRoles;