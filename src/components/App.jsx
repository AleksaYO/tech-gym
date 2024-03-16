import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout/Layout";
import HomePage from "./Homepage/Homepage";
import AAA from "./AAA/AAA";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
