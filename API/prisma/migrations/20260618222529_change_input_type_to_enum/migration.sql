/*
  Warnings:

  - The `type` column on the `inputs` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "InputType" AS ENUM ('text', 'textarea', 'number', 'email', 'tel', 'date', 'datetime-local', 'color', 'checkbox', 'radio', 'select');

-- AlterTable
ALTER TABLE "inputs" DROP COLUMN "type",
ADD COLUMN     "type" "InputType" NOT NULL DEFAULT 'text';
