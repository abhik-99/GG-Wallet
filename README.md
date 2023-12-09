# GG Wal
A Wallet to re-define the identity layer of Web3. 

## Things that remain
The following things need to be implemented
1. Creating a Backend.
    1. Should be able to store user profile
    2. Should be able to recognize Web3Auth Id Token and user address and respond.
    3. Should be able to sign message and send back so that the sybil NFT contracts can verify.
    4. Should be able to store Wallets Created and Beneficiaries for each wallet.
2. Smart Contract:
    1. Create the Factory Contract for GGWAccount on Base and Polygon Mumbai - **Done**
    2. Deploy and test the Factory for deploying new Accounts.
    3. Deploy and Test the GGWAccount for operations.
    4. Integrate Chainlink CCIP into SybilNFT and SybilNFTResolver - **Done**
    5. Deploy and Test SybilNFT contracts on Base, Polygon Mumbai and Sepolia.