/*
  Warnings:

  - Added the required column `brandId` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoriesId` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `brandId` VARCHAR(191) NOT NULL,
    ADD COLUMN `categoriesId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_categoriesId_fkey` FOREIGN KEY (`categoriesId`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `brand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
