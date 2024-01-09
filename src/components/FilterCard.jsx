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

function Badges({ values }) {
  return (
    <div className="w-full flex flex-wrap">
      {values.map((item) => (
        <p className="ml-1 mt-1 bg-yellow-200 text-yellow-500 text-xs px-2 py-1 rounded-xl">
          {item}
        </p>
      ))}
    </div>
  );
}

function getTypeBadge(type) {
  let badge_dynamic_class = "px-3 w-fit h-fit py-1 text-xs rounded-xl ";
  let type_name;

  switch (type) {
    case INT_TYPE: {
      type_name = "integer";
      badge_dynamic_class += "bg-emerald-100 text-emerald-500";
      break;
    }
    case FLOAT_TYPE: {
      type_name = "float";
      badge_dynamic_class += "bg-cyan-100 text-cyan-500";
      break;
    }
    case STRING_TYPE: {
      type_name = "string";
      badge_dynamic_class += "bg-yellow-100 text-yellow-500";
      break;
    }
    case BOOL_TYPE: {
      type_name = "bool";
      badge_dynamic_class += "bg-orange-100 text-orange-500";
      break;
    }
  }

  return <p className={badge_dynamic_class}>{type_name}</p>;
}

function getFilterBadge(filter) {
  let badge_dynamic_class = "px-3 w-fit h-fit py-1 text-xs rounded-xl ";
  let filter_name;

  switch (filter) {
    case MIN_FILTER: {
      filter_name = "min";
      badge_dynamic_class += "bg-indigo-100 text-indigo-500";
      break;
    }
    case MAX_FILTER: {
      filter_name = "max";
      badge_dynamic_class += "bg-red-100 text-red-500";
      break;
    }
    case RANGE_FILTER: {
      filter_name = "range";
      badge_dynamic_class += "bg-pink-100 text-pink-500";
      break;
    }
    case VALUE_FILTER: {
      filter_name = "value";
      badge_dynamic_class += "bg-violet-100 text-pink-500";
      break;
    }
    case CONTAIN_FILTER: {
      filter_name = "contain";
      badge_dynamic_class += "bg-green-100 text-green-500";
      break;
    }
    case LENGTH_FILTER: {
      filter_name = "length";
      badge_dynamic_class += "bg-teal-100 text-teal-500";
      break;
    }
    case START_FILTER: {
      filter_name = "starting";
      badge_dynamic_class += "bg-sky-100 text-sky-500";
      break;
    }
    case END_FILTER: {
      filter_name = "ending";
      badge_dynamic_class += "bg-rose-100 text-rose-500";
      break;
    }
  }

  return <p className={badge_dynamic_class}>{filter_name}</p>;
}

function IntFilterValues(data) {
  switch (data.filter) {
    case MIN_FILTER: {
      return (
        <p>
          <strong className="font-normal">min: </strong>
          {data.value}
        </p>
      );
    }
    case MAX_FILTER: {
      return (
        <p>
          <strong className="font-normal">max: </strong>
          {data.value}
        </p>
      );
    }
    case RANGE_FILTER: {
      return (
        <p>
          <strong className="font-normal">from: </strong>
          {data.min} <strong className="font-normal">to: </strong>
          {data.max}
        </p>
      );
    }
    case VALUE_FILTER: {
      return (
        <p>
          <strong className="font-normal">value: </strong>
          {data.value}
        </p>
      );
    }
    case CONTAIN_FILTER: {
      return <Badges values={data.values} />;
    }
  }
}

function FloatFilterValues(data) {
  switch (data.filter) {
    case MIN_FILTER: {
      return (
        <p>
          <strong className="font-normal">min: </strong>
          {data.value}
        </p>
      );
    }
    case MAX_FILTER: {
      return (
        <p>
          <strong className="font-normal">max: </strong>
          {data.value}
        </p>
      );
    }
    case RANGE_FILTER: {
      return (
        <p>
          <strong className="font-normal">from: </strong>
          {data.min} <strong className="font-normal">to: </strong>
          {data.max}
        </p>
      );
    }
  }
}

function StringFilterValues(data) {
  switch (data.filter) {
    case VALUE_FILTER: {
      return (
        <p>
          <strong>value: </strong>
          {data.value}
        </p>
      );
    }
    case CONTAIN_FILTER: {
      return <Badges values={data.values} />;
    }
    case LENGTH_FILTER: {
      return (
        <p>
          <strong>length: </strong>
          {data.value}
        </p>
      );
    }
    case MIN_FILTER: {
      return (
        <p>
          <strong>min length: </strong>
          {data.value}
        </p>
      );
    }
    case MAX_FILTER: {
      return (
        <p>
          <strong>max length: </strong>
          {data.value}
        </p>
      );
    }
    case START_FILTER: {
      return (
        <p>
          <strong>starts with: </strong>
          {data.value}
        </p>
      );
    }
    case END_FILTER: {
      return (
        <p>
          <strong>ends with: </strong>
          {data.value}
        </p>
      );
    }
  }
}

function BoolFilterValues(data) {
    
}

function getValues(data) {
  switch (data.type) {
    case INT_TYPE:
      return IntFilterValues(data);
    case FLOAT_TYPE:
      return FloatFilterValues(data);
    case STRING_TYPE:
      return StringFilterValues(data);
    case BOOL_TYPE:
      return;
  }
}

export default function ({ filter, remove }) {
  return (
    <div className="w-full border rounded-lg px-3 py-1 flex flex-col space-x-4">
      <div className="flex items-center p-2">
        <p className="w-3/12 font-normal truncate">{filter.name}</p>
        <div className="w-2/12">{getTypeBadge(filter.type)}</div>
        <div className="w-2/12">{getFilterBadge(filter.filter)}</div>
        <div className="w-4/12 text-xs">{getValues(filter)}</div>
        <button
          onClick={remove}
          className="w-1/12 bg-red-600 text-white text-xs py-2 rounded-md"
        >
          remove
        </button>
      </div>
    </div>
  );
}
