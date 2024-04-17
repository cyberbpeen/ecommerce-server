import { NextFunction, Request, Response } from "express";
import prisma from "../config/database";

export const addProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { brand, category, color, size, ...props } = req.body;

    const storedBrand = await prisma.brand.findUniqueOrThrow({
      where: { title: brand },
    });

    const storedCategory = await prisma.category.findUniqueOrThrow({
      where: { title: category },
    });

    const product = await prisma.product.create({
      data: {
        ...props,
        brand: { connect: { id: storedBrand.id } },
        category: { connect: { id: storedCategory.id } },
      },
    });

    await prisma.color.create({
      data: {
        name: color,
        product: { connect: { id: product.id } },
      },
    });

    await prisma.size.create({
      data: {
        unit: size,
        product: { connect: { id: product.id } },
      },
    });

    return res.sendResponse(product, 201);
  } catch (err) {
    console.log(err);

    // next(err);
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: req.params.id,
      },
      include: {
        colors: true,
        sizes: true,
      },
    });
    return res.sendResponse(product);
  } catch (err) {
    // next(err);
  }
};

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const page = +(req.query.page || 0);
    const limit = +(req.query.limit || 2);
    const products = await prisma.product.findMany({
      take: limit,
      skip: page * limit,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        colors: true,
        sizes: true,
      },
    });
    return res.sendResponse(products);
  } catch (e) {
    console.log(e);
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedproduct = await prisma.product.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    return res.sendResponse(updatedproduct);
  } catch (error) {
    next(error);
  }
};
export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await prisma.product.delete({ where: { id: req.params.id } });
    return res.sendResponse({});
  } catch (error) {
    next(error);
  }
};
