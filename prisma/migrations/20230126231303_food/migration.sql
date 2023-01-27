-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "item" VARCHAR(100) NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "phonetype" DECIMAL NOT NULL,
    "value" DECIMAL NOT NULL,
    "referencepoint" VARCHAR(40) NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);
