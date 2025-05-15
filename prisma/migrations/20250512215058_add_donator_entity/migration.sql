-- DropForeignKey
ALTER TABLE "donation" DROP CONSTRAINT "donation_donator_id_fkey";

-- DropForeignKey
ALTER TABLE "request" DROP CONSTRAINT "request_donator_id_fkey";

-- CreateTable
CREATE TABLE "donator" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "donator_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "donator_email_key" ON "donator"("email");

-- AddForeignKey
ALTER TABLE "donator" ADD CONSTRAINT "donator_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donation" ADD CONSTRAINT "donation_donator_id_fkey" FOREIGN KEY ("donator_id") REFERENCES "donator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request" ADD CONSTRAINT "request_donator_id_fkey" FOREIGN KEY ("donator_id") REFERENCES "donator"("id") ON DELETE CASCADE ON UPDATE CASCADE;
