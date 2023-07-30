import "./assets/style/index.scss";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/Products/ProductsPage";
import Header from "./components/header/Header";
import MainPage from "pages/Main/MainPage";
import TodoPage from "pages/Todo/TodoPage";
import TestPage from "pages/TestPage/TestPage";

import { messaging } from "./firebase-get-token";
// import { getToken } from "firebase/messaging";
import { useEffect } from "react";
// import getToken from "./utils/firebase";
import Test from "components/Test/Test";
import useGetToken from "firebase-get-token";

function App() {
  // async function requestPermission() {
  //   const permission = await Notification.requestPermission();
  //   if (permission === "granted") {
  //     const token = await getToken(messaging, {
  //       vapidKey: "BOWbgLD10kyQ6zwV8RpnBg84oLQCD6Ll1t2u0AWjDxd1-u3sbTNy1DbKHEvJpvgLrUAhinaytkHIDakxn0HETaI",
  //     });
  //     console.log("token : ", token);
  //   } else if (permission === "denied") {
  //     console.log("denied");
  //   }
  // }
  // useEffect(() => {
  //   requestPermission();
  // }, []);
  useGetToken();

  return (
    <div className="App">
      <Test />
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
