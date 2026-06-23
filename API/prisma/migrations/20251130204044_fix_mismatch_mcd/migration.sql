/*
  Warnings:

  - Added the required column `email` to the `soumissions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EnumRole" AS ENUM ('ADMIN', 'USER');

-- AlterTable
ALTER TABLE "soumissions" ADD COLUMN     "email" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "role" "EnumRole" NOT NULL DEFAULT 'USER';
