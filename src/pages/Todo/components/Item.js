import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import classnames from "classnames";
import "./todos.scss";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const Item = ({ props }) => {
  const [chkId, setChkId] = useState(props.id);
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState("");

  const { ref, inView } = useInView({
    // 라이브러리 옵션
    threshold: 0,
    // triggerOnce: true,
    fallbackInView: true,
    // rootMargin: "-100px 0px",
    placeholder: 0.3,
  });

  useEffect(() => {
    setChkId(props.id);
  }, [props]);

  const queryClient = useQueryClient();

  // TODO: 이 부분이 공통적인데 hook로 빼주기
  const updateMutation = useMutation(
    (newTodo) => axios.put(`http://localhost:8000/todos/${chkId}`, newTodo),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries("todos");
        queryClient.setQueryData("putTodo", data.data);
      },
    }
  );

  const deleteMutation = useMutation(
    (newTodo) => axios.delete(`http://localhost:8000/todos/${chkId}`, newTodo),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries("todos");
        queryClient.setQueryData("putTodo", data.data);
      },
    }
  );

  const editTodo = (text) => {
    setEdit(!edit);
    if (edit) {
      updateMutation.mutate({
        id: props.id,
        title: editText ? editText : text,
        completed: false,
      });
    }
  };

  const changeTodo = (e, key) => {
    setEditText(e.target.value);
  };

  return (
    <div
      ref={ref}
      key={props.key}
      className={classnames("items", { "is-com": props.completed === true })}
    >
      {inView && (
        <>
          <div className="text">
            {edit ? (
              <input
                defaultValue={props.title}
                onChange={(e) => changeTodo(e, props.id)}
              />
            ) : (
              props.title
            )}
          </div>
          <div className="control">
            <label htmlFor={props.key}>
              <input
                type="checkbox"
                name=""
                id={props.key}
                checked={props.completed}
                onChange={() => {
                  setChkId(props.id);
                  updateMutation.mutate({
                    id: props.id,
                    title: props.title, // TODO: 기존 데이터를 유지할순 없을까
                    completed: !props.completed,
                  });
                }}
              />
              완료
            </label>
            <button onClick={() => editTodo(props.title)}>
              {edit ? "확인" : "수정"}
            </button>
            <button
              onClick={() => {
                setChkId(props.id);
                deleteMutation.mutate();
              }}
            >
              삭제
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Item;
