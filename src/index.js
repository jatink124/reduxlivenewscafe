import React from "react";
import ReactDOM from "react-dom";
import {QueryClient,QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <App />
    </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
