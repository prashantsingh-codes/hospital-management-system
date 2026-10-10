import express from "express";
import {
  createService,
  getServices,
  getServiceById,
  updateServiceById,
  deleteServiceById,
} from "../controllers/serviceController.js";
import upload from "../middlewares/multer.js";

const serviceRouter = express.Router();

serviceRouter.get("/", getServices);
serviceRouter.get("/:id", getServiceById);
serviceRouter.post("/", upload.single("image"), createService);
serviceRouter.put("/:id", upload.single("image"), updateServiceById);
serviceRouter.delete("/:id", deleteServiceById);

export default serviceRouter;