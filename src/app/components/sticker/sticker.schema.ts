import { Schema, model, Document } from "mongoose"
import {Sticker} from "../../models/sticker.model";

const definition: Partial<Record<keyof Sticker, any>> ={

    _idSector: { type: String, required: true},
    sticker: { type: String, required: true},
    contador: { type: String, required: true},
};
const schema: Schema<Sticker> = new Schema(definition);
export default model<Sticker & Document> ('Sticker', schema, 'sticker');
