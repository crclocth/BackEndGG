import { Subset } from '../../models/subset.model';
import subsetRepository from "./subset.repository";


function getSubset(): Promise<Subset[]>{
    return subsetRepository.getSubset();
}

function getSubsetById(id: string): Promise<Subset | null>{
    return subsetRepository.getSubsetById(id);
}

function patchSubset(id: string, noticias: Partial<Subset>): Promise<Partial<Subset | null>>{
    return subsetRepository.patchNoticias(id, subset);
}

function deleteSubset(id: string) {
    return subsetRepository.deleteSubset(id);
}

function addSubset(noticias: Subset): Promise<Subset>{

    //noticias.contenido = noticias.contenido?.toLowerCase();
    return subsetRepository.addNoticias(subset);
}

export default { addSubset, getSubset, getSubsetById, patchSubset, deleteSubset};