const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController.js');

// /api/thought
router.route('/').get(getThoughts).post(createThought);

// /api/user/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// /api/user/:thoughtId/reaction
router.route('/:thoughtId/reaction').post(addReaction);

// /api/user/:thoughtId/reaction/:reactiontId
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;
