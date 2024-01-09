export default function ({ srcPath, setSrcPath, generate }) {
  return (
    <div className="bg-black w-full h-16 flex justify-between items-center space-x-2 px-16">
      <p className="text-white text-xl font-medium">
        Rythm{" "}
        <span className="bg-neutral-700 rounded-xl text-xs text-neutral-300 px-3 py-1">
          v0.0.1
        </span>
      </p>
      <input
        placeholder="Enter the src path"
        className="h-10 rounded-md px-4 py-2 w-3/5"
        value={srcPath}
        onChange={(e) => setSrcPath(e.target.value)}
      />
      <button
        className="bg-yellow-500 text-white h-10 px-4 py-2 rounded-md"
        onClick={generate}
      >
        Generate
      </button>
    </div>
  );
}
