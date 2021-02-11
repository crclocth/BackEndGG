import { Schema, model, Document } from "mongoose"
import {Sector} from "../../models/sector.model";
import subset from "../subset";

const definition: Partial<Record<keyof Sector, any>> ={

    //Del BackEnd
    _id: { type: String, required: false},
    name: { type: String, requiered: false},
    number: { type: Number, required: false},
    vitality: { type: Number, required: false},
    crop: { type: String, required: false},
    plantCount: { type: Number, required: false},
    recommendation: { type: String, required: false},
    //count: { type: Object, required: false},
    greenhouseId: { type: String, required: false},
    users: { type: String, required: false},
    createdAt: { type: Date, required: false},
    modifiedAt: { type: Date, required: false},
    //Propios
    //subsets: { type: subset, required: false},

};
const schema: Schema<Sector> = new Schema(definition);
export default model<Sector & Document> ('Sector', schema, 'sector');
