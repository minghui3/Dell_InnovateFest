USE Scooby;

CREATE TABLE Account (
    AccountId VARCHAR(8),
    AccountName VARCHAR(255) NOT NULL,
    AccountPassword VARCHAR(255) NOT NULL,
    AccountEmail VARCHAR(255) NOT NULL,
    AccountCreationDate BIGINT NOT NULL,

	CONSTRAINT PK_Account PRIMARY KEY (AccountId)
);

CREATE TABLE Staff (
    StaffId VARCHAR(8) NOT NULL,
	
	CONSTRAINT PK_Staff PRIMARY KEY (StaffId),
	CONSTRAINT FK_Staff FOREIGN KEY (StaffId) REFERENCES Account(AccountId)
);

CREATE TABLE Client (
    ClientId VARCHAR(8) NOT NULL,
    PhoneNumber VARCHAR(50) NULL,
    CONSTRAINT PK_Client PRIMARY KEY (ClientId),
    CONSTRAINT FK_Client FOREIGN KEY (ClientId) REFERENCES Account(AccountId)
);

CREATE TABLE Session (
    SessionId VARCHAR(8) NOT NULL,
    StaffId VARCHAR(8) NOT NULL,
    SessionDate DATE NOT NULL,
    SessionTime VARCHAR(20) NOT NULL,
    SessionLocation VARCHAR(255) NOT NULL,
    SessionSlotsMax INT NOT NULL,

    CONSTRAINT PK_Session PRIMARY KEY (SessionId),
    CONSTRAINT FK_Session_Staff FOREIGN KEY (StaffId) REFERENCES Staff(StaffId)

);

CREATE TABLE Booking (
    BookingId VARCHAR(8) NOT NULL,
    SessionId VARCHAR(8) NOT NULL,
    ClientId VARCHAR(8) NOT NULL,
    BookingStatus VARCHAR(10) NOT NULL CHECK (BookingStatus IN ('Confirmed','Cancelled','Completed','Absent')),

    CONSTRAINT PK_Booking PRIMARY KEY (BookingId),
    CONSTRAINT FK_Booking_Session FOREIGN KEY (SessionId) REFERENCES Session(SessionId),
    CONSTRAINT FK_Booking_Client FOREIGN KEY (ClientId) REFERENCES Client(ClientId)

);

USE Master;