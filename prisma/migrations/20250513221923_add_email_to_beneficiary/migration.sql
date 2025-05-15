/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `beneficiary` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `created_by` to the `beneficiary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `beneficiary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "beneficiary" ADD COLUMN     "created_by" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "beneficiary_email_key" ON "beneficiary"("email");

-- AddForeignKey
ALTER TABLE "beneficiary" ADD CONSTRAINT "beneficiary_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
