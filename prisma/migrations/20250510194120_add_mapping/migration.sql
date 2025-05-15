/*
  Warnings:

  - You are about to drop the column `donator_id` on the `donation` table. All the data in the column will be lost.
  - You are about to drop the column `beneficiary_id` on the `request` table. All the data in the column will be lost.
  - You are about to drop the column `donator_id` on the `request` table. All the data in the column will be lost.
  - Added the required column `donatorId` to the `donation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `beneficiaryId` to the `request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `donatorId` to the `request` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "donation" DROP CONSTRAINT "donation_donator_id_fkey";

-- DropForeignKey
ALTER TABLE "request" DROP CONSTRAINT "request_beneficiary_id_fkey";

-- DropForeignKey
ALTER TABLE "request" DROP CONSTRAINT "request_donator_id_fkey";

-- AlterTable
ALTER TABLE "donation" DROP COLUMN "donator_id",
ADD COLUMN     "donatorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "request" DROP COLUMN "beneficiary_id",
DROP COLUMN "donator_id",
ADD COLUMN     "beneficiaryId" TEXT NOT NULL,
ADD COLUMN     "donatorId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "donation" ADD CONSTRAINT "donation_donatorId_fkey" FOREIGN KEY ("donatorId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "beneficiary"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_donatorId_fkey" FOREIGN KEY ("donatorId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
