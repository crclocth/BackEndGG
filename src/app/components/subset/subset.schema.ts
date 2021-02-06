import { Schema, model, Document } from "mongoose"
import { Subset } from "../../models/subset.model";

const definition: Partial<Record<keyof Subset, any>> ={

    _id: { type: String, required: true},
    sticker: { type: String, required: true},
    subsetName: { type: String, required: true},
    sectorId: { type: String, required: true},
};
const schema: Schema<Subset> = new Schema(definition);
export default model<Subset & Document> ('Subset', schema, 'subset');
