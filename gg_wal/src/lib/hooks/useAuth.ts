import { useNavigate } from "react-router-dom";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { web3AuthInstance } from "../utils";
type UseAuthProps = {
  redirect?: string;
};

export function useAuth({ redirect = "/app/profile" }: UseAuthProps = {}) {
  const { connectAsync, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { isConnected } = useAccount();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const web3AuthConnector = connectors[0];
    const userInfo = await connectAsync({ connector: web3AuthConnector });
    if (userInfo) navigate(redirect);

    const profile = await web3AuthInstance.getUserInfo();
    const authInfo = await web3AuthInstance.authenticateUser();
    console.log("Profile", profile);
    console.log("authInfo", authInfo);
  };
  const handleSignOut = () => {
    if (isConnected) disconnect();
  };

  return {
    handleSignIn,
    handleSignOut,
  };
}
