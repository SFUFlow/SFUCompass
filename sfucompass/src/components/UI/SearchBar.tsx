import React, { useEffect, useState } from "react";
import classes from "./SearchBar.module.css";

const DUMMY_DATA : string[] = ["mango", "apples", "oranges", "watermelon", "mfjldjfldf"];

export default function SearchBar() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState(["Nothing"]);

  function changeHandler(e: any) {
    setValue(e.target.value);
  }

  useEffect(() => {
    const filtered_arr: string[] = DUMMY_DATA.filter((item) => {
      return item.startsWith(value);
    });
    setResults(filtered_arr);
  }, [value]);

  return (
    <div>
      <input placeholder="Search" value={value} onChange={changeHandler} />
      {value && (
        <div className={classes.results}>
          <ul>
            {results.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
