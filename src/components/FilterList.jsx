import FilterCard from "./FilterCard";

export default function ({ filters, setFilters }) {
  return (
    <div className="flex flex-col space-y-2 py-8 px-6 w-7/12 mx-auto border rounded-lg">
      <h1 className="text-sm font-medium text-neutral-500">All filters</h1>
      {filters.length === 0 && (
        <div className="w-full py-16 flex justify-center items-center">
          <p className="text-sm text-neutral-400">No filter applied yet</p>
        </div>
      )}
      {filters.map((filter, indx) => (
        <FilterCard
          key={indx}
          filter={filter}
          remove={() => {
            setFilters(filters.filter((_, i) => i !== indx));
          }}
        />
      ))}
    </div>
  );
}
