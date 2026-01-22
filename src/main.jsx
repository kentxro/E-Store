import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Chakra_Provider} from "./components/ui/provider";
import { Provider } from "react-redux";
import App from "./app";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Chakra_Provider>
      <App></App>
    </Chakra_Provider>
  </StrictMode>
);