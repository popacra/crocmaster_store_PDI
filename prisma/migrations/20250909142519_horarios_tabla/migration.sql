-- CreateTable
CREATE TABLE `horarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_cargada` DATETIME(3) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `fecha_now` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
