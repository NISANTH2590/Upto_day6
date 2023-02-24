const { Pool, Client } = require("pg");

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "firstdb",
  password: "1234",
  port: 5432,
};

const client = new Client(credentials);
client.connect();

async function clientDemo() {
  
    const now = await client.query("SELECT NOW()");
    await client.end();
    return now;
  }

async function poolDemo(){
console.log("Hello Nisanth this is from postgres");
}

  (async () => {
    const poolResult = await poolDemo();
    // console.log("Time with pool: " + poolResult.rows[0].id,poolResult.rows[0].name);
  
    const clientResult = await clientDemo();
    // console.log("Time with client: " + clientResult.rows[0]["now"]);
  })();

