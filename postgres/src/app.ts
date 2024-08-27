import { Client } from 'pg';


async function connectToDB() {
    const client = new Client({
        connectionString: 'postgresql://trial_owner:vVTJhrKYD8U2@ep-curly-poetry-a54k3lr6.us-east-2.aws.neon.tech/trial?sslmode=require'
    });
    try {

        await client.connect();
        console.log("Connected to DB");







        const dropTableUsers = "DROP TABLE IF EXISTS USERS"
        const dropTableAddresses = "DROP TABLE IF EXISTS ADDDRESSES"

        // await client.query(dropTableUsers)
        // await client.query(dropTableAddresses)

        // console.log("Existing Tables Dropped");


        const createTableUsers = `
    CREATE TABLE USERS (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email varchar(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `;


        const createTableAddresses = `
    CREATE TABLE ADDRESSES (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        street VARCHAR(100) NOT NULL,
        pincode VARCHAR(10),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES USERS(id) ON DELETE CASCADE
    );
    `;

        // await client.query(createTableUsers);
        // console.log("Users table created");
        // await client.query(createTableAddresses);
        // console.log("Addresses table created");


        const insertDataUsers = `
    INSERT INTO USERS (username, email,password)
    VALUES
    ('modakadwaita','am@gmail.com','abc123'),
    ('helenKeleer','kh@yahoo.co.us','123abc'),
    ('rogferdefer','rf@hotmail.com','32rfc43rf'),
    ('lessiposei','lm@cr7.com','12eef54t')
    ;`;

        const insertDataAddresses = `
    INSERT INTO ADDRESSES(user_id,city,country,street,pincode)
    VALUES
    (1,'kolkata','India','Kamardanga','711104'),
    (2,'delhi','Israel','Tel Aviv','234543'),
    (3,'gurgaon','India','Lassi Rd','1234567'),
    (4,'vellore','Germany','Millenium','877564');`;


        // await client.query(insertDataUsers);
        // await client.query(insertDataAddresses);

        const selectUsers = `SELECT * FROM USERS`;
        const selectAddresses = `SELECT * FROM ADDRESSES`;

        const resUsers = await client.query(selectUsers);
        const resAddresses = await client.query(selectAddresses);
        console.table(resUsers.rows);
        console.table(resAddresses.rows);

        const searchQuery = `Select USERS.username, USERS.email,ADDRESSES.city, ADDRESSES.street from USERS inner join ADDRESSES on USERS.id=ADDRESSES.user_id where USERS.id=2;`
        const resSearchQuery = await client.query(searchQuery);
        console.table(resSearchQuery.rows);




    } catch (error) {
        console.error((error));

    }
    finally {
        await client.end();
        console.log('Connection closed');

    }

}




connectToDB();


