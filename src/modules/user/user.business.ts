import { User } from "./user.model";
import { IUserDocument } from "./user.interfaces";
import { Controller } from "routing-controllers";
import { userFullNameUpdater } from "../../services/userFullName.service";

@Controller()
export class UserBusiness {
  constructor() {}

  public async createUser(body: IUserDocument): Promise<Object> {
    const user = new User(body);
    await user.save();
    let userObj = user.toObject();
    return userObj;
  }

  public async updateUserById(
    id: string,
    body: IUserDocument
  ): Promise<Object> {
    const res = await User.findOneAndUpdate(
      { _id: id },
      { $set: body },
      { new: true }
    ).lean();
    return res;
  }

  public async getUser(id: string) {
    return await User.findOne({ _id: id }).lean();
  }

  public async getAllUsers() {
    return await User.find({}).lean();
  }

  public async deleteUser(id: string) {
    return await User.deleteOne({ _id: id });
  }

  public async updateUserFullName() {
    return await userFullNameUpdater();
  }
}
