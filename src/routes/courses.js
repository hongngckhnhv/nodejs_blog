const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');
const route = require('.');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-from-actions',courseController.handleFromAction)
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);
router.get('/:slug', courseController.show);


module.exports = router;
