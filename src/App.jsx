import { CryptoContextProvider } from "./context/cryptoContext";
import AppLayout from "./componetns/layout/AppLayout";
export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
}
