-- DropIndex
DROP INDEX "Category_name_key";

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "updatedAt" DROP NOT NULL;
