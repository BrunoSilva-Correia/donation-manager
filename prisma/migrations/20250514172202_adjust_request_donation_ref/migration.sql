/*
  Warnings:

  - You are about to drop the column `donator_id` on the `request` table. All the data in the column will be lost.
  - Added the required column `donation_id` to the `request` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "request" DROP CONSTRAINT "request_donator_id_fkey";

-- AlterTable
ALTER TABLE "request" DROP COLUMN "donator_id",
ADD COLUMN     "donation_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_donation_id_fkey" FOREIGN KEY ("donation_id") REFERENCES "donation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
