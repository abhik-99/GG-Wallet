-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "walletAddress" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "anonAdhaarPcd" TEXT
);

-- CreateTable
CREATE TABLE "SybilNFT" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "sybilContractChainId" TEXT NOT NULL,
    "userId" TEXT,
    CONSTRAINT "SybilNFT_sybilContractChainId_fkey" FOREIGN KEY ("sybilContractChainId") REFERENCES "SybilContract" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SybilNFT_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SmartContractWallet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "address" TEXT NOT NULL,
    "chainChainId" TEXT NOT NULL,
    CONSTRAINT "SmartContractWallet_chainChainId_fkey" FOREIGN KEY ("chainChainId") REFERENCES "Chain" ("chainId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SybilContract" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "contractAddress" TEXT NOT NULL,
    "chainChainId" TEXT NOT NULL,
    CONSTRAINT "SybilContract_chainChainId_fkey" FOREIGN KEY ("chainChainId") REFERENCES "Chain" ("chainId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Chain" (
    "chainId" TEXT NOT NULL,
    "chainName" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Chain_chainId_key" ON "Chain"("chainId");
