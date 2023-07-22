import React, { useEffect } from "react";
import axios from "axios";

const MainPage = () => {
  // useEffect(() => {
  //   axios
  //     .post("https://jsonplaceholder.typicode.com/posts", {
  //       title: "foo",
  //       body: "bar",
  //       userId: 1,
  //     })
  //     .then(function (response) {
  //       console.log("post응답:", response);
  //     })
  //     .catch(function (error) {
  //       console.log("post에러", error);
  //     });

  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then(function (response) {
  //       // 성공 핸들링
  //       console.log("get 응답 : ", response);
  //     })
  //     .catch(function (error) {
  //       // 에러 핸들링
  //       console.log("get 에러: ", error);
  //     });
  // }, []);

  return <div>메인</div>;
};

export default MainPage;
