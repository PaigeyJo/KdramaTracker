import * as usersDB from '../models/usersDB.js';

export async function index(req, res, next) {
    usersDB.findAll()
    .then(users => res.json({ users: users }))
    .catch(err => next(err));
};

export async function getById(req, res, next) {
    usersDB.findById(req.params.id)
    .then(user => res.json({ user: user }))
    .catch(err => next(err));
};

export async function create(req, res, next) {
    usersDB.save(req.body)
    .then(user => res.json({ user: user }))
    .catch(err => next(err));
};

export async function update(req, res, next) {
    usersDB.update(req.body)
    .then(user => res.json({ user: user }))
    .catch(err => next(err));
};

export async function destroy(req, res, next) {
    usersDB.destroy(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
};
