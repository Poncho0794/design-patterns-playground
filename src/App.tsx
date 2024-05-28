import React from "react";

import "./App.css";
import { TestFactory } from "./components/test-factory";
interface Props {}
const App: React.FC<Props> = () => {
  return (
    <>
      <TestFactory />
    </>
  );
};

export default App;
