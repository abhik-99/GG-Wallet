# GG Wallet
A Wallet to re-define the identity layer of Web3. 

## What is it supposed to do?
GG Wallet is aimed at providing the following for the ecosystem:
1. Easy onboarding of Web3 Users.
2. Dead Man's switch without the use of complex MPC or methods utilizing sharing of Private Key.
3. Any Chain extendible Sybil Resistance through ZK-proof based NFTs.

## How it works?

### Phase 1
1. User gets onboarded through Social Login (Web3Auth).
2. User Verifies through Proof of Personhood (Anon ADHAAR SDK).
3. User Creates and Deploys GG Wallet on chain.
4. User Mints Sybil NFT which she/he can port to almost any chain (as long as that chain has Chainlink CCIP).

### Phase 2
1. User (let's say User A) invites new user onto the platform through email.
2. New User (let's say User B) onboards, verifies Proof of Personhood and is selected by User A as inheritor for User A's GG Wallet.
3. User B starts redemption and waits for the timelock to be over to redeem/withdraw funds from User A's wallet once User A is dead.

Behind the scenes, the GG Wallet deployed verifies if a transaction coming to is coming from owner (User A) or User B (if redemption timelock period has started) or is coming from Entrypoint (but is signed by User A or User B).

## Things that remain
The following things need to be implemented
1. Creating a Backend.
    1. Should be able to store user profile - **Done**
    2. Should be able to recognize Web3Auth Id Token and user address and respond. **Done**
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
    2. Integration of User Profile Storage and Verification Facilty of Backend -  **In-Progress**
    3. Integration of Sybil Minting functionality on Frontend - 
    4. Integration of AA-aided SCW for
        1. Ether Sepolia
        2. Base Goerli
        3. Mumbai
        4. Celo Alfajores
        5. Scroll Testnet