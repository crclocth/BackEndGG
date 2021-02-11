import express, {Express} from "express";
import router from "./sticker.network";

const sticker: Express = express();
sticker.use('/sticker', router );

export default sticker;
