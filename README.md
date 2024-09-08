# Photo Tagging Backend

This is a backend API for a photo-tagging application that allows users to create and retrieve character positions, validate their locations, and submit/view game scores. The backend is built using Express.js, Prisma ORM, and PostgreSQL.

## Features

- **Character Management**: Create and retrieve character positions on a photo.
- **Position Validation**: Validate if a character is located in the correct position within a certain pixel threshold.
- **Score Management**: Submit and retrieve player scores, ordered by time.

## Project Structure

- **Prisma (ORM)**: Prisma is used as the ORM to interact with a PostgreSQL database.
- **Express.js**: A lightweight web framework for API routes.
- **PostgreSQL**: The database used to store character and score data.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repo/photo-tagging-backend.git
    cd photo-tagging-backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up your environment variables by creating a `.env` file in the root directory:

    ```bash
    DATABASE_URL=your_postgresql_database_url
    PORT=5000
    ```

4. Migrate the database schema using Prisma:

    ```bash
    npx prisma migrate dev
    ```

5. Start the server:

    ```bash
    npm start
    ```

## API Endpoints

### Characters

#### Get All Characters

- **Endpoint**: `/api/characters`
- **Method**: `GET`
- **Description**: Retrieves a list of all characters.

#### Create a Character

- **Endpoint**: `/api/characters`
- **Method**: `POST`
- **Description**: Creates a new character with `name`, `xPosition`, and `yPosition`.
- **Body**:

    ```json
    {
      "name": "Character Name",
      "xPosition": 100,
      "yPosition": 200
    }
    ```

#### Validate Character Position

- **Endpoint**: `/api/characters/validate`
- **Method**: `POST`
- **Description**: Validates if a character is within a specified position threshold.
- **Body**:

    ```json
    {
      "characterName": "Character Name",
      "xPosition": 100,
      "yPosition": 200
    }
    ```

### Scores

#### Get All Scores

- **Endpoint**: `/api/scores`
- **Method**: `GET`
- **Description**: Retrieves a list of all scores, ordered by time (ascending).

#### Create a Score

- **Endpoint**: `/api/scores`
- **Method**: `POST`
- **Description**: Submits a new score.
- **Body**:

    ```json
    {
      "name": "Player Name",
      "time": 12345
    }
    ```

## Database Schema

The database schema is defined in `prisma/schema.prisma`.

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Character {
  id        Int      @id @default(autoincrement())
  name      String
  xPosition Int
  yPosition Int
  createdAt DateTime @default(now())
}

model Score {
  id        Int      @id @default(autoincrement())
  name      String
  time      Int      // Time in milliseconds
  createdAt DateTime @default(now())
}
```

## Dependencies

- **@prisma/client**: Prisma ORM for database operations.
- **cors**: Enables Cross-Origin Resource Sharing.
- **dotenv**: Loads environment variables.
- **express**: Framework for building the API.
- **pg**: PostgreSQL client for Node.js.
- **prisma**: Prisma ORM.
