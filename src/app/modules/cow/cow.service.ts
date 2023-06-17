import { Cow } from './cow.model';
import { ICow } from './cow.interface';
import config from '../../../config';
import ApiError from "../../../erros/ApiError";

const createCow = async (cow: ICow): Promise<ICow | null> => {
  const newCow = await Cow.create(cow);
  if (!newCow) {
    throw new Error('Failed to create user!');
  }
  return newCow;
};

const getAllCows = async (): Promise<ICow[]> => {
  const allCows = await Cow.find({});
  return allCows;
}

const getCow = async (id: string | undefined): Promise<ICow | null> => {
  const cow = await Cow.findById(id);
  return cow;
}

const updateCowData = async (id: string, userData: ICow): Promise<ICow | null> => {
  const updatedCowData = await Cow.findOneAndUpdate({ _id: id }, userData, {
    new: true,
  });
  ////TODO: cow not found
  return updatedCowData;
}

const deleteCow = async (id: string) => {
  const result = await Cow.findByIdAndDelete(id);
  ////TODO: cow now found
  return result;
}

export const CowService = {
  createCow,
  getAllCows,
  getCow,
  updateCowData,
  deleteCow
};
