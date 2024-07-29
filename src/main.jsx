import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { theme } from "./assets/theme.js";
import { ToastContainer } from "react-toastify";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GITHUB_SCANNER_BASE_URL,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <ToastContainer theme="dark" position="bottom-right" />
        <App />
      </MantineProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
