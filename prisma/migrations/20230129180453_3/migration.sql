/*
  Warnings:

  - Added the required column `category` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coupon` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order" ADD COLUMN     "category" INTEGER NOT NULL,
ADD COLUMN     "coupon" INTEGER NOT NULL,
ADD COLUMN     "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coupon" (
    "id" SERIAL NOT NULL,
    "value" DECIMAL NOT NULL,
    "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "coupon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_category_fkey" FOREIGN KEY ("category") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_coupon_fkey" FOREIGN KEY ("coupon") REFERENCES "coupon"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
