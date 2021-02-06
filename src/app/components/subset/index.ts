import express, {Express} from "express";
import router from "./subset.network";

const subset: Express = express();
subset.use('/subset', router );

export default subset;
