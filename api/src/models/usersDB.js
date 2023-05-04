import db from '../config/connection.js';

export async function findAll() {
    return db.many('SELECT * FROM users');
};

export async function findById(id) {
    return db.one('SELECT * FROM users WHERE id = $1', id);
};

export async function save(user) {
    return db.one(`
        INSERT INTO users (username, password)
        VALUES (
            $/username/,
            $/password/
        )
        RETURNING *
    `, user);
};

export async function update(user) {
    return db.one(`
        UPDATE users
        SET
        username = $/username/,
        password = $/password/
        WHERE id = $/id/
        RETURNING *
    `, user);
};

export async function destroy(id) {
    return db.none('DELETE FROM users WHERE id = $1', id);
};