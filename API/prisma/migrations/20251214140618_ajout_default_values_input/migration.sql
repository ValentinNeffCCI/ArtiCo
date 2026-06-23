-- DropIndex
DROP INDEX "inputs_name_key";

-- AlterTable
ALTER TABLE "inputs" ALTER COLUMN "name" SET DEFAULT 'Nouveau champ',
ALTER COLUMN "type" SET DEFAULT 'text',
ALTER COLUMN "required" SET DEFAULT true;

-- AlterTable
ALTER TABLE "options" ALTER COLUMN "value" SET DEFAULT 'Nouveau choix';
