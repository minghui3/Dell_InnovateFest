const sql = require("mssql");
const dbConfig = require("../dbConfig");

class Account {
    constructor(id, name, email, password, creationDate) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.creationDate = creationDate;

    }

    // Helper Function to get New ID -- Created by: Ethan Chew Ming Hong, Repurposed By Rafol Emmanuel Legaspi
    static async getNextAccountId(accountConnection) {
        const query = `SELECT * FROM Account WHERE AccountId=(SELECT max(AccountId) FROM Account);`
        const request = accountConnection.request();

        const result = await request.query(query);

        const incrementString = str => str.replace(/\d+/, num => (Number(num) + 1).toString().padStart(4, "0"));
        return incrementString(result.recordset[0].AccountId);
    }

    static async createAccount(name, email, password) {
        const connection = await sql.connect(dbConfig);
        const newAccountId = await Account.getNextAccountId(connection);
        const insertUnixTime = Math.floor(Date.now() / 1000);

        const query = `
            INSERT INTO Account (AccountId, AccountName, AccountEmail, AccountPassword, AccountCreationDate) VALUES
            (@AccountId, @AccountName, @AccountEmail, @AccountPassword, @AccountCreationDate);
        `;

        const request = connection.request();
        request.input('AccountId', newAccountId);
        request.input('AccountName', name);
        request.input('AccountEmail', email);
        request.input('AccountPassword', password);
        request.input('AccountCreationDate', insertUnixTime);

        await request.query(query);

        connection.close();

        return new Account(newAccountId, name, email, password, insertUnixTime);
    }

    static async getAccountWithEmail(email) {
        const connection = await sql.connect(dbConfig);

        const query = `
            SELECT *
            FROM Account 
            WHERE AccountEmail = @AccountEmail
        `;
        const request = connection.request();
        request.input('AccountEmail', email);

        const result = await request.query(query);
        connection.close();

        return result.recordset[0];
    }

}

module.exports = Account;