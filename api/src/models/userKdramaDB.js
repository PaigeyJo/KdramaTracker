import db from '../config/connection.js';

export async function findAll() {
    return db.many('SELECT * FROM user_kdrama');
};

export async function findById(id) {
    return db.one('SELECT * FROM user_kdrama WHERE id = $1', id);
};

export async function save(userKdrama) {
    return db.one(`
        INSERT INTO user_kdrama (id, user_id, kdrama_id, episodes_watched, rating, started_on, finished_on)
        VALUES (
            $/id/,
            $/user_id/,
            $/kdrama_id/,
            $/episodes_watched/,
            $/rating/,
            $/started_on/,
            $finished_on/
        )
        RETURNING *
     `, userKdrama);
};

export async function update(userKdrama) {
    return db.one (`
        UPDATE user_kdrama
        SET
        user_id = $/user_id/,
        kdrama_id = $/kdrama_id/,
        episodes_watched = $/episodes_watched/,
        rating = $/rating/,
        started_on = $/started_on/,
        fiinished on = $/finished_on/
        WHERE id = $/id/
        RETURNING *
    `, userKdrama);
};

export async function destroy (id) {
    return db.none('DELETE FROM user_kdrama WHERE id = $1', id);
};