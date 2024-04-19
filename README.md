## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

## Database Setup

1. Install MongoDB.
2. Start MongoDB server.
3. Create a database named `backend-xpct`.
4. You should have the GUI for mongo which is the mongodbcompass to check the db

## Running the Application

1. Run `nodemon .` to start the server.
2. The server will be running on `http://localhost:8000`.

## API Testing

You can test the CRUD APIs using tools like Postman or curl.

### Sample Requests and Responses

#### Create a User (POST /users)

Request:
```json
{
  "name": "weam fayad",
  "email": "weamfayad@outlook.com",
  "age": 24
}
