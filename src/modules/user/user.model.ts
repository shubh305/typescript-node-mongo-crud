import { Schema, model } from "mongoose";
import { IUserModel, IUserDocument } from "./user.interfaces";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User: IUserModel = model<IUserDocument, IUserModel>(
  "User",
  userSchema
);
