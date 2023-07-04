import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router";

import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
