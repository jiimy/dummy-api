import "./assets/style/index.scss";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/Products/ProductsPage";
import Header from "./components/header/Header";
import MainPage from "pages/Main/MainPage";
import TodoPage from "pages/Todo/TodoPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/products"} element={<ProductsPage />} />
        <Route path={"/todos"} element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
