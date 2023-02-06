import { Request, Response, NextFunction } from "express";
import { config } from "../../config";
import fetch from "node-fetch";
const url_maps: string = `${config.base}/api/maps`;

class MapView {
  public async renderMaps(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res.render("maps/index");
    } catch (error) {
      if (res.statusCode >= 400) {
        res.render("partials/error404", { error });
      } else {
        res.render("partials/error500", { error });
      }
    }
  }

}
export const mapView: MapView = new MapView();
