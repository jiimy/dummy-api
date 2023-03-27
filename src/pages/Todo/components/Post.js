import React, { useState } from "react";
import axios from "axios";

const Post = () => {
  const [value, setValue] = useState();

  const submit = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/value", {
        userId: 1,
        id: 111,
        title: "delectus aut autem",
        completed: false,
      })
      .then(function (response) {
        // 성공 핸들링
        console.log("delete 응답 : ", response);
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log("delete 에러: ", error);
      });
  };

  return (
    <div>
      <input type="text" />
      <button onClick={submit}>저장</button>
    </div>
  );
};

export default Post;
