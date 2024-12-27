# Todo App

A Todo app that helps track your day-to-day activities.

## Features

- User registration and login.
- Create, read, update, and delete (CRUD) operations for todos.
- Secure password storage using bcrypt.
- MongoDB for data storage.

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd todo
   npm install
   npm run dev
   ```

## Sample User Data

```json
{
  "fullName": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Sample Response

```json
{
  "success": true,
  "message": "User created successfully."
}
```