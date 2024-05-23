## Development Challenge for Node.js

This API is developed for the Nubceo. The following technologies were used:

```json
{
  "dotenv": "^16.4.5",
  "express": "^4.19.2",
  "jsonwebtoken": "^9.0.2",
  "mysql2": "^3.9.7",
  "sequelize": "^6.37.3"
}
```

## Install and run

```
  git clone https://github.com/feblesariel/nubceo_challenge.git
```

*Create the database with the script inside the "db" folder.

*Create a .env file at the root of the project and add the environment variables.

NAME=test<br>
PASS=test<br>
JWT_SECRET=test

```
  npm install
```
```
  npm start
```

## Endpoints

### Get Token

- **URL:** `POST /api/token`
- **Description:** This endpoint is used to obtain the JWT access token.
- **Input Example:**
```json
{
  "username": "test",
  "password": "test"
}
```
- **Input Example:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNjI2NDc1OTM3LCJleHAiOjE2MjY0NzU5NzN9.9dFdTWycMCw-M7jAIXmGYg9NBKMQY0vFqfvCN2WPL5E"
}
```

### Get Movies (requires token)

- **URL:** `GET /api/movies`
- **Description:** This endpoint is used to get a list of movies.
- **Optional Query Parameters:** Optional Query Parameters: Filters and sorting can be applied to the list of movies.
- **Input Example:**
```json
{
  "filterField": "title",
  "filterValue": "Jurassic Park"
}
```
- **Output Example:**
```json
{
    "count": 1,
    "data": [
        {
            "movie_id": 1,
            "title": "Jurassic Park",
            "release_year": 1993,
            "director_id": 1
        }
    ]
}
```

### Get TV Show Episode (requires token)

- **URL:** `GET /api/episode`
- **Description:** This endpoint is used to obtain information about a specific episode of a TV show, including the director.
- **Optional Query Parameters:** Filters and sorting can be applied to the requested episode.
- **Input Example:**
```json
{
  "tv_show_name": "Breaking Bad",
  "episode_number": 1,
  "season_number": 2
}
```
- **Output Example:**
```json
{
    "count": 1,
    "data": [
        {
            "tv_show_name": "Breaking Bad",
            "director_name": "Vince Gilligan",
            "season_number": 2,
            "episode_number": 1,
            "title": "Seven Thirty-Seven"
        }
    ]
}
```

### Add Movie (requires token)

- **URL:** `POST /api/addmovie`
- **Description:** This endpoint is used to add a movie.
- **Input Example:**
```json
{
  "title": "The Dark Knight",
  "director": "Christopher Nolan",
  "release_year": 2008
}

```