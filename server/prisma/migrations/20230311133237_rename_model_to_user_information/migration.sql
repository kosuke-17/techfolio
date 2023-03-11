/*
  Warnings:

  - You are about to drop the `UserInforMation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserInforMation" DROP CONSTRAINT "UserInforMation_userId_fkey";

-- DropTable
DROP TABLE "UserInforMation";

-- CreateTable
CREATE TABLE "UserInformation" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "stuffId" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" "GENDER" NOT NULL,
    "nearestStation" TEXT NOT NULL,
    "startWorkDate" TIMESTAMP(3) NOT NULL,
    "seExpAmount" INTEGER NOT NULL,
    "pgExpAmount" INTEGER NOT NULL,
    "itExpAmount" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserInformation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserInformation_userId_key" ON "UserInformation"("userId");

-- AddForeignKey
ALTER TABLE "UserInformation" ADD CONSTRAINT "UserInformation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
