
const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Assignment');

// Schema to create Thought model
const thoughtSchema = new Schema(
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

const Student = model('student', studentSchema);

module.exports = Student;
