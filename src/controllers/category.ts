import { NextFunction, Request, Response } from "express";
import prisma from "../config/database";

export const addCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await prisma.category.create({
      data: req.body,
    });
    return res.sendResponse(category, 201);
  } catch (err) {
    // next(err);
  }
};

export const getCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const category = await prisma.category.findUnique({
      where: {
        id: req.params.id,
      },
      include: { products: true },
    });
    return res.sendResponse(category);
  } catch (err) {
    // next(err);
  }
};

export const getAllCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = +(req.query.page || 0);
    const limit = +(req.query.limit || 2);
    const categories = await prisma.category.findMany({
      take: limit,
      skip: page * limit,
      orderBy: {
        createdAt: "desc",
      },
      include: { products: true },
    });
    return res.sendResponse(categories);
  } catch (e) {
    console.log(e);
  }
};

export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedCategory = await prisma.category.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    return res.sendResponse(updatedCategory);
  } catch (error) {
    next(error);
  }
};
export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await prisma.category.delete({ where: { id: req.params.id } });
    return res.sendResponse({});
  } catch (error) {
    next(error);
  }
};
