import { NextFunction, Request, Response } from "express";
import prisma from "../config/database";

export const addBrand = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const brand = await prisma.brand.create({
      data: req.body,
    });
    return res.sendResponse(brand, 201);
  } catch (err) {
    // next(err);
  }
};

export const getBrandById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const brand = await prisma.brand.findUnique({
      where: {
        id: req.params.id,
      },
    });
    return res.sendResponse(brand);
  } catch (err) {
    // next(err);
  }
};

export const getAllBrand = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = +(req.query.page || 0);
    const limit = +(req.query.limit || 2);
    const brands = await prisma.brand.findMany({
      take: limit,
      skip: page * limit,
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.sendResponse(brands);
  } catch (e) {
    console.log(e);
  }
};

export const updateBrand = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedBrand = await prisma.brand.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    return res.sendResponse(updatedBrand);
  } catch (error) {
    next(error);
  }
};
export const deleteBrand = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await prisma.brand.delete({ where: { id: req.params.id } });
    return res.sendResponse({});
  } catch (error) {
    next(error);
  }
};
