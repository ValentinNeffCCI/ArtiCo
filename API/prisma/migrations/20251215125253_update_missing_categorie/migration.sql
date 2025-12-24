-- DropForeignKey
ALTER TABLE "entreprises" DROP CONSTRAINT "entreprises_categorieId_fkey";

-- AlterTable
ALTER TABLE "entreprises" ALTER COLUMN "categorieId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "entreprises" ADD CONSTRAINT "entreprises_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
