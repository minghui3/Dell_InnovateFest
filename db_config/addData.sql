USE Scooby;

-- Insert data into Account table
INSERT INTO Account (AccountId, AccountName, AccountPassword, AccountEmail, AccountCreationDate) VALUES 
('ACC00001', 'Andy', 'Password123', 'Andy@mail.com', 20240901103000),
('ACC00002', 'Dexter', 'Password123', 'Dexter@minds.com', 20240901103000);

-- Insert data into Staff table
INSERT INTO Staff (StaffId) VALUES 
('ACC00001');

-- Insert data into Client table
INSERT INTO Client (ClientId, PhoneNumber) VALUES 
('ACC00002', '+65 9123 4567');

-- Insert data into Session table
INSERT INTO Session (SessionId, StaffId, SessionDate, SessionTime, SessionLocation, SessionSlotsMax) VALUES 
('SES00001', 'ACC00001', '2024-09-01', '10:00 AM', '123 Main St.', 10);

-- Insert data into Booking table
INSERT INTO Booking (BookingId, SessionId, ClientId, BookingStatus) VALUES 
('BKG00001', 'SES00001', 'ACC00002', 'Confirmed');

USE Master;
