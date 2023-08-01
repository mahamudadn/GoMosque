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
__JavaScript__: The programming language used for both frontend and backend development.
__React:__ A predictable state container for JavaScript apps. It manages the   app's state and enables centralized data management.
react-charts2: javascript library that handles charts.
Redux Saga: A library for managing side effects in Redux applications. It handles asynchronous actions, such as API calls.
Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine. It provides the backend environment for the app.
Express.js: A minimal and flexible Node.js web application framework. It handles routing and server-side logic.
CSS: The styling language used to design the app's user interface.
HTML: The markup language used to structure the app's content.
SQL: The language used for managing the app's database, allowing for efficient storage and retrieval of game information.

**Author**
Mahamud Aden

**Acknowledgments**
Prime Digital Academy  Instructors
Liz Kerber
Dane Smith
Emma Stout
Cohort Mates

