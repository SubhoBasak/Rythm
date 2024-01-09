import { useState } from "react";

import ColTypeButton from "./ColTypeButton";
import MulIntInput from "./MulIntInput";
import MulStrInput from "./MulStrInput";

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
} from "../const";

export default function ({ setFilters }) {
  const [showModal, setShowModal] = useState(false);
  const [colName, setColName] = useState("");
  const [colType, setColType] = useState(INT_TYPE);
  const [filterType, setFilterType] = useState(MIN_FILTER);
  const [filterCount, setFilterCount] = useState(true);

  // filter value holders
  const [strVal, setStrVal] = useState(""); // single string value holder
  const [boolVal, setBoolVal] = useState(false); // bool filter value holder
  const [alpha, setAlpha] = useState(0); // single int value holder
  const [beta, setBeta] = useState(0); // secondary int value holder in case of range
  const [mulVal, setMulVal] = useState([]); // multiple value holder

  // reset all the holder states
  const resetValues = () => {
    setStrVal("");
    setAlpha(0);
    setBeta(0);
    setMulVal([]);
    setBoolVal(false);
  };

  // filter columns ui
  const IntFilters = (
    <div className="w-64 min-w-[256px] col-span-1 border-r p-3">
      <p className="text-xs text-neutral-400 mb-4">Int Filter Type:</p>
      <div className="space-y-2 font-light flex flex-col">
        <ColTypeButton
          name="Min"
          onClick={() => {
            setFilterType(MIN_FILTER);
            resetValues();
          }}
        />
        <ColTypeButton
          name="Max"
          onClick={() => {
            setFilterType(MAX_FILTER);
            resetValues();
          }}
        />
        <ColTypeButton
          name="Value"
          onClick={() => {
            setFilterType(VALUE_FILTER);
            resetValues();
          }}
        />
        <ColTypeButton
          name="Range"
          onClick={() => {
            setFilterType(RANGE_FILTER);
            resetValues();
          }}
        />
        <ColTypeButton
          name="Contain"
          onClick={() => {
            setFilterType(CONTAIN_FILTER);
            resetValues();
          }}
        />
      </div>
    </div>
  );

  const FloatFilters = (
    <div className="w-64 min-w-[256px] col-span-1 border-r p-3">
      <p className="text-xs text-neutral-400 mb-4">Float Filter Type:</p>
      <div className="space-y-2 font-light flex flex-col">
        <ColTypeButton
          name="Min"
          onClick={() => {
            setFilterType(MIN_FILTER);
            resetValues();
          }}
        />
        <ColTypeButton
          name="Max"
          onClick={() => {
            setFilterType(MAX_FILTER);
            resetValues();
          }}
        />
        <ColTypeButton
          name="Range"
          onClick={() => {
            setFilterType(RANGE_FILTER);
            resetValues();
          }}
        />
      </div>
    </div>
  );

  const StringFilters = (
    <div className="w-64 min-w-[256px] col-span-1 border-r p-3">
      <p className="text-xs text-neutral-400 mb-4">String Filter Type:</p>
      <div className="space-y-2 font-light flex flex-col">
        <ColTypeButton
          name="Value"
          onClick={() => {
            setFilterType(VALUE_FILTER);
            resetValues();
          }}
        />
        <ColTypeButton
          name="Contain"
          onClick={() => {
            setFilterType(CONTAIN_FILTER);
            resetValues();
          }}
        />
        <ColTypeButton
          name="Length"
          onClick={() => {
            setFilterType(LENGTH_FILTER);
            resetValues();
          }}
        />
        <ColTypeButton
          name="Min Length"
          onClick={() => {
            setFilterType(MIN_FILTER);
            resetValues();
          }}
        />
        <ColTypeButton
          name="Max Length"
          onClick={() => {
            setFilterType(MAX_FILTER);
            resetValues();
          }}
        />
        <ColTypeButton
          name="Starts with"
          onClick={() => {
            setFilterType(START_FILTER);
            resetValues();
          }}
        />
        <ColTypeButton
          name="Ends with"
          onClick={() => {
            setFilterType(END_FILTER);
            resetValues();
          }}
        />
      </div>
    </div>
  );

  // input ui
  const AlphaIntInput = (props) => (
    <div className="flex flex-col">
      <label className="mb-1 ml-1 text-xs">{props.label}</label>
      <input
        className="border rounded-md px-3 py-1"
        value={alpha}
        onChange={(e) => setAlpha(Number.parseInt(e.target.value) || 0)}
      />
    </div>
  );

  const AlphaFloatInput = (props) => (
    <div className="flex flex-col">
      <label className="mb-1 ml-1 text-xs">{props.label}</label>
      <input
        className="border rounded-md px-3 py-1"
        value={alpha}
        onChange={(e) => setAlpha(Number.parseFloat(e.target.value) || 0)}
      />
    </div>
  );

  const BetaIntInput = (props) => (
    <div className="flex flex-col">
      <label className="mb-1 ml-1 text-xs">{props.label}</label>
      <input
        className="border rounded-md px-3 py-1"
        value={beta}
        onChange={(e) => setBeta(Number.parseInt(e.target.value) || 0)}
      />
    </div>
  );

  const BetaFloatInput = (props) => (
    <div className="flex flex-col">
      <label className="mb-1 ml-1 text-xs">{props.label}</label>
      <input
        className="border rounded-md px-3 py-1"
        value={beta}
        onChange={(e) => setBeta(Number.parseFloat(e.target.value) || 0)}
      />
    </div>
  );

  const StringInput = (props) => (
    <div className="flex flex-col">
      <label className="mb-1 ml-1 text-xs">{props.label}</label>
      <input
        className="border rounded-md px-3 py-1"
        value={strVal}
        onChange={(e) => setStrVal(e.target.value)}
      />
    </div>
  );

  // filters ui
  const BoolValFilter = (
    <div className="flex flex-col">
      <p className="text-xs text-neutral-400 mb-4">Bool Filter Type:</p>
      <div className="flex items-center space-x-5">
        <div className="flex space-x-2">
          <input
            type="radio"
            name="bool"
            onChange={() => setBoolVal(false)}
            checked={boolVal === false}
          />
          <label className="text-xs">False</label>
        </div>
        <div className="flex space-x-2">
          <input
            type="radio"
            name="bool"
            onChange={() => setBoolVal(true)}
            checked={boolVal === true}
          />
          <label className="text-xs">True</label>
        </div>
      </div>
    </div>
  );

  const IntMinFilter = <AlphaIntInput label="Enter min value" />;
  const IntMaxFilter = <AlphaIntInput label="Enter max value" />;
  const IntValFilter = <AlphaIntInput label="Enter the value" />;
  const IntRangeFilter = (
    <>
      <AlphaIntInput label="Enter min value" />
      <BetaIntInput label="Enter max value" />
    </>
  );

  const FloatMinFilter = <AlphaFloatInput label="Enter min value" />;
  const FloatMaxFilter = <AlphaFloatInput label="Enter max value" />;
  const FloatRangeFilter = (
    <>
      <AlphaFloatInput label="Enter min value" />
      <BetaFloatInput label="Enter max value" />
    </>
  );

  const StrValFilter = <StringInput label="Enter string value" />;
  const StrStartFilter = <StringInput label="String starts with" />;
  const StrEndFilter = <StringInput label="String ends with" />;
  const StrLenFilter = <AlphaIntInput label="Enter string length" />;
  const StrMinLenFilter = <AlphaIntInput label="Enter min length" />;
  const StrMaxLenFilter = <AlphaIntInput label="Enter max langth" />;

  const GetFilterValue = () => {
    switch (colType) {
      case INT_TYPE: {
        switch (filterType) {
          case MIN_FILTER:
            return IntMinFilter;
          case MAX_FILTER:
            return IntMaxFilter;
          case VALUE_FILTER:
            return IntValFilter;
          case RANGE_FILTER:
            return IntRangeFilter;
          case CONTAIN_FILTER:
            return <MulIntInput mulVal={mulVal} setMulVal={setMulVal} />;
          default:
            return <></>;
        }
      }
      case FLOAT_TYPE: {
        switch (filterType) {
          case MIN_FILTER:
            return FloatMinFilter;
          case MAX_FILTER:
            return FloatMaxFilter;
          case RANGE_FILTER:
            return FloatRangeFilter;
          default:
            return <></>;
        }
      }
      case STRING_TYPE: {
        switch (filterType) {
          case VALUE_FILTER:
            return StrValFilter;
          case LENGTH_FILTER:
            return StrLenFilter;
          case MIN_FILTER:
            return StrMinLenFilter;
          case MAX_FILTER:
            return StrMaxLenFilter;
          case START_FILTER:
            return StrStartFilter;
          case END_FILTER:
            return StrEndFilter;
          case CONTAIN_FILTER:
            return <MulStrInput mulVal={mulVal} setMulVal={setMulVal} />;
          default:
            return <></>;
        }
      }
      case BOOL_TYPE: {
        return BoolValFilter;
      }
      default:
        return <></>;
    }
  };

  const ApplyFilter = () => {
    // input validation
    if (colName === "") return alert("Column name is required!");

    if (filterType === CONTAIN_FILTER && mulVal.length === 0)
      return alert("There is no value value for contain filter!");

    if (
      colType === STRING_TYPE &&
      (filterType === VALUE_FILTER ||
        filterType === START_FILTER ||
        filterType === END_FILTER) &&
      strVal === ""
    )
      return alert("Please enter the value for filter!");

    // filter object generation
    let filterData = { name: colName, type: colType, filter: filterType };

    switch (filterType) {
      case MIN_FILTER:
      case MAX_FILTER: {
        filterData.value = alpha;
        break;
      }
      case START_FILTER:
      case END_FILTER: {
        filterData.value = strVal;
        break;
      }
      case CONTAIN_FILTER: {
        filterData.values = mulVal;
        break;
      }
      case RANGE_FILTER: {
        filterData.min = alpha;
        filterData.max = beta;
        break;
      }
      case VALUE_FILTER: {
        if (colType === INT_TYPE) filterData.value = alpha;
        else if (colType === INT_TYPE) filterData.value = strVal;
        break;
      }
      case LENGTH_FILTER: {
        filterData.value = alpha;
        break;
      }
    }

    // add the filter data in the list and close modal
    setFilters(filterData);
    setColName("");
    setColType(INT_TYPE);
    setFilterType(MIN_FILTER);
    setFilterCount(true);
    setShowModal(false);
  };

  return (
    <>
      {/* button part */}
      <div className="w-full py-4 flex justify-end px-6">
        <button
          className="bg-neutral-300 rounded-xl text-xs px-3 py-1"
          onClick={() => setShowModal(true)}
        >
          Apply Filter
        </button>
      </div>

      {/* modal part */}
      {showModal && (
        <div className="fixed w-screen h-screen top-0 left-0 right-0 bottom-0 bg-black/15 flex justify-center items-center">
          <div className="w-4/6 h-4/6 bg-white shadow-lg rounded-md flex flex-col">
            {/* modal header */}
            <div className="w-full p-2 border-b border-gray-200 flex">
              <input
                placeholder="Enter column name"
                className="w-2/5 text-xs px-4 py-2 rounded-md border border-gray-300"
                value={colName}
                onChange={(e) => setColName(e.target.value)}
              />
              <button
                className="ml-auto bg-yellow-400 text-white text-xs px-4 py-2 rounded-md"
                onClick={ApplyFilter}
              >
                Apply
              </button>
              <button
                className="ml-2 bg-gray-100 text-xs px-4 py-2 rounded-md"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>

            {/* modal body */}
            <div className="flex w-full grow">
              {/* column type selector */}
              <div className="w-64 min-w-[256px] col-span-1 border-r p-3">
                <p className="text-xs text-neutral-400 mb-4">Column Type:</p>
                <div className="space-y-2 font-light flex flex-col">
                  <ColTypeButton
                    name="Integer"
                    onClick={() => {
                      setColType(INT_TYPE);
                      setFilterType(MIN_FILTER);
                      resetValues();
                    }}
                  />
                  <ColTypeButton
                    name="Float"
                    onClick={() => {
                      setColType(FLOAT_TYPE);
                      setFilterType(MIN_FILTER);
                      resetValues();
                    }}
                  />
                  <ColTypeButton
                    name="String"
                    onClick={() => {
                      setColType(STRING_TYPE);
                      setFilterType(VALUE_FILTER);
                      resetValues();
                    }}
                  />
                  <ColTypeButton
                    name="Bool"
                    onClick={() => {
                      setColType(BOOL_TYPE);
                      resetValues();
                    }}
                  />
                </div>
              </div>

              {/* filter list based on column type */}
              {colType === INT_TYPE && IntFilters}
              {colType === FLOAT_TYPE && FloatFilters}
              {colType === STRING_TYPE && StringFilters}

              {/* filter value input section */}
              <div className="p-3 flex flex-col space-y-3">
                <GetFilterValue />
                <hr />
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={filterCount}
                    onChange={() => setFilterCount(!filterCount)}
                  />
                  <label className="text-sm ">
                    Get number of rows after filter
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
