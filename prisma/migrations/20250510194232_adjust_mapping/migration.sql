/*
  Warnings:

  - You are about to drop the column `donatorId` on the `donation` table. All the data in the column will be lost.
  - You are about to drop the column `expiryAt` on the `donation` table. All the data in the column will be lost.
  - You are about to drop the column `beneficiaryId` on the `request` table. All the data in the column will be lost.
  - You are about to drop the column `donatorId` on the `request` table. All the data in the column will be lost.
  - Added the required column `donator_id` to the `donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiry_at` to the `donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `beneficiary_id` to the `request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `donator_id` to the `request` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "donation" DROP CONSTRAINT "donation_donatorId_fkey";

-- DropForeignKey
ALTER TABLE "request" DROP CONSTRAINT "request_beneficiaryId_fkey";

-- DropForeignKey
ALTER TABLE "request" DROP CONSTRAINT "request_donatorId_fkey";

-- AlterTable
ALTER TABLE "donation" DROP COLUMN "donatorId",
DROP COLUMN "expiryAt",
ADD COLUMN     "donator_id" TEXT NOT NULL,
ADD COLUMN     "expiry_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "request" DROP COLUMN "beneficiaryId",
DROP COLUMN "donatorId",
ADD COLUMN     "beneficiary_id" TEXT NOT NULL,
ADD COLUMN     "donator_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "donation" ADD CONSTRAINT "donation_donator_id_fkey" FOREIGN KEY ("donator_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_beneficiary_id_fkey" FOREIGN KEY ("beneficiary_id") REFERENCES "beneficiary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_donator_id_fkey" FOREIGN KEY ("donator_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
