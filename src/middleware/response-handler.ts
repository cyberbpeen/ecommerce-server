import { Request, Response, NextFunction } from "express";

const responseHandler = (req: Request, res: Response, next: NextFunction) => {
  res.sendResponse = (data: any, statusCode: number = 200) => {
    res.status(statusCode).json({
      status: "success",
      data,
    });
  };

  next();
};

declare global {
  namespace Express {
    interface Response {
      sendResponse: (data: any, statusCode?: number) => void;
    }
  }
}

export default responseHandler;
