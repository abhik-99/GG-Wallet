/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `SybilNFT` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "walletAddress" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "anonAdhaarPcd" TEXT
);
INSERT INTO "new_User" ("anonAdhaarPcd", "verified", "walletAddress") SELECT "anonAdhaarPcd", "verified", "walletAddress" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_walletAddress_key" ON "User"("walletAddress");
CREATE INDEX "User_walletAddress_idx" ON "User"("walletAddress");
CREATE TABLE "new_SybilNFT" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "sybilContractChainId" TEXT NOT NULL,
    "userWalletAddress" TEXT,
    CONSTRAINT "SybilNFT_sybilContractChainId_fkey" FOREIGN KEY ("sybilContractChainId") REFERENCES "SybilContract" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SybilNFT_userWalletAddress_fkey" FOREIGN KEY ("userWalletAddress") REFERENCES "User" ("walletAddress") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_SybilNFT" ("id", "sybilContractChainId") SELECT "id", "sybilContractChainId" FROM "SybilNFT";
DROP TABLE "SybilNFT";
ALTER TABLE "new_SybilNFT" RENAME TO "SybilNFT";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
