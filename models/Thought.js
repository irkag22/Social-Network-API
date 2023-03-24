const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create Thought model
thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
       type: Date,
       default: Date.now,
      },
    username: {
      type: String,
      required: true,
    },
    reaction: [reactionSchema],
    
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
