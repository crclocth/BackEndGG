import { Sticker } from '../../models/sticker.model';
import stickerRepository from "./sticker.repository";


function getSticker(): Promise<Sticker[]>{
    return stickerRepository.getSticker();
}

function getStickerById(id: string): Promise<Sticker | null>{
    return stickerRepository.getStickerById(id);
}

function patchSticker(id: string, sticker: Partial<Sticker>): Promise<Partial<Sticker | null>>{
    return stickerRepository.patchSticker(id, sticker);
}

function deleteSticker(id: string) {
    return stickerRepository.deleteSticker(id);
}

function addSticker(sticker: Sticker): Promise<Sticker>{

    sticker._idSector = sticker._idSector?.toLowerCase();
    sticker.sticker = sticker.sticker?.toLowerCase();
    return stickerRepository.addSticker(sticker);
}

export default { addSticker, getSticker, getStickerById, patchSticker, deleteSticker};