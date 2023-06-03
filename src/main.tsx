import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux/es/exports";
import { MainRoute } from "./Router/MainRoute.tsx";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { persistStore } from "redux-persist";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Store } from "./Global/Store.tsx";
import { PersistGate } from "redux-persist/integration/react";
import GlobalLoading from "./Static/GlobalLoading.tsx";

const queryQlient = new QueryClient();
let persitstore = persistStore(Store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate persistor={persitstore}>
        <QueryClientProvider client={queryQlient}>
          <Suspense fallback={<GlobalLoading />}>
            <RouterProvider router={MainRoute} />
          </Suspense>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
