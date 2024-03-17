import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout/Layout";
import HomePage from "./Homepage/Homepage";
import ProductPage from "./ProductPage/ProductPage";
import ScrollToTop from "../Scroll";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
