/*
  Warnings:

  - Added the required column `price` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `discount` BIGINT NULL,
    ADD COLUMN `price` BIGINT NOT NULL;
