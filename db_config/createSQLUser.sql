-- Connect to the master database to create the login
USE master;
GO

-- Create a login for the user
CREATE LOGIN Scooby_User WITH PASSWORD = 'DoobyDo';
GO

-- Grant the sysadmin role to the login (TOBECHANGEDWHENIFIGUREOUTWHATSPECIFICROLESTOGIVELMFAO)
ALTER SERVER ROLE sysadmin ADD MEMBER Scooby_User;
GO