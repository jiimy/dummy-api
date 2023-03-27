import { AxiosError } from "axios";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
// import { fetchTodos } from "src/api/todos";
import { TODO } from "../../utils/api";
import axios from "axios";

export default function useUserList() {
  const { data, isLoading, error } = useQuery(
    ["getTodos"],
    () => axios.get(`${TODO}`),
    {
      // enabled: false, // 동기적으로할때 추가
      onSuccess: (data) => {
        console.log("onSuccess", data);
      },
      onError: (error) => {
        console.log("onError", error);
      },
    }
  );

  return { data, isLoading, error };
}
