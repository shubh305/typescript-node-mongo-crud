import { User } from "../modules/user/user.model";
import { IUserDocument } from "../modules/user/user.interfaces";
import { msg } from "../configs/messages";

export const userFullNameUpdater = async () => {
  const batchSize = +process.env.BATCH_SIZE;
  const cursor = await User.find().batchSize(batchSize).cursor();
  let bulkOps: any[] = [];
  let count: number = 0;

  cursor.eachAsync(async (user: IUserDocument | null) => {
    if (user) {
      const fullName: string = `${user.firstName} ${user.lastName}`;
      bulkOps.push({
        updateOne: {
          filter: { _id: user._id },
          update: { fullName },
        },
      });
      count++;
    }

    if (count % batchSize === 0 || !user) {
      await User.bulkWrite(bulkOps);
      bulkOps = [];
    }

    if (!user) {
      return { msg: msg.usersUpdated };
    }
  });
  return { msg: msg.usersUpdated };
};
