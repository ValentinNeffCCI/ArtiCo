/*
  Warnings:

  - Added the required column `entrepriseId` to the `formulaires` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "entreprises" DROP CONSTRAINT "entreprises_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "galeries" DROP CONSTRAINT "galeries_entrepriseId_fkey";

-- DropForeignKey
ALTER TABLE "inputs" DROP CONSTRAINT "inputs_formulaireId_fkey";

-- DropForeignKey
ALTER TABLE "options" DROP CONSTRAINT "options_inputId_fkey";

-- DropForeignKey
ALTER TABLE "soumissions" DROP CONSTRAINT "soumissions_formulaireId_fkey";

-- AlterTable
ALTER TABLE "formulaires" ADD COLUMN     "entrepriseId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "entreprises" ADD CONSTRAINT "entreprises_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "formulaires" ADD CONSTRAINT "formulaires_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "entreprises"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "galeries" ADD CONSTRAINT "galeries_entrepriseId_fkey" FOREIGN KEY ("entrepriseId") REFERENCES "entreprises"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inputs" ADD CONSTRAINT "inputs_formulaireId_fkey" FOREIGN KEY ("formulaireId") REFERENCES "formulaires"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "options" ADD CONSTRAINT "options_inputId_fkey" FOREIGN KEY ("inputId") REFERENCES "inputs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "soumissions" ADD CONSTRAINT "soumissions_formulaireId_fkey" FOREIGN KEY ("formulaireId") REFERENCES "formulaires"("id") ON DELETE CASCADE ON UPDATE CASCADE;
