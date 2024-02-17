Project Setup Guide
1. Download and Unzip the Folder
Download:
Begin by downloading the project folder from github.com/anoniz/SocialFlex.
Extract the contents of the folder to your preferred directory.

2. Install Dependencies
Navigate to Project Directory:
cd path/to/your/project OR just open SocialFlex Folder in your code editor directly.

Install Node Modules:
type "npm install"


3. Set Up Database
a. Install MySQL or any other RDBMS supported by sequelize. visit sequelize.org
b. Create Database if you haven't Created yet.


4. Configure Environment Variables
Rename the sample.env file to dev.env:
Update the values of DBNAME with your Database Name.
USERNAMEE with your Database User Name 
PASSWORD with your Database PASSWORD.

Also Open PgAdmin -> connect it -> go to schemas and create two schemas
1. user_schema 2. post_schema.
for other Databases i dont know the exact steps but you have to create
these two schemas with CLI or GUI tool.

5. Configure The JWT KEY 
Update Any Secret Key to "secret" in JWT Configurations.

6. Configure Port 
Give your desired value of port // by defualt its 5000

FOR Other Databases you have to Download this.
7. install proper driver for your Database.
# One of the following:
$ npm install --save pg pg-hstore / For PostgreSQL
$ npm install --save mysql2 / For MySQL
$ npm install --save mariadb / For Mariadb 
$ npm install --save sqlite3 / for SQLite 
$ npm install --save tedious # Microsoft SQL Server
$ npm install --save oracledb # Oracle Database

8. Run the Application
Start the Server:
npm run dev 

This will start your Node.js server.
Access the API:

Open your web browser or a tool like Postman
and access your API at http://localhost:3000 or the specified port in your .env file.

For any query Email Me at "abdullatifnizamani517@gmail.com"