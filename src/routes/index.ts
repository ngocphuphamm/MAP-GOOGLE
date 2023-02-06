import { Router } from "express";
import { mapRoutes } from "../components/maps/routes";

const router: Router = Router();

//* Views
router.use("/maps", mapRoutes.getViewRouter);
router.get("/", (req, res, next) => {
  res.render("index");
});


//* Api
router.use("/api/maps", mapRoutes.getApiRouter);


export default router;
