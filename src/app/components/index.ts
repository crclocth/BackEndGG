import {Express} from "express";
import sector from "./sector";
import sticker from "./sticker/index";
import subset from "./subset/index";



const components: Express[] = [
    sticker, subset, sector
];

export default components;