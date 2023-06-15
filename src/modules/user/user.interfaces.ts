import { Document, Model } from "mongoose";

export interface IUserDocument extends Document {
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  phone: number;
};

export interface IUserModel extends Model<IUserDocument> { }