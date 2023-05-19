import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Item from "./Item";
import classnames from "classnames";
import "./todos.scss";

const List = () => {
  const [tab, setTab] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  let filterdata = [];
  const { status, data, error, isFetching, refetch } = useQuery(
    "todos",
    async () => {
      const res = await axios.get(`http://localhost:8000/todos`);
      return res.data;
    }
    // { refetchInterval: intervalMs }
  );

  console.log('flag');
  console.log("data", data);

  useEffect(() => {
    switch (tab) {
      case 0:
        setFilteredData(data);
        break;
      case 1:
        setFilteredData(data.filter((item) => item.completed === false));
        break;
      case 2:
        setFilteredData(data.filter((item) => item.completed === true));
        break;
      default:
        break;
    }
  }, [tab, data]);

  return (
    <div>
      <div className="tab">
        <div
          className={classnames("tab-nav", {
            "is-select": tab === 0,
          })}
          onClick={() => setTab(0)}
        >
          모두
        </div>
        <div
          className={classnames("tab-nav", {
            "is-select": tab === 1,
          })}
          onClick={() => setTab(1)}
        >
          완료되지 않음
        </div>
        <div
          className={classnames("tab-nav", {
            "is-select": tab === 2,
          })}
          onClick={() => setTab(2)}
        >
          완료됨
        </div>
      </div>
      {filteredData &&
        filteredData.map((item, i) => <Item props={item} key={i} />)}
    </div>
  );
};

export default List;
