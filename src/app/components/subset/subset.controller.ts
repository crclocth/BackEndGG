import { Subset } from '../../models/subset.model';
import subsetRepository from "./subset.repository";



function getSubset(): Promise<Subset[]>{
    return subsetRepository.getSubset();
}

function getSubsetById(id: string): Promise<Subset | null>{
    return subsetRepository.getSubsetById(id);
}

function getAllSetSubsets(id: string): Promise<Subset[]>{
    return subsetRepository.getAllSetSubsets(id);
}


function patchSubset(id: string, subset: Partial<Subset>): Promise<Partial<Subset | null>>{
    return subsetRepository.patchSubset(id, subset);
}

function deleteSubset(id: string) {
    return subsetRepository.deleteSubset(id);
}

function addSubset(subset: Subset): Promise<Subset>{
    return subsetRepository.addSubset(subset);
}

export default { addSubset, getSubset, getSubsetById, patchSubset, deleteSubset, getAllSetSubsets};