import { useState, useEffect } from "react";
import { Provider } from "react-redux";

import RootNav from "./navigation/RootNav";
import { store } from "./appRedux/store";

export default function App() {
  console.log("App executed at :", new Date().toUTCString());
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
  }, [state]);
  return <Provider store={store}>{state && <RootNav />}</Provider>;
}
