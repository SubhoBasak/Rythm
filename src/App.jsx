import { useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import FilterList from "./components/FilterList";

import {
  // types
  INT_TYPE,
  FLOAT_TYPE,
  STRING_TYPE,
  BOOL_TYPE,

  // filters
  MIN_FILTER,
  MAX_FILTER,
  RANGE_FILTER,
  VALUE_FILTER,
  CONTAIN_FILTER,
  LENGTH_FILTER,
  START_FILTER,
  END_FILTER,
} from "./const";

export default function () {
  const [srcPath, setSrcPath] = useState("");
  const [filters, setFilters] = useState([]);

  function getJson() {
    // validation
    if (srcPath === "") return alert("Please enter the src path!");

    // prepare the data
    const json_data = JSON.stringify({
      src: srcPath,
      context: {
        types: {
          int: INT_TYPE,
          float: FLOAT_TYPE,
          str: STRING_TYPE,
          bool: BOOL_TYPE,
        },
        filters: {
          min: MIN_FILTER,
          max: MAX_FILTER,
          range: RANGE_FILTER,
          value: VALUE_FILTER,
          contain: CONTAIN_FILTER,
          length: LENGTH_FILTER,
          start: START_FILTER,
          end: END_FILTER,
        },
      },
      applied: { filters },
    });
    const blob_data = new Blob([json_data], { type: "application/json" });

    // create ancher tag
    const a = document.createElement("a");

    // setup the ancher tag
    a.href = window.URL.createObjectURL(blob_data);
    a.download = "data.json";

    // download the file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <div className="flex flex-col">
      <Navbar srcPath={srcPath} setSrcPath={setSrcPath} generate={getJson} />
      <Filter setFilters={(f) => setFilters([...filters, f])} />
      <FilterList filters={filters} setFilters={setFilters} />
    </div>
  );
}
