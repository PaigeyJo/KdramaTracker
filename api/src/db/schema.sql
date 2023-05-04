CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE kdrama(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    poster_image VARCHAR(255),
    episode_count INT,
    airing BOOLEAN
);

CREATE TABLE user_kdrama(
    id SERIAL PRIMARY KEY,
    user_id INT,
    kdrama_id INT,
    episodes_watched INT,
    rating INT,
    started_on TIMESTAMPTZ,
    finished_on TIMESTAMPTZ
);