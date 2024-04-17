-- AlterTable
ALTER TABLE `brand` MODIFY `status` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `category` MODIFY `status` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `product` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(191) NULL,
    `status` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `product_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
