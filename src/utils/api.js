import axios from "axios";

// http://localhost:8000/todos

 function fetchTodoList(endpoint) {
  // return promise
  return axios.get(`http://localhost:8000/${endpoint}`);
}
