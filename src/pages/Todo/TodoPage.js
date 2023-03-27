import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Post";
import List from "./components/List";

const TodoPage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/posts")
      .then(function (response) {
        // 성공 핸들링
        console.log("get 응답 : ", response.data);
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log("get 에러: ", error);
      });

    // axios
    //   .delete("https://jsonplaceholder.typicode.com/posts/1")
    //   .then(function (response) {
    //     // 성공 핸들링
    //     // setData(response.data);
    //     console.log("delete 응답 : ", response.data);
    //   })
    //   .catch(function (error) {
    //     // 에러 핸들링
    //     console.log("delete 에러: ", error);
    //   });

    // axios
    //   .post("https://jsonplaceholder.typicode.com/posts", {
    //     title: "foo",
    //     body: "bar",
    //     userId: 1,
    //   })
    //   .then(function (response) {
    //     // 성공 핸들링
    //     setData(response.data);
    //     console.log("delete 응답 : ", response);
    //   })
    //   .catch(function (error) {
    //     // 에러 핸들링
    //     console.log("delete 에러: ", error);
    //   });
  }, []);

  console.log("da", data);

  return (
    <div>
      투두페이지
      <Posts />
      <List />
      {/*
       */}
    </div>
  );
};

export default TodoPage;
