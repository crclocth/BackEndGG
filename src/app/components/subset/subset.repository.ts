import { Subset } from "../../models/subset.model";
import subsetSchema from "./subset.schema";

async function getSubset(): Promise<Subset[]>{
    return subsetSchema.find(); //mostrar todo
}

async function getSubsetById(id: string): Promise<Subset | null>{
    return subsetSchema.findOne({ _id: id });
}

async function getAllSetSubsets(id: string): Promise<Subset[]>{
    return subsetSchema.find({ _id: id });
}

async function addSubset(user: Subset): Promise<Subset>{    
    return subsetSchema.create<Subset>(user);
}

async function deleteSubset(id: string) {
    return subsetSchema.remove({ _id: id });
}

async function patchSubset(_id: string, user: Partial<Subset>): Promise<Partial<Subset | null>>{
    return subsetSchema.findByIdAndUpdate(_id, user);
}

export default { addSubset , getSubset, getSubsetById, deleteSubset, patchSubset, getAllSetSubsets};