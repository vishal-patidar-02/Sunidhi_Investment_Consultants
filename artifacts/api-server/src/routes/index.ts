import { Router, type IRouter } from "express";
import contactRouter from "./contact";
import healthRouter from "./health";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactRouter);

export default router;
