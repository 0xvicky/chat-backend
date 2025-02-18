import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  message: {
    type: String,
    default: null // Text message (optional)
  },
  voiceMessageUrl: {
    type: String,
    default: null // URL to the uploaded voice message
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const MessageModel = mongoose.model("Messages", MessageSchema);
export default MessageModel;
