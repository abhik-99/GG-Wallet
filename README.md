# GG Wal
A Wallet to re-define the identity layer of Web3. 

## Things that remain
The following things need to be implemented
1. Creating a Backend.
    1. Should be able to store user profile - **Done**
    2. Should be able to recognize Web3Auth Id Token and user address and respond.
    3. Should be able to sign message and send back so that the sybil NFT contracts can verify - **Done**
    4. Should be able to store Wallets Created and Beneficiaries for each wallet.
2. Smart Contract:
    1. Create the Factory Contract for GGWAccount on Base and Polygon Mumbai - **Done**
    2. Deploy and test the Factory for deploying new Accounts:
        1. Ether Sepolia
        2. Base Goerli
        3. Mumbai
        4. Celo Alfajores
        5. Scroll Testnet
    3. Deploy and Test the GGWAccount for operations.
        1. Ether Sepolia
        2. Base Goerli
        3. Mumbai
        4. Celo Alfajores
        5. Scroll Testnet
    4. Integrate Chainlink CCIP into SybilNFT and SybilNFTResolver - **Done**
    5. Deploy and Test SybilNFT contracts on Base, Polygon Mumbai and Sepolia.
        1. Ether Sepolia
        2. Base Goerli
        3. Mumbai
3. Frontend:
    1. Web3Auth Integration - **Done**
    2. Integration of User Profile Storage and Verification Facilty of Backend - 
    3. Integration of Sybil Minting functionality on Frontend - 
    4. Integration of AA-aided SCW for
        1. Ether Sepolia
        2. Base Goerli
        3. Mumbai
        4. Celo Alfajores
        5. Scroll Testnet