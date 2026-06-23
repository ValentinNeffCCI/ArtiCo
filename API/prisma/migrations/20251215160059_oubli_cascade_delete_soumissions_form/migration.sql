-- DropForeignKey
ALTER TABLE "soumissions" DROP CONSTRAINT "soumissions_formulaireId_fkey";

-- AddForeignKey
ALTER TABLE "soumissions" ADD CONSTRAINT "soumissions_formulaireId_fkey" FOREIGN KEY ("formulaireId") REFERENCES "formulaires"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
