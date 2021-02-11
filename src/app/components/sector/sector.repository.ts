import { Sector} from "../../models/sector.model";
import sectorSchema from "./sector.schema";

async function getSector(): Promise<Sector[]>{
    return sectorSchema.find(); //mostrar todo
}

async function getSectorById(id: string): Promise<Sector | null>{
    return sectorSchema.findOne({ _id: id });
}

async function addSector(sector: Sector): Promise<Sector>{    
    return sectorSchema.create<Sector>(sector);
}

async function deleteSector(id: string) {
    return sectorSchema.remove({ _id: id });
}

async function patchSector(_id: string, sector: Partial<Sector>): Promise<Partial<Sector | null>>{
    return sectorSchema.findByIdAndUpdate(_id, sector);
}

export default { addSector , getSector, getSectorById, deleteSector, patchSector};