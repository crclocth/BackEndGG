import express, {Express} from 'express';
import sector from './sector';
import sticker from './sticker';
import subset from './subset';
const components: Express[] = [
    sticker, sector, subset
];

export default components;