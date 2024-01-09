export default function ({ mulVal, setMulVal }) {
  const [containStr, setContainStr] = useState("");
  
  return (
    <div className="flex flex-col space-y-5">
      <p className="text-xs text-neutral-400">String values:</p>
      <div className="flex flex-wrap mb-3">
        {mulVal.length === 0 && (
          <p className="text-neutral-300 text-xs ml-8">
            No value present to filter!
          </p>
        )}
        {mulVal.map((item, indx) => (
          <div
            key={indx}
            className="flex items-center space-x-2 bg-yellow-200 text-yellow-700 px-2 py-0.5 rounded-xl text-xs ml-1 mt-1"
          >
            <p className="p-0 m-0">{item}</p>
            <span
              className="cursor-pointer"
              onClick={() => setMulVal(mulVal.filter((_, i) => i !== indx))}
            >
              x
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <input
          className="border rounded-md px-3 py-1"
          value={containStr}
          onChange={(e) => setContainStr(e.target.value)}
        />
        <button
          type="button"
          className="bg-yellow-400 text-white rounded-md px-2 py-1"
          onClick={() => {
            setMulVal([...mulVal, containStr]);
            setContainStr("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
