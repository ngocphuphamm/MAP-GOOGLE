import { Router } from "express";
import { mapController } from "./controller";
import { mapView } from "./views";
const apiRouter: Router = Router();
const viewRouter: Router = Router();
class MapRoutes {
  constructor(private apiRouter: Router, private viewRouter: Router) {
    this.viewRouter = viewRouter;
    this.apiRouter = apiRouter;
    this.apiRoutes();
    this.viewRoutes();
  }

  public get getApiRouter(): Router {
    return this.apiRouter;
  }
  public get getViewRouter(): Router {
    return this.viewRouter;
  }

  private apiRoutes(): void {

  }
  private viewRoutes(): void {
    viewRouter.get("/", mapView.renderMaps);
  
  }
}


//* API routes
export const mapRoutes: MapRoutes = new MapRoutes(apiRouter, viewRouter);

// export default apiRouter;
