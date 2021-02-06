import express, {Express} from "express";
import router from "./sector.network";

const sector: Express = express();
sector.use('/sector', router );

export default sector;
