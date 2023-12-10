import { useNavigate } from "react-router-dom";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { publicKeyToAddress, web3AuthInstance } from "../utils";
import * as jose from "jose";

type UseAuthProps = {
  redirect?: string;
};

export function useAuth({ redirect = "/app/profile" }: UseAuthProps = {}) {
  const { connectAsync, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { isConnected, address } = useAccount();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const web3AuthConnector = connectors[0];
    const userInfo = await connectAsync({ connector: web3AuthConnector });
    // if (userInfo) navigate(redirect);

    const profile = await web3AuthInstance.getUserInfo();
    const authInfo = await web3AuthInstance.authenticateUser();
    console.log("Profile", profile);
    console.log("authInfo", authInfo);
    console.log("ADDRESS", address)

    const jwks = jose.createRemoteJWKSet(
      new URL("https://api-auth.web3auth.io/jwks")
    );
  
    const jwtDecoded = await jose.jwtVerify(profile.idToken as string, jwks, {
      algorithms: ["ES256"],
    });
    const publicKeys = (jwtDecoded.payload as any).wallets.map(
      (wallet: { public_key: string }) => publicKeyToAddress(wallet.public_key)
    );
    const res = await fetch(`http://localhost:3000/user/${publicKeys[0]}`)
    const userRes = await res.json();
    if(userRes?.statusCode === 404) {
      const res = await fetch(`http://localhost:3000/user`, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          walletAddress: publicKeys[0]
        }),
        
      });
      // console.log("Response", await res.json())
    }
    navigate(redirect);
  };
  const handleSignOut = () => {
    if (isConnected) disconnect();
  };

  return {
    handleSignIn,
    handleSignOut,
  };
}
