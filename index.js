import { createRoot } from "react-dom/client";
import App from "./src/App";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./src/redux/store";
const container = document.getElementById("app");
const persistor = persistStore(store);
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
