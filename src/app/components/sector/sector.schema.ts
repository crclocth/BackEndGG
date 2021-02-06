import { Schema, model, Document } from "mongoose"
import { Sector } from "../../models/sector.model";
import subset from "../../model/subset.model/";



const definition: Partial<Record<keyof Sector, any>> ={

    _id: { type: String},
    name: { type: String},
    number: { type: Number},
    vitality: { type: Number},
    crop?: { type: String},
    plantCount: { type: Number},
    recommendation?: { type: String},
    count: Object,
    greenhouseId: { type: String},
    users: { type: String},
    createdAt: Date,
    modifiedAt: Date,
    //Propios
    subsets[]: {type: subset, required: true},
};
const schema: Schema<Sector> = new Schema(definition);
export default model<Sector & Document> ('Sector', schema, 'sector');
