/*
  Warnings:

  - A unique constraint covering the columns `[phonetype]` on the table `order` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "order_phonetype_key" ON "order"("phonetype");
