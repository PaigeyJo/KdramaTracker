import * as userKdramaDB from '../models/userKdramaDB.js';

export async function index(req, res, next) {
    userKdramaDB.findAll()
    .then(userKdramas => res.json({ userkdramas: userKdramas }))
    .catch(err => next(err));
};

export async function getById(req, res, next) {
    userKdramaDB.findById(req.params.id)
    .then(userKdramas => res.json({ userKdramas: userKdramas}))
    .catch (err => next(err));
};

export async function create(req, res, next) {
    userKdramaDB.save(req.body)
    .then(userKdrama => res.json({ userKdrama: userKdrama}))
    .catch(err => next(err));
};

export async function update(req, res, next) {
    userKdramaDB.update(req.body)
    .then(userkdrama => res.jason ({ userkdrama: userkdrama}))
    .catch(err => next(err));
};

export async function destroy(req, res, next) {
    userKdramaDB.destroy(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
};

