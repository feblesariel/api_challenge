## Install and run

```
  git clone https://github.com/feblesariel/nubceo_challenge.git
```

*Create the database with the script inside the "db" folder.

```
  npm install 
```
```
  npm start    
```

Create a .env file at the root of the project and add the environment variables.

NAME=test
PASS=test
JWT_SECRET=test

## Endpoints

### Get Token

- **URL:** `POST /api/token`
- **Description:** This endpoint is used to obtain the JWT access token.
- **Input Example:**
```json
{
  "username": "testuser",
  "password": "testpassword"
}
```
- **Input Example:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNjI2NDc1OTM3LCJleHAiOjE2MjY0NzU5NzN9.9dFdTWycMCw-M7jAIXmGYg9NBKMQY0vFqfvCN2WPL5E"
}
```

### Get Movies

- **URL:** `GET /api/movies`
- **Description:** This endpoint is used to obtain the JWT access token.
- **Input Example:**
```json
{
  "username": "testuser",
  "password": "testpassword"
}
```
- **Output Example:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaWF0IjoxNjI2NDc1OTM3LCJleHAiOjE2MjY0NzU5NzN9.9dFdTWycMCw-M7jAIXmGYg9NBKMQY0vFqfvCN2WPL5E"
}
```

### Obtener Películas

- **URL:** `GET /api/movies`
- **Descripción:** This endpoint is used to get a list of movies.
- **Descripción:** Optional Query Parameters: Filters and sorting can be applied to the list of movies.
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





### Obtener Episodio de un Programa de Televisión

- **URL:** `GET /api/episode`
- **Descripción:** Este endpoint se utiliza para obtener la información de un episodio específico de un programa de televisión, incluido el director.
- **Parámetros de consulta opcionales:** Se pueden aplicar filtros y ordenación al episodio solicitado.
- **Respuesta exitosa (200 OK):** Retorna la información del episodio solicitado.
- **Respuesta de error:** Se envía una respuesta de error detallada.

### Obtener Episodio de un Programa de Televisión

- **URL:** `POST /api/addmovie`
- **Descripción:** Este endpoint se utiliza para agregar una pelicula.
- **Parámetros de consulta opcionales:** Se pueden aplicar filtros y ordenación al episodio solicitado.
- **Respuesta exitosa (200 OK):** Retorna la información del episodio solicitado.
- **Respuesta de error:** Se envía una respuesta de error detallada.
