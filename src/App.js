import "./assets/style/index.scss";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/Products/ProductsPage";
import Header from "./components/header/Header";
import MainPage from "pages/Main/MainPage";
import TodoPage from "pages/Todo/TodoPage";
import TestPage from "pages/TestPage/TestPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/products"} element={<ProductsPage />} />
        <Route path={"/todos"} element={<TodoPage />} />
        <Route path={"/test"} element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default App;
