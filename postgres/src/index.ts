import { Client } from 'pg';

async function connectToDB() {
    const client = new Client({
        // host: 'ep-curly-poetry-a54k3lr6.us-east-2.aws.neon.tech',
        // port: 5432,
        // database: 'trial',
        // user: 'trial_owner',
        // password: 'vVTJhrKYD8U2',
        // ssl: {
        //     rejectUnauthorized: false,
        // },

        connectionString: 'postgresql://trial_owner:vVTJhrKYD8U2@ep-curly-poetry-a54k3lr6.us-east-2.aws.neon.tech/trial?sslmode=require'
    });

    try {
        await client.connect();
        console.log("Connected");

        // Step 1: Drop the existing student table if it exists
        const dropTableQuery = 'DROP TABLE IF EXISTS student;';
        const dropTableQuery1 = 'DROP TABLE IF EXISTS candidate;';
        await client.query(dropTableQuery);
        await client.query(dropTableQuery1);
        console.log("Existing table dropped");

        // Step 2: Create the Student Table
        const createTableQuery = `
            CREATE TABLE student (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100),
                age INT,
                major VARCHAR(100)
            );
        `;
        const createTableQuery1 = `
            CREATE TABLE candidate (
                id SERIAL PRIMARY KEY,
                user_id INT,
                name VARCHAR(100),
                age INT,
                FOREIGN KEY(user_id) REFERENCES student(id) ON DELETE CASCADE
            );
        `;
        await client.query(createTableQuery);
        console.log("Table_Student created");
        await client.query(createTableQuery1);
        console.log("Table_Candidate created");

        // Step 3: Insert Data into the Student Table
        const insertDataQuery = `
            INSERT INTO student (name, age, major) 
            VALUES 
            ('Alice Johnson', 20, 'Computer Science'),
            ('Bob Smith', 22, 'Mathematics'),
            ('Charlie Brown', 21, 'Physics');
        `;
        const insertDataQuery1 = `
            INSERT INTO candidate (name, age) 
            VALUES 
            ('Alice Johnson', 20),
            ('Bob Smith', 22),
            ('Charlie Brown', 21);
        `;
        await client.query(insertDataQuery);
        await client.query(insertDataQuery1);

        // TO AVOID SQL INJECTION


        // const insertDataQuery = "INSERT INTO STUDENT (name,age,major) values ($1,$2,$3);"
        // // const values = [name, age, major];
        // const values1 = ["Adwaita", 22, "Computer Science"];
        // const values2 = ["Amvrin", 15, "Geography"];
        // const values3 = ["Soham", 32, "Commerce"];
        // await client.query(insertDataQuery, values1);
        // await client.query(insertDataQuery, values2);
        // await client.query(insertDataQuery, values3);
        console.log("Data inserted");

        // Step 4: Display the Data from the Student Table
        const selectQuery = 'SELECT * FROM student;';
        const selectQuery1 = 'SELECT * FROM candidate;';
        const res = await client.query(selectQuery);
        const res1 = await client.query(selectQuery1);
        console.log("Data from student table:");
        console.table(res.rows);
        console.table(res1.rows);


        // async function getData(name: string) {
        //     const query = 'select * from student where name = $1';
        //     const res = await client.query(query, [name]);

        //     if (res.rows.length > 0) {
        //         console.table(res.rows)
        //         // console.log(res.rows[0].age);

        //     }
        //     else {
        //         console.log("No Data Found");

        //     }
        // }


        // await getData("Adwaita");



    } catch (error) {
        console.error("Error: ", error);
    } finally {
        await client.end();
        console.log("Connection closed");
    }
}

connectToDB();
