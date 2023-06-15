import { Request, Response, NextFunction } from "express";
import { ExpressErrorMiddlewareInterface, HttpError, Middleware } from "routing-controllers";

@Middleware({ type: "after" })
export class ErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {

  constructor() { }

  public error(error: HttpError, req: Request, res: Response, next: NextFunction): void {
    res.status(error.httpCode || 400).send({
      name: error.name,
      message: typeof error == "string" ? error : error.message,
      stack: error.stack || [],
    });
  }

}
