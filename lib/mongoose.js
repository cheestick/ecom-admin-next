import mongoose from "mongoose";

export function mongooseConnect() {
  const { MONGODB_URI, DB_NAME } = process.env;

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    return mongoose.connect(MONGODB_URI, { dbName: DB_NAME });
  }
}
