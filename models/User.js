const { Schema, model } = require('mongoose');

// Schema to create a User model
const userSchema = new Schema(
  {
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,   
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Must match an email address!'],
    },
    thought: {
        type: Schema.Types.ObjectId,
        default: [],
        ref: 'Thought',
    },
    friends: {
        type: Schema.Types.ObjectId,
        default: [],
        ref: 'User',
    },

  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model('user', userSchema);

module.exports = User;
