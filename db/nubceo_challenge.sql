CREATE DATABASE nubceo_challenge;

USE nubceo_challenge;

CREATE TABLE Director (
  director_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE Actor (
  actor_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE Movie (
  movie_id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  release_year INT NOT NULL,
  director_id INT NOT NULL,
  FOREIGN KEY (director_id) REFERENCES Director(director_id) ON DELETE CASCADE
);

CREATE TABLE TV_Show (
  show_id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  release_year INT NOT NULL,
  director_id INT NOT NULL,
  FOREIGN KEY (director_id) REFERENCES Director(director_id) ON DELETE CASCADE
);

CREATE TABLE Season (
  season_id INT PRIMARY KEY AUTO_INCREMENT,
  season_number INT NOT NULL,
  show_id INT NOT NULL,
  FOREIGN KEY (show_id) REFERENCES TV_Show(show_id) ON DELETE CASCADE
);

CREATE TABLE Episode (
  episode_id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  episode_number INT NOT NULL,
  season_id INT NOT NULL,
  FOREIGN KEY (season_id) REFERENCES Season(season_id) ON DELETE CASCADE
);

CREATE TABLE Movie_Actor (
  movie_id INT NOT NULL,
  actor_id INT NOT NULL,
  PRIMARY KEY (movie_id, actor_id),
  FOREIGN KEY (movie_id) REFERENCES Movie(movie_id) ON DELETE CASCADE,
  FOREIGN KEY (actor_id) REFERENCES Actor(actor_id) ON DELETE CASCADE
);

CREATE TABLE TV_Show_Actor (
  show_id INT NOT NULL,
  actor_id INT NOT NULL,
  PRIMARY KEY (show_id, actor_id),
  FOREIGN KEY (show_id) REFERENCES TV_Show(show_id) ON DELETE CASCADE,
  FOREIGN KEY (actor_id) REFERENCES Actor(actor_id) ON DELETE CASCADE
);

-- Populate the Director table
INSERT INTO Director (name) VALUES ('Steven Spielberg');
INSERT INTO Director (name) VALUES ('Christopher Nolan');
INSERT INTO Director (name) VALUES ('Vince Gilligan');
INSERT INTO Director (name) VALUES ('Matt Duffer');

-- Populate the Actor table
INSERT INTO Actor (name) VALUES ('Leonardo DiCaprio');
INSERT INTO Actor (name) VALUES ('Sam Neill');
INSERT INTO Actor (name) VALUES ('Bryan Cranston');
INSERT INTO Actor (name) VALUES ('Millie Bobby Brown');
INSERT INTO Actor (name) VALUES ('Joseph Gordon-Levitt');
INSERT INTO Actor (name) VALUES ('Anna Gunn');
INSERT INTO Actor (name) VALUES ('David Harbour');

-- Populate the Movie table
INSERT INTO Movie (title, release_year, director_id) VALUES ('Jurassic Park', 1993, 1);
INSERT INTO Movie (title, release_year, director_id) VALUES ('Inception', 2010, 2);

-- Populate the Movie_Actor junction table
INSERT INTO Movie_Actor (movie_id, actor_id) VALUES (1, 2);
INSERT INTO Movie_Actor (movie_id, actor_id) VALUES (2, 1);
INSERT INTO Movie_Actor (movie_id, actor_id) VALUES (2, 5);

-- Populate the TV_Show table
INSERT INTO TV_Show (title, release_year, director_id) VALUES ('Breaking Bad', 2008, 3);
INSERT INTO TV_Show (title, release_year, director_id) VALUES ('Stranger Things', 2016, 4);

-- Populate the Season table
INSERT INTO Season (show_id, season_number) VALUES (1, 1);
INSERT INTO Season (show_id, season_number) VALUES (1, 2);
INSERT INTO Season (show_id, season_number) VALUES (2, 1);
INSERT INTO Season (show_id, season_number) VALUES (2, 2);

-- Populate the Episode table
INSERT INTO Episode (title, episode_number, season_id) VALUES ('Pilot', 1, 1);
INSERT INTO Episode (title, episode_number, season_id) VALUES ('Cat''s in the Bag...', 2, 1);
INSERT INTO Episode (title, episode_number, season_id) VALUES ('Seven Thirty-Seven', 1, 2);
INSERT INTO Episode (title, episode_number, season_id) VALUES ('Grilled', 2, 2);
INSERT INTO Episode (title, episode_number, season_id) VALUES ('Chapter One: The Vanishing of Will Byers', 1, 3);
INSERT INTO Episode (title, episode_number, season_id) VALUES ('Chapter Two: The Weirdo on Maple Street', 2, 3);
INSERT INTO Episode (title, episode_number, season_id) VALUES ('Chapter One: MADMAX', 1, 4);
INSERT INTO Episode (title, episode_number, season_id) VALUES ('Chapter Two: Trick or Treat, Freak', 2, 4);

-- Populate the TV_Show_Actor junction table
INSERT INTO TV_Show_Actor (show_id, actor_id) VALUES (1, 3);
INSERT INTO TV_Show_Actor (show_id, actor_id) VALUES (1, 6);
INSERT INTO TV_Show_Actor (show_id, actor_id) VALUES (2, 4);
INSERT INTO TV_Show_Actor (show_id, actor_id) VALUES (2, 7);