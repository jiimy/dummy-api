import React from "react";
import ReactDOM from "react-dom/client";
import { unstable_HistoryRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import history from "./hooks/useHistory";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  onError: (error, query) => {
    console.log("onError", error);
  },
  onSuccess: (data) => {
    console.log("전역이 업데이트됨?", data);
  },
  // defaultOptions: {
  //   queries: {
  //     retry: 0,
  //     suspense: true,
  //     refetchOnMount: false,
  //     refetchOnReconnect: false,
  //     refetchOnWindowFocus: false,
  //   },
  // },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        {/* devtools */}
        <ReactQueryDevtools initialIsOpen={true} />
        <App />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
