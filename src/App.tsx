import { store } from "@app/redux/store";
import theme from "@styles/theme";
import { ThemeProvider } from "styled-components";
import { Provider as StoreProvider, useSelector } from "react-redux";
import { ReactToastContainer } from "@lib/toast";
import AppRoutes from "./AppRoutes";
import { verifyToken } from "@API/services/Auth/main";
import { useEffect } from "react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider store={store}>
        <ReactToastContainer />
        <AppRoutes />
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
