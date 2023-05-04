import * as kdramaDB from '../models/kdramaDB.js';

export async function index(req, res, next) {
    kdramaDB.findAll()
    .then(kdramas => res.json({ kdramas: kdramas }))
    .catch(err => next(err));
};

export async function getById(req, res, next) {
    kdramaDB.findById(req.params.id)
    .then(kdrama => res.json({ kdrama: kdrama }))
    .catch(err => next(err));
};

export async function create(req, res, next) {
    console.log(req.body);
    kdramaDB.save(req.body)
    .then(kdrama => res.json({ kdrama: kdrama }))
    .catch(err => next(err));
};

export async function update(req, res, next) {
    kdramasDB.update(req.body)
    .then(kdrama => res.json({ kdrama: kdrama }))
    .catch(err => next(err));
};

export async function destroy(req, res, next) {
    kdramaDB.destroy(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
};