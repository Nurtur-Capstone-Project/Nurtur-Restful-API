# Nurtur RESTful API

A RESTful API for user data management built with Node.js, Express, and MySQL. This API is designed with security and ease of use in mind.

## Features

-   **CRUD Operations**: Provides complete endpoints for Create, Read, Update, and Delete (CRUD) user data.
-   **Security**: Uses prepared statements to protect against SQL Injection attacks.
-   **Input Validation**: Implements basic server-side validation to ensure data integrity.
-   **Standardized Responses**: Uses a consistent JSON format for all successful and error responses.
-   **Configuration Management**: Centralized configuration for easy environment management.

## API Endpoints

Below is the documentation for each available endpoint.

### Get All Users

-   **Method**: `GET`
-   **Endpoint**: `/users`
-   **Description**: Retrieves all user records.
-   **Success Response Example (200 OK)**:
    ```json
    {
        "message": "GET all users successful",
        "data": [
            {
                "id": 1,
                "name": "John Doe",
                "email": "john@example.com",
                "address": "123 Main St"
            },
            {
                "id": 2,
                "name": "Jane Doe",
                "email": "jane@example.com",
                "address": "456 Oak Ave"
            }
        ]
    }
    ```

### Create New User

-   **Method**: `POST`
-   **Endpoint**: `/users`
-   **Description**: Creates a new user.
-   **Request Body**:
    ```json
    {
        "name": "John Doe",
        "email": "john@example.com",
        "password": "securepassword123",
        "address": "123 Main St"
    }
    ```
-   **Success Response Example (200 OK)**:
    ```json
    {
        "message": "CREATE new user successful",
        "data": {
            "name": "John Doe",
            "email": "john@example.com",
            "password": "securepassword123",
            "address": "123 Main St"
        }
    }
    ```
-   **Error Response Example (400 Bad Request)**:
    ```json
    {
        "message": "Request body is not valid",
        "error": "Name, email, and password are required"
    }
    ```

### Update User

-   **Method**: `PATCH`
-   **Endpoint**: `/users/:idUser`
-   **Description**: Updates a user's data by ID.
-   **Request Body**:
    ```json
    {
        "name": "John Doe Updated",
        "address": "456 New Ave"
    }
    ```
-   **Success Response Example (200 OK)**:
    ```json
    {
        "message": "UPDATE user successful",
        "data": {
            "id": "1",
            "name": "John Doe Updated",
            "address": "456 New Ave"
        }
    }
    ```

### Delete User

-   **Method**: `DELETE`
-   **Endpoint**: `/users/:idUser`
-   **Description**: Deletes a user by ID.
-   **Success Response Example (200 OK)**:
    ```json
    {
        "message": "Delete user successful",
        "data": null
    }
    ```

## Project Structure
```
/
├── src/
│   ├── config/         # Application configuration (database, env)
│   ├── controller/     # Business logic (request & response)
│   ├── middleware/     # Express middleware (e.g., logging)
│   ├── models/         # Database interaction (queries)
│   └── routes/         # API route definitions
├── .env.example        # Example environment variables
├── .gitignore
├── package.json
└── README.md
```

## Installation and Setup

1.  **Clone this repository:**
    ```sh
    git clone <URL_OF_YOUR_REPOSITORY>
    cd <DIRECTORY_NAME>
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Setup Environment Variables:**
    Copy the `.env.example` file to `.env`.
    ```sh
    cp .env.example .env
    ```
    Then, adjust the contents to match your database configuration.
    ```
    PORT=5000
    DB_HOST=localhost
    DB_USERNAME=root
    DB_PASSWORD=
    DB_NAME=your_database_name
    ```

4.  **Run the application:**
    ```sh
    npm start
    ```
    The server will run at `http://localhost:5000`.

## Tech Stack

-   **Node.js**: Runtime environment
-   **Express**: Web framework
-   **mysql2**: MySQL driver for Node.js
-   **dotenv**: Loads environment variables from a `.env` file
-   **nodemon**: Watches for file changes and restarts the server automatically
