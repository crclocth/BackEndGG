import { Schema, model, Document } from "mongoose"
import {Subset} from "../../models/subset.model";

const definition: Partial<Record<keyof Subset, any>> ={

    _id: { type: String, required:false},
    sticker: { type: String, required:false},
    subsetName: { type: String, required:false},
    sectorId: { type: String, required: false},

};
const schema: Schema<Subset> = new Schema(definition);
export default model<Subset & Document> ('Subset', schema, 'subset');
