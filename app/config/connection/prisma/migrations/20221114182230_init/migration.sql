-- CreateTable
CREATE TABLE "Stores" (
    "location_id" TEXT NOT NULL,
    "store_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "work_type" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL,
    "active" TEXT NOT NULL,
    "inWork" BOOLEAN NOT NULL,
    "opening_time" TEXT NOT NULL,
    "closing_time" TEXT NOT NULL,
    "activities" TEXT NOT NULL,
    "rating" DECIMAL(65,30),
    "working_days" TEXT[],
    "device_access" TEXT[],
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedBy" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Stores_pkey" PRIMARY KEY ("location_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stores_store_id_key" ON "Stores"("store_id");

-- CreateIndex
CREATE UNIQUE INDEX "Stores_email_key" ON "Stores"("email");
