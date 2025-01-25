import { replaceMongoIdInArray } from "@/lib/convertData";
import { Resource } from "@/models/resource-model";
import dbConnect from "@/services/mongo";

export const getAllResources = async () => {
  await dbConnect();
  const resource = await Resource.find({}).lean();
  return replaceMongoIdInArray(resource);
};
