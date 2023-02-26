import "@/styles/globals.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistedStore } from "src/redux/store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistedStore} loading={null}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
