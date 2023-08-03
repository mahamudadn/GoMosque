**GoMosque**

GoMosque is a comprehensive prayer tracking application designed for Muslims, utilizing JavaScript, React, Redux, React-Chartjs2, Sagas, NodeJs, Axios, Express, SQL, MUI, and CSS. With GoMosque, users can easily add their daily prayers, monitor their mosque prayers, reflect on their commitment to the second pillar of Islam (prayer), and evaluate their 7-day prayer history through a bar chart visualization.

**Getting Started**

__Prerequisites__
- Node.js: Ensure you have Node.js installed on your system.
- PostgresSQL: Make sure you have PostgreSQL set up.

**Installation and Setup**
1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Create a PostgreSQL database named `prayer_track_app`.
4. Copy the SQL query from the `database.sql` file and execute it in your `prayer_track_app` database to create the necessary tables.
5. Update the database connection settings in `pool.js` if your PostgreSQL server is running on a different port than the default (5432).


**Running the Application**
1. Run `npm start` to start the Node.js server.
2. The application should now be accessible at `http://localhost:3000` in your web browser.


**Usage Instructions**
- Once the application is running, you can add your daily prayers by clicking on the appropriate buttons and filling in the required details.
- You can monitor your mosque prayers and evaluate your 7-day prayer history through the bar chart visualization on the dashboard.

**Built With**
● JavaScript: The programming language used for both frontend and backend development.
● React:A predictable state container for JavaScript apps. It manages the   app's state and enables centralized data management.
● react-charts2: javascript library that handles charts.
● Redux Saga: A library for managing side effects in Redux applications. It handles asynchronous actions, such as API calls.
● Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine. It provides the backend environment for the app.
● Express.js: A minimal and flexible Node.js web application framework. It handles routing and server-side logic.
● CSS: The styling language used to design the app's user interface.
● SQL: The language used for managing the app's database, allowing for efficient storage and retrieval of game information.

**Author**
Mahamud Aden

**Acknowledgments**
Prime Digital Academy  Instructors
Liz Kerber
Dane Smith
Emma Stout
Cohort Mates

# iffy RSS

iffy RSS is a web app that I created so I could aggregate all of my online
browsing into one place. The underlining way of gathering relevant information
is using RSS 2.0. The goal of this project is to have a semi-live test bed
where I can implement things to use new skills that I develop in my career as a
software engineer. 

## Getting Started


### Prerequisites
    
    Node JS
    PostgresSQL


### Installing
1. Clone repository 
2. Run `npm install`
3. Create a database with the name `iffy_rss`
4. Copy in the `CREATE TABLE` query that is in the `database.sql` file.
5. The database is set up to run on port `5432` by default change this in the
   `pool.js`
6. Run `npm start`


## Built With

* [React](https://react.dev/) - JS Library
* [Redux](https://redux.js.org/) - JS Library
* [Express](https://expressjs.com/) - JS Framework
* [Axios](https://axios-http.com/) - JS Library
* [Node](https://nodejs.org/en) - Runtime Enviorment
* [RSS Parser](https://www.npmjs.com/package/rss-parser) - Used to generate RSS Feeds
* [PostgresSQL](https://www.postgresql.org/) - Datebase
* [Terminal CSS](https://terminalcss.xyz/) - CSS Library 


## Author

* **Isaac Faulkner**
  [50hp](https://github.com/50hp)


## Acknowledgments

* Prime Digital Academy FSE Instructors
    - [Liz Kerber](https://github.com/emkerber)
    - [Dane Smith](https://github.com/DoctorHowser) 
    - [Emma Stout](https://github.com/emmastout01)

* Cohort Mates


















