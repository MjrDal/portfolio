/*
  Warnings:

  - You are about to drop the column `SecondTag` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `firstTag` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `thirdTag` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "SecondTag",
DROP COLUMN "firstTag",
DROP COLUMN "thirdTag";
