import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import "./index.css";
import theme from "./theme.ts";
import { NotesProvider } from "./contexts/notesContext";
import { CategoryProvider } from "./contexts/categoryContext.tsx";
import { SearchTextProvider } from "./contexts/searchTextContext.tsx";
import { IsCheckedProvider } from "./contexts/IsCheckedContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <SearchTextProvider>
        <IsCheckedProvider>
          <NotesProvider>
            <CategoryProvider>
              <App />
            </CategoryProvider>
          </NotesProvider>
        </IsCheckedProvider>
      </SearchTextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
