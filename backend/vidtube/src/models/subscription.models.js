import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subsciber: {
      type: Schema.Types.ObjectId, // one who IS SUBSCRIBING
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, //one to whom `subsciber` IS SUBSCRIBING
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
