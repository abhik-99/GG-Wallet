import { createConfig, configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
import { CHAIN_NAMESPACES } from '@web3auth/base';
import { Web3Auth } from '@web3auth/modal';

export const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)



// Instantiating Web3Auth
export const web3AuthInstance = new Web3Auth({
  clientId: import.meta.env.VITE_APP_W3A_CLIENT_ID || "",
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x" + chains[0].id.toString(16),
    rpcTarget: chains[0].rpcUrls.default.http[0], // This is the public RPC we have added, please pass on your own endpoint while creating an app
    displayName: chains[0].name,
    tickerName: chains[0].nativeCurrency?.name,
    ticker: chains[0].nativeCurrency?.symbol,
    blockExplorer: chains[0]?.blockExplorers.default?.url,
  },
  web3AuthNetwork: "sapphire_devnet",
  uiConfig: {
    appName: "GG Wallet",
  }
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [
    new Web3AuthConnector({chains, options: {
      web3AuthInstance
    }})
  ],
  webSocketPublicClient,
})
