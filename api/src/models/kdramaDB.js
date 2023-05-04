import db from '../config/connection.js';

export async function findAll() {
    return db.many('SELECT * FROM kdrama');
};

export async function findById (id) {
    return db.one('SELECT * FROM kdrama WHERE id = $1', id);
};

export async function save(kdrama) {
    return db.one(`
        INSERT INTO kdrama (name, poster_image, episode_count, airing)
        VALUES (
            $/name/,
            $/poster_image/,
            $/episode_count/,
            $/airing/
        )
        RETURNING *
    `, kdrama);
};

export async function update(kdrama) {
    return db.one(`
        UPDATE kdrama
        SET
        name = $/name/,
        poster_image = $/poster_image/,
        episode_count = $/episode_count,
        airing = $/airing/
        WHERE id = $/id/
        RETURNING *
    `, kdrama);
};

export async function destroy(id) {
    return db.none('DELETE FROM kdrama WHERE id = $1', id);
};