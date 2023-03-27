import axios from "axios";
import React, { useEffect } from "react";
import Item from "./Item";

const List = ({ data = null }) => {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // 성공 핸들링
        console.log("삭제한 후 get 응답 : ", response.data);
      })
      .catch(function (error) {
        // 에러 핸들링
        console.log("get 에러: ", error);
      });
  });
  return (
    <div>
      {data && data.data.map((item, i) => <Item props={item} key={i} />)}
    </div>
  );
};

export default List;
