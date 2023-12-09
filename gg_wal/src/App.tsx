import CustomAppbar from "./components/CustomAppbar";
import Wallet from "./pages/wallets/page";

function App() {
  return (
    <div style={{minHeight: "100vh", width: "100%"}}>
      <CustomAppbar /> <Wallet />
    </div>
  );
}

export default App;
