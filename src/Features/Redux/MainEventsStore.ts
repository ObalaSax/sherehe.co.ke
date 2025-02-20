import { configureStore } from "@reduxjs/toolkit";
import { eventsApi } from "./Api/EventsApi";

export const EventStore = configureStore({
  reducer: {
    [eventsApi.reducerPath]: eventsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eventsApi.middleware),
});
