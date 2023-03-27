import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Item from "./Item";

const List = () => {
  const [apiData, setApiData] = useState([]);
  const [intervalMs, setIntervalMs] = useState(1500);

  const { status, data, error, isFetching, refetch } = useQuery(
    "todos",
    async () => {
      const res = await axios.get(`http://localhost:8000/todos`);
      return res.data;
    },
    // { refetchInterval: intervalMs }
  );

  // if (isFetching) {
  //   // console.log("fetching...");
  //   return null;
  // }

  // if (status === "loading") {
  //   return <span>Loading...</span>;
  // }

  // if (status === "error") {
  //   console.log("error", error);
  // }

  // if (status === "success") {
  //   console.log("get: ", data);
  // }

  return (
    <div>
      <input
        value={intervalMs}
        onChange={(ev) => setIntervalMs(Number(ev.target.value))}
        type="number"
        step="100"
      />{" "}
      <span
        style={{
          display: "inline-block",
          marginLeft: ".5rem",
          width: 10,
          height: 10,
          background: isFetching ? "green" : "transparent",
          transition: !isFetching ? "all .3s ease" : "none",
          borderRadius: "100%",
          transform: "scale(2)",
        }}
      />

      {data && data.map((item, i) => (
        <Item props={item} key={i} />
      ))}
    </div>
  );
};

export default List;
