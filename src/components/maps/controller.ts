import { Response, Request, NextFunction } from "express";


class MapController {
  public async getMaps(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res.status(200).json({
        "name" : "hello"
      });
    } catch (error) {
      res.status(400).json({ error: error.message});
    }
  }

}

export const mapController: MapController = new MapController();
