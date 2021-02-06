import { Sector } from "../../models/sector.model";
import sectorSchema from "./sector.schema";

async function getSector(): Promise<Sector[]>{
    return sectorSchema.find(); //mostrar todo
}

async function getSectorById(id: string): Promise<Sector | null>{
    return sectorSchema.findOne({ _id: id });
}

async function addSector(user: Sector): Promise<Sector>{    
    return sectorSchema.create<Sector>(user);
}

async function deleteSector(id: string) {
    return sectorSchema.remove({ _id: id });
}

async function patchSector(_id: string, user: Partial<Sector>): Promise<Partial<Sector | null>>{
    return sectorSchema.findByIdAndUpdate(_id, user);
}

export default { addSector , getSector, getSectorById, deleteSector, patchSector};