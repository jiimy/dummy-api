import axios from "axios";
import { useState } from "react";
import { QueryClient, useMutation, useQueryClient } from "react-query";

const Post = () => {
  const [text, setText] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation(
    "addTodos",
    (param) => axios.post(`http://localhost:8000/todos`, param),
    {
      // NOTE: 안쓰는 코드이긴하지만 예제를 위하여 남겨놓기
      onMutate: (variables) => {
        // console.log("onMutate: ", variables);
      },
      onError: (error, variables, context) => {
        console.log("onError: ", context);
      },
      onSuccess: (data, variables, context) => {
        // console.log("onSuccess: ", data);
        // queryClient.setQueryData("todos", data);
        queryClient.invalidateQueries("todos");
      },
      onSettled: (data, error, variables, context) => {
        // console.log("onSettled: ", data);
      },
    }
  );

  const submit = () => {
    mutation.mutate({ title: text, completed: false });
    setText('');
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <button onClick={submit}>저장</button>
    </div>
  );
};

export default Post;
