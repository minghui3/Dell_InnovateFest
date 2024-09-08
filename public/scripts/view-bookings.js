document.addEventListener('DOMContentLoaded', async function () {

    const accountId = "ACC00002"
    // Fetch Patient's notifications
    const fetchbookings = await fetch(`/api/bookings/${accountId}`, {
        method: 'GET'
    });

    // populate notifications
    const bookingsJson = await fetchbookings.json();
    const bookings = bookingsJson.bookings;
    console.log(bookingsJson);
    console.log(bookings);

    if (bookings && bookings.length > 0) {
        for (const booking of bookings) {
            // Convert booking.SessionDate to a readable format
            var sessionDate = new Date(booking.SessionDate);
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            var formattedDate = sessionDate.toLocaleDateString('en-US', options);

            var bookingElement = document.createElement("div");
            bookingElement.className = "booking-card";

            var infoElement = document.createElement("div");
            infoElement.className = "info";

            var labelElement1 = document.createElement("label");
            labelElement1.textContent = "Time: ";
            labelElement1.appendChild(document.createTextNode(booking.SessionTime));
            labelElement1.appendChild(document.createElement("br"));

            var labelElement2 = document.createElement("label");
            labelElement2.textContent = "Date: ";
            labelElement2.appendChild(document.createTextNode(formattedDate));
            labelElement2.appendChild(document.createElement("br"));

            var labelElement3 = document.createElement("label");
            labelElement3.textContent = "Location: ";
            labelElement3.appendChild(document.createTextNode(booking.SessionLocation));
            labelElement3.appendChild(document.createElement("br"));

            var labelElement4 = document.createElement("label");
            labelElement4.textContent = "Status: ";
            var labelElement4text = document.createElement("label");

            if (booking.BookingStatus === "Cancelled" || booking.BookingStatus === "Absent") {
                labelElement4text.style.color = "red";
            } else {
                labelElement4text.style.color = "green";
            }

            labelElement4text.appendChild(document.createTextNode(booking.BookingStatus));
            labelElement4.appendChild(labelElement4text);

            infoElement.appendChild(labelElement1);
            infoElement.appendChild(labelElement2);
            infoElement.appendChild(labelElement3);
            infoElement.appendChild(labelElement4);

            var bookingName = document.createElement("h2");
            bookingName.textContent = `${booking.SessionDescription}`;

            // potential cancel button
            /*
            var exitElement = document.createElement("div");
            exitElement.className = "exit-box";
            exitElement.appendChild(document.createTextNode("Cancel Booking"))
            */

            bookingElement.appendChild(bookingName);
            bookingElement.appendChild(infoElement);

            document.getElementById("bookings-list").appendChild(bookingElement);
        }
    } else {
        var bookingElement = document.createElement("div");
        bookingElement.className = "booking-card";

        var bookingName = document.createElement("h2");
        bookingName.textContent = `You have no bookings`;

        bookingElement.appendChild(bookingName);
        document.getElementById("bookings-list").appendChild(bookingElement);

    }
});