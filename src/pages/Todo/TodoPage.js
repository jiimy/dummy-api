import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Post";
import List from "./components/List";

const TodoPage = () => {
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
