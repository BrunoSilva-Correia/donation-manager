-- CreateEnum
CREATE TYPE "RequestStatusEnum" AS ENUM ('PENDING', 'APPROVED', 'FINISHED', 'CANCELED');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donation" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "expiryAt" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "donator_id" TEXT NOT NULL,

    CONSTRAINT "donation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beneficiary" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "necessities" TEXT NOT NULL,

    CONSTRAINT "beneficiary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "request" (
    "id" TEXT NOT NULL,
    "beneficiary_id" TEXT NOT NULL,
    "donator_id" TEXT NOT NULL,
    "status" "RequestStatusEnum" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "request_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "donation" ADD CONSTRAINT "donation_donator_id_fkey" FOREIGN KEY ("donator_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_beneficiary_id_fkey" FOREIGN KEY ("beneficiary_id") REFERENCES "beneficiary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_donator_id_fkey" FOREIGN KEY ("donator_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
