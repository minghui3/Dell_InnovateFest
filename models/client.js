const Account = require("./account");
const sql = require("mssql");
const dbConfig = require("../dbConfig");

class Client extends Account {
    constructor(id, name, email, password, creationDate, phoneNumber) {
        super(id, name, email, password, creationDate);
        this.phoneNumber = phoneNumber;
    }

    static async createClient(id, name, email, password, insertUnixTime, phoneNumber) {
        const connection = await sql.connect(dbConfig);
        const insertClientQuery = `
        INSERT INTO Client (ClientId, PhoneNumber) VALUES 
        ('@ClientId', '@PhoneNumber');`;

        const request = connection.request();

        // Set Request Inputs
        request.input('ClientId', id);
        request.input('PhoneNumber', phoneNumber);

        await request.query(insertClientQuery);

        connection.close();

        return new Client(id, name, email, password, insertUnixTime, phoneNumber)
    }

    static async getClientById(id) {
        const connection = await sql.connect(dbConfig);
        const getClientQuery = `
        SELECT *
        FROM Client
        WHERE ClientId = @ClientId
        `;

        const request = connection.request();

        // Set Request Inputs
        request.input('ClientId', id);

        await request.query(getClientQuery);

        connection.close();
    }

    static async getClientByEmail(email) {
        const connection = await sql.connect(dbConfig);
        const insertClientQuery = ``;

        const request = connection.request();

        // Set Request Inputs
        request.input();

        await request.query(insertClientQuery);

        connection.close();
    }
}

module.exports = Client;