import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { eventsApi } from "./Features/Redux/Api/EventsApi.ts";
import { Provider } from "react-redux";
import { EventStore } from "./Features/Redux/MainEventsStore.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={eventsApi}>
      <Provider store={EventStore}>
        <App />
      </Provider>
    </ApiProvider>
  </StrictMode>,
);
