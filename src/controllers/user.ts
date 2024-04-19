import { NextFunction, Request, Response } from "express";
import prisma from "../config/database";
import { comparePassword, generateToken, hashPassword } from "../utils/auth";
import { User } from "../types/user";

export const createNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, ...props } = req.body;
    const user = await prisma.user.create({
      data: {
        password: await hashPassword(password),
        ...props,
      },
    });

    let message = `User ${user.name} has been successfully created.`;

    return res.sendResponse({ message }, 201);
  } catch (err) {
    // next(err);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) throw new Error("user not found");

    const isValid = await comparePassword(password, user.password);

    if (!isValid) throw new Error("Invalid password, try again.");

    const token = generateToken(user);

    return res.sendResponse({ token });
  } catch (err) {
    // next(err);
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = res.locals.user;

    const user = await prisma.user.findUnique({
      where: { id },
    });

    return res.sendResponse(user);
  } catch (err) {
    // next(err);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = res.locals.user;

    if (id !== req.params.id) throw new Error("Unauthorized User");

    const user = await prisma.user.update({
      where: { id },
      data: req.body,
    });

    return res.sendResponse(user);
  } catch (err) {
    console.log(err);

    // next(err);
  }
};

export const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = res.locals.user;
    const { oldPassword, password } = req.body;

    if (id !== req.params.id) throw new Error("Unauthorized User");

    const user = await prisma.user.findFirst({
      where: { id },
    });

    if (!user) throw new Error("Unauthorized User");

    const isValid = await comparePassword(oldPassword, user.password);

    if (!isValid) throw new Error("Invalid password, try again.");

    const isPasswordSame = await comparePassword(password, user.password);

    if (isPasswordSame)
      throw new Error("New password and old password can't be same.");

    await prisma.user.update({ where: { id: user.id }, data: { password } });

    let message = `User ${user.name} password has been successfully changed.`;

    return res.sendResponse({ message });
  } catch (err) {
    // next(err);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = res.locals.user;

    if (id !== req.params.id) throw new Error("Unauthorized User");

    const user = await prisma.user.delete({
      where: { id },
    });

    let message = `User ${user.name} has been successfully deleted.`;
    return res.sendResponse({ message });
  } catch (err) {
    // next(err);
  }
};
