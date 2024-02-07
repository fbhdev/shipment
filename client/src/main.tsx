
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {App} from "./app.component.tsx";
import {QueryClient, QueryClientProvider} from "react-query";
import {HashRouter as Router} from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App/>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
