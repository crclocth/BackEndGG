import { Sector } from "../../models/sector.model";
import sectorRepository from "./sector.repository";


function getSector(): Promise<Sector[]>{
    return sectorRepository.getSector();
}

function getSectorById(id: string): Promise<Sector | null>{
    return sectorRepository.getSectorById(id);
}

function patchSector(id: string, sector: Partial<Sector>): Promise<Partial<Sector | null>>{
    return sectorRepository.patchSector(id, sector);
}

function deleteSector(id: string) {
    return sectorRepository.deleteSector(id);
}

function addSector(sector: Sector): Promise<Sector>{

    sector._id = sector._id?.toLowerCase();
    sector.name = sector.name?.toLowerCase();
    sector.crop = sector.crop?.toLowerCase();
    sector.recommendation = sector.recommendation?.toLowerCase();
    sector.greenhouseId = sector.greenhouseId?.toLowerCase();
    return sectorRepository.addSector(sector);
}

export default { addSector, getSector, getSectorById, patchSector, deleteSector};