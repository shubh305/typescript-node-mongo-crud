import mongoose from "mongoose";
mongoose.Promise = global.Promise;

void new class Database {
  database: typeof mongoose;
  constructor() {
    this.dbConnect();
  }
  async dbConnect() {
    try {
      this.database = await mongoose.connect(process.env.MONGODB_URI, JSON.parse(process.env.DB_OPTIONS));
      console.log("Database connection successful", process.env.MONGODB_URI);
      if (process.env.NODE_ENV === "development") {
        mongoose.set('debug', true);
      }
    } catch (err) {
      console.error(err);
    }
  }
}
