import React from "react";
import { useEffect, useState } from "react";

export default function Api() {
  const [list, setList] = useState([]);
  const [currentValue, setCurrentValue] = useState([]);

  useEffect(() => {
    handleApi();
  }, [currentValue]);
  const handleApi = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts${
        currentValue === 0 ? "" : "/" + currentValue
      }`
    )
      .then((response) => response.json())
      .then((json) => setList(json));
  };

  return (
    <div>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <button onClick={() => setCurrentValue(item)}>
          {item === 0 ? "All" : item}
        </button>
      ))}

      {Array.isArray(list) ? (
        list.map((item, index, arr) => (
          <React.Fragment key={index}>
            <h1>{item.title}</h1>
            <h4>{item.body}</h4>
            {index < arr.length - 1 && <hr />}
          </React.Fragment>
        ))
      ) : (
        <>
          <h1>{list.title}</h1>
          <h4>{list.body}</h4>
        </>
      )}
    </div>
  );
}
