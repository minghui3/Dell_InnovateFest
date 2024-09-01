const Joi = require("joi").extend(require('@joi/date'));

const validateBooking = (req, res, next) => {
    const schema = Joi.object({
        sessionId: Joi.string().length(8).required(),
        bookingId: Joi.string().length(8).required(),
    });

    const validation = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
        const errors = validation.error.details.map((error) => error.message);
        res.status(400).json({ message: "Validation error", errors });
        return;
    }

    next();
};

module.exports = validateBooking;