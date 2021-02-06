import { Sticker } from "../../models/sticker.model";
import stickerSchema from "./sticker.schema";

async function getSticker(): Promise<Sticker[]>{
    return stickerSchema.find(); //mostrar todo
}

async function getStickerById(id: string): Promise<Sticker | null>{
    return stickerSchema.findOne({ _id: id });
}

async function addSticker(user: Sticker): Promise<Sticker>{    
    return stickerSchema.create<Sticker>(user);
}

async function deleteSticker(id: string) {
    return stickerSchema.remove({ _id: id });
}

async function patchSticker(_id: string, user: Partial<Sticker>): Promise<Partial<Sticker | null>>{
    return stickerSchema.findByIdAndUpdate(_id, user);
}

export default { addSticker , getSticker, getStickerById, deleteSticker, patchSticker};