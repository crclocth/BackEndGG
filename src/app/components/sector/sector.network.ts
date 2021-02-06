import express,{ Router, Response, Request } from "express"
import { Sector } from "../../models/sector.model";
import responseModule from "../../modules/response.module";
import sectorController from "./sector.controller";

const router: Router = express.Router();

router.get("/all", async function(req: Request, res: Response){

    try {
        const result: Sector[] = await sectorController.getSector();
        responseModule.success(req,res,result);

    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }

});

router.get("/:id", async function(req: Request, res: Response){
    const id: string = req.params['id'];
    try {
        const result: Sector | null = await sectorController.getSectorById(id);
        responseModule.success(req,res,result);

    } catch (error) {
        console.log(error);
        responseModule.error(req,res,"Error desconocido");
    }
});

router.post("/add", async function(req: Request, res: Response){

    const body: Sector = req.body;
    try {
        const result: Sector = await sectorController.addSector(body);
        responseModule.success(req,res,result,201);    
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});


router.delete("/delete", async function (req: Request, res: Response) {
    try {
      const ver = await sectorController.deleteSector(req.body._id);
      if (ver != null) {
        responseModule.success(req, res, "Delete Success", 200);
      } else {
        responseModule.success(req, res, "Delete Failed");
      }
    } catch (error) {
      responseModule.error(req, res, "Error desconocido");
    }
  });

router.patch("/:id", async function(req: Request, res: Response){
    const { id } = req.params;
    try {
        const modPaciente = await sectorController.patchSector(id, req.body);
        responseModule.success(req,res,modPaciente,201);    
    } catch (error) {
        console.log(id);
        responseModule.error(req,res,"Error desconocido");
    }
});

export default router;