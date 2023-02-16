-- CreateEnum
CREATE TYPE "GENDER" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "UserInforMation" (
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

    CONSTRAINT "UserInforMation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserInforMation_userId_key" ON "UserInforMation"("userId");

-- AddForeignKey
ALTER TABLE "UserInforMation" ADD CONSTRAINT "UserInforMation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
