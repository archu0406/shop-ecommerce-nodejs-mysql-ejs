const express = require('express');
const router = express.Router();
const itemService = require('./item.service');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', delete_item);

module.exports = router;

function getAll(req, res, next) {
    itemService.getAll()
        .then(item => res.json(item))
        .catch(next);
}

function getById(req, res, next) {
    itemService.getById(req.params.id)
        .then(user => res.json(user))
        .catch(next);
}

function create(req, res, next) {
    console.log(req);
    itemService.create(req.body)
        .then(() => res.json({ message: 'Product item is created' }))
        .catch(next);
}

function update(req, res, next) {
    itemService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'Product item is updated' }))
        .catch(next);
}

function delete_item(req, res, next) {
    itemService.delete_item(req.params.id)
        .then(() => res.json({ message: 'Product item is deleted' }))
        .catch(next);
}
