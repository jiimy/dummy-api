import React from "react";
import { useInView } from "react-intersection-observer";
import './todos.scss';

const Item = ({ props }) => {
  const { ref, inView } = useInView({
    // 라이브러리 옵션
    threshold: 0,
    // triggerOnce: true,
    fallbackInView: true,
    // rootMargin: "-100px 0px",
    placeholder: 0.3
  });

  return (
    // <div ref={ref} key={props.key}>
    //   {inView && props.title}
    // </div>
    <div ref={ref} key={props.key} className="items">
      {inView && props.title}
    </div>
  );
};

export default Item;
	
